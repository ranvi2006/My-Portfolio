const mongoose=require("mongoose");

const Profiles=mongoose.model("profiles",{},"profiles");
const Projects=mongoose.model("projects",{},"projects");
const Certificates=mongoose.model("certificates",{},"certificates");
const Educations=mongoose.model("educations",{},"educations");

async function printData() {
    
    // const profile=await Educations.find();
    // console.log(profile);
    
    
}
printData();

module.exports={
    Profiles,
    Certificates,
    Projects,
    Educations

};