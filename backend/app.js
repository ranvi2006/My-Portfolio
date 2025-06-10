const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectdb = require("./db/db");
const cosr = require("cors");
const { Profiles,Certificates,Projects,Educations } = require("./models/Profile");

app.use(cosr());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function wrapAsync(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            next(err);
        });
    }
}
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "I am Raju Kumar Mandal,Project is Going on"
    });
});

app.get("/getProfile", wrapAsync(async (req, res, next) => {
    const profile = await Profiles.find({});
    
    if (!profile) {
        res.json({
            success: false
            ,message:"Data not found"
        });
    }
    res.json({
        success: true
        , data: profile[0]
    });
}));
app.get("/getCertificates", wrapAsync(async (req, res, next) => {
    const certificates = await Certificates.find({});
    
    if (!certificates) {
        res.json({
            success: false
            ,message:"Data not found"
        });
    }
    res.json({
        success: true
        , data: certificates
    });
}));
app.get("/getProjects", wrapAsync(async (req, res, next) => {
    const projects = await Projects.find({});
    
    if (!projects) {
        res.json({
            success: false
            ,message:"Data not found"
        });
    }
    res.json({
        success: true
        , data: projects
    });
}));
app.get("/getEducations", wrapAsync(async (req, res, next) => {
    const eductions = await Educations.find({});
    
    if (!eductions) {
        res.json({
            success: false
            ,message:"Data not found"
        });
    }
    res.json({
        success: true
        , data: eductions
    });
}));

app.use((err, req, res, next) => {
    res.json({
        success: false,
        error: err || "Some erroe occur"
    });
})
module.exports = app;