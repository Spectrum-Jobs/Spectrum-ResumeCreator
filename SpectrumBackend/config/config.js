const prodconfig = {
  AWS_ACCESS_KEY : 'AKIA3DRI6MIIGESQN4G3',
  AWS_SECRET_ACCESS_KEY : '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',
  Bucket : 'quloibucket',
  Acl: "public-read",
  ChunkSize: 100 * 1024 * 1024,
};

const betaconfig = {
  AWS_ACCESS_KEY : 'AKIA3DRI6MIIGESQN4G3',
  AWS_SECRET_ACCESS_KEY : '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',
  Bucket : 'quloibucket',
  Acl: "public-read",
  ChunkSize: 100 * 1024 * 1024,
};

const devconfig = {
  AWS_ACCESS_KEY : 'AKIA3DRI6MIIGESQN4G3',
  AWS_SECRET_ACCESS_KEY : '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',
  Bucket : 'quloibucket',
  Acl: "public-read",
  ChunkSize: 100 * 1024 * 1024,
};

const prodmongoconfig = {
  mongoURI:
  "mongodb+srv://myuser:myuser123@cluster0.lknlc.mongodb.net/spectrum?retryWrites=true&w=majority",
};

const betamongoconfig = {
  mongoURI:
    "mongodb+srv://myuser:myuser123@cluster0.lknlc.mongodb.net/spectrum?retryWrites=true&w=majority",
};

const devmongoconfig = {
  mongoURI:
    "mongodb+srv://myuser:myuser123@cluster0.lknlc.mongodb.net/spectrum?retryWrites=true&w=majority",
};


let config = {};
let mongo_config = {};

if (process.env.NODE_ENV === "production") {
  mongo_config = prodmongoconfig;
  config = prodconfig;
} else if (process.env.NODE_ENV === "beta") {
  mongo_config = betamongoconfig;
  config = betaconfig;
} else {
  config = devconfig;
  mongo_config = devmongoconfig;
}


PORT = process.env.PORT;
NODE_ENV = process.env.NODE_ENV;
JWT_SECRET = process.env.JWT_SECRET;
ORIGIN = process.env.ORIGIN;
FAST2SMS = process.env.FAST2SMS


module.exports = { config, mongo_config, FAST2SMS ,PORT};
