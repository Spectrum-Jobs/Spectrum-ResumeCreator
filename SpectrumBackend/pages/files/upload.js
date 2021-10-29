const multer = require("multer"); //need to remove
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const path = require("path");
const { config } = require("../../config/config");
const { allowedFileTypes } = require("../../config/settings");
const s3 = require("./settings");


const multerFileUpload = multer({
  limits: { fileSize: config.ChunkSize },
  storage: multerS3({
    s3: s3,
    bucket: config.Bucket,
    acl: config.Acl,
    key: function (req, file, callback) {
      renameOriginalFile(req, file, callback);
    },
  }),
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
}).single("file");

const fileUpload = (req, res) => {
  multerFileUpload(req, res, (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      // If File not found
      if (req.file === undefined) {
        res.status(400).json("Error: No File Selected");
      }  if (req.body.filepath === undefined || !req.body.filepath ) {
        res.status(400).json("Error : Pass proper file path");
      } else {
        // If Success
        const fileName = req.file.key;
        const fileLocation = req.file.location;
        const originalFileName = req.file.originalname;

        //console.log("filepath", req.body.filepath )

        res.json({
          success: true,
          fileName: fileName,
          originalFileName: originalFileName,
          path: fileLocation,
        });
      }
    }
  });
};

function checkFileType(file, callback) {
  // Allowed ext
  //const filetypes = /jpeg|jpg|png|gif|pdf/;

  const Filetypes = Object.keys(allowedFileTypes);

  const Mimetypes = Object.values(allowedFileTypes);

  const extName = path.extname(file.originalname).toLowerCase();

  const extname = Filetypes.includes(extName);

  const mimetype = Mimetypes.includes(file.mimetype);

  if (extname && mimetype) {
    return callback(null, true);
  } else {
    callback("Filetype Incorrect, Upload File in allowed File Types  format!");
  }

  // Check ext
  /*const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
    // Check mime
    const mimetype = filetypes.test( file.mimetype );
    if( mimetype && extname ){
     return callback( null, true );
    } else {
     callback( 'Filetype Incorrect ,Upload File in jpeg/jpg/png/gif  format!' );
    }*/
}

function renameOriginalFile(req, file, callback) {
  const filepath = req.body.filepath;

  let newFileName =
    path.basename(file.originalname, path.extname(file.originalname)) +
    "-" +
    Date.now() +
    path.extname(file.originalname);

  let fullPath = filepath + "/" + newFileName;

  callback(null, fullPath);
}

module.exports = fileUpload;
