//Job Title	Date of application	Source Of Application	Name	Email ID	Phone Number	
//Current Location	Preferred Locations	Total Experience	Curr. Company name	Curr. Company Designation	
//Functional Area	Role	Industry	Key Skills	Annual Salary	Notice Period	
//Resume Headline	Summary	Under Graduation degree	UG Specialization	UG University/institute Name	
//UG Graduation year	Post graduation degree	PG specialization	PG university/institute name	
//PG graduation year	Doctorate degree	Doctorate specialization	Doctorate university/institute name	
//Doctorate graduation year	Gender	Marital Status	Home Town/City	Pin Code	Work permit for USA	Current Location	
//Date of Birth	Permanent Address	Last Workflow activity	Last Workflow activity by	Time of Last Workflow activity Update	
//Latest Pipeline Stage	Pipeline Status Updated By	Time when Stage updated	Latest Star Rating	Download	Downloaded By
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");
require("dotenv").config();

const studentSchema = new mongoose.Schema(
    {
      JobTitle: { type: String, required: true, maxlength: 50},
      DateofApplication : { type: Number, required: true},
      SourceofApplication : { type: String, required: true},
      Name: { type: String, default: "user" },
      EmailID : {type: String, required: true},
      PhoneNumber : {type: Number , required : true},
      CurrentLocation : {type: String, required : true},
      PreferredLocation : {type : String, required : true},
      TotalExperience : {type : Number, required : true},
      CurrCompanyName : {type : String, required : true },
      CurrCompanyDesignation : {type : String, required : true},
      FunctionalArea : {type: String,required : true},
      Role : {type: String,required : true},
      Industry : {type : String,required: true},
      KeySkills : {type : String,required: true},
      AnnualSalary : {type : String,required:true},
      NoticePeriod : {type:String,required:true},
      ResumeHeadline : {type:String,required:true},
      Summary : {type:String,required:true},
      UnderGraduationDegree : {type:String,required:true},
      UGSpecialization : {type:String,required:true},
      UGUniversity : {type:String,required:true},
      UGGraduationYear : {type:String,required:true},
      PostGraduationDegree : {type:String,required:true},
      PGSpecialization : {type:String,required:true},
      PGUniversity : {type:String,required:true},
      PGGraduationYear : {type:String,required:true},
      DoctorateDegree : {type:String,required:true},
      DoctorateSpecialization : {type:String,required:true},
      DoctorateUniversity : {type:String,required:true},
      Gender : {type:String,required:true},
      MaritalStatus : {type:String,required:true},
      Home : {type:String,required:true},
      Town : {type:String,required:true},
      PinCode : {type:Number,required:true},
      DateOfBirth : {type:Number,required:true},
      PermanentAddress : {type:String,required:true},
      LastWorkflowActivity : {type:String,required:true},
      LastWorkflowActivityBy : {type:String,required:true},
      TimeOfLastWorkflowActivityUpdate :  {type:String,required:true},
      LatestPipelineStage :  {type:String,required:true},
      PipelineStatusUpdatedBy :  {type:String,required:true},
      TimeWhenStageUpdated : {type:String,required:true},
      LatestStarRating : {type:String,required:true},
      Download : {type:String,required:true},
      DownloadedBy : {type:String,required:true},
      TimeOfDownload : {type:String,required:true},
      Viewed : {type:Number,required:true},
      ViewedBy : {type:String,required:true},
      TimeOfView : {type:String,required:true},
      Emailed : {type:String,required:true},
      EmailedBy : {type:String,required:true},
      TimeOfEmail : {type:Number,required:true},
      CallingStatus : {type:String,required:true},
      CallingStatusUpdatedBy : {type:String,required:true},
      TimeOfCallingActivityUpdate : {type:String,required:true},
    },
    { timestamps: true }
  );

const Student = mongoose.model("User", studentSchema);

module.exports = { Student };