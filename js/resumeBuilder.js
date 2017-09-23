/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name="Shehana Alsubaiy";
var role="Web Devloper";
var contacts={
 mobile:"099-555-5555",
 email:"Shehana@example.com",
 github:"Shehanay",
 twitter:"@shehanay",
 location:"Riyadh",
 welcomeMessage:"Hello, This is my resume :)",
 skills:["Programmer","Quick Learner"],
 biopic:"images/fry.jpg"

};

 function displaySkills (a){
 	$("#topContacts").append(HTMLskillsStart);
for (var i = 0; i < a.length; i++)  {
var formattedSkills= HTMLskills.replace("%data%", a[i]);
$("#skills").append(formattedSkills);
                             }
                           }
 
 var work={
 	job:[
 	     {
 	employer:"Shehana", 
 	title:"Teaching", 
 	location:"Riyadh", 
 	dates:"2016", 
 	description:"I teached girls who didn't specialized at universities a simple course of a computer"
         },
         {
    employer:"Shehana",
    title:"Trainer at KKESH Hospital",
    location:"Riyadh", 
 	dates:"2017", 
 	description:"I took my training at KKESH Hospital to help doctors and their assistants through their work"
        
          }
          ]
 	};

 	function displayWork (a){
 	$("#workExperience").append(HTMLworkStart);
for (var i = 0; i < a.length; i++)  {
var formattedEmployer= HTMLworkEmployer.replace("%data%",a[i].employer);
var formattedTitle= HTMLworkTitle.replace("%data%",a[i].title);
var formattedLocation=HTMLworkLocation.replace("%data%",a[i].location);
var formattedDate=HTMLworkDates.replace("%data%",a[i].dates);
var formattedDescription=HTMLworkDescription.replace("%data%",a[i].description);
var formattedWork=formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
 $(".work-entry:last").append(formattedWork);
                             }
                           }

var project={
projects:[
{
	title:"Solving Edge Matching with SAT Solver ",
	dates:"2017",
	description:"This project is my BSc project and it about solving edge matching game with SAT solver ",
	images:"images/EM puzzle unbounded unsined.png"
}
         ]
}

function displayProject (a){
 	$("#projects").append(HTMLprojectStart);
for (var i = 0; i < a.length; i++)  {
var formattedTitle= HTMLprojectTitle.replace("%data%",a[i].title);
var formattedDate=HTMLprojectDates.replace("%data%",a[i].dates);
var formattedDescription=HTMLprojectDescription.replace("%data%",a[i].description);
var formattedImages=HTMLprojectImage.replace("%data%",a[i].images);
var formattedProject= formattedTitle + formattedDate + formattedDescription + formattedImages;
 $(".project-entry:last").append(formattedProject);
                                     }
                          }

var education={
	schools:[
	             {
             name:"Alabna'a Schools",
             location:"Riyadh",
             degree:"high school",
             majors:["secondary school"],
             dates:"2012"      
	             }
	         ],
	 onlineCourses:[
	                  {
	 	     title:"Algorithm Course",
	 	     school:"Coursera",
	 	     dates:"2016",
             url:"https://www.coursera.org"
	                   }    
	               ]    
}
 
function displayEducation (a){
$("#education").append(HTMLschoolStart);

$("#education").append(HTMLonlineClasses);

for (var i = 0; i < a.schools.length; i++)  {
var formattedName=HTMLschoolName.replace("%data%",a.schools[i].name);
var formattedDegree=HTMLschoolDegree.replace("%data%",a.schools[i].degree);
var formattedDate=HTMLschoolDates.replace("%data%",a.schools[i].dates);
var formattedLocation=HTMLschoolLocation.replace("%data%",a.schools[i].location);
var formattedMajor=HTMLschoolMajor.replace("%data%",a.schools[i].majors[i]);                           
var formattedSchool= formattedName + formattedDegree + formattedDate + formattedLocation  + formattedMajor;
$(".education-entry:last ").append(formattedSchool);
                                             }

for (var j = 0; j < a.onlineCourses.length; j++)  {
var formattedTitle=HTMLonlineTitle.replace("%data%",a.onlineCourses[j].title);
var formattedSchool=HTMLonlineSchool.replace("%data%",a.onlineCourses[j].school);
var formattedDates=HTMLonlineDates.replace("%data%",a.onlineCourses[j].dates);
var formattedUrl=HTMLonlineURL.replace("%data%",a.onlineCourses[j].url);                      
var formattedOnlineCourses= formattedTitle + formattedSchool + formattedDates + formattedUrl  ;
$(".education-entry:last ").append(formattedOnlineCourses);
                                             }
 

                               } 
 

 var formattedRole= HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", name );
 $("#header").prepend(formattedName);
 
var formattedMobile= HTMLmobile.replace("%data%", contacts.mobile);
 $("#topContacts").prepend(formattedMobile);
var formattedEmail= HTMLemail.replace("%data%", contacts.email);
 $("#topContacts").append(formattedEmail);
 var formattedGithub= HTMLgithub.replace("%data%", contacts.github);
 $("#topContacts").append(formattedGithub);
 var formattedTwitter= HTMLtwitter.replace("%data%", contacts.twitter);
 $("#topContacts").append(formattedTwitter);
 var formattedLocation= HTMLlocation.replace("%data%", contacts.location);
 $("#topContacts").append(formattedLocation);
 var formattedBiopic= HTMLbioPic.replace("%data%", contacts.biopic);
 $("#topContacts").append(formattedBiopic);
 var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%", contacts.welcomeMessage);
 $("#topContacts").append(formattedWelcomeMessage);
 displaySkills(contacts.skills);
 displayWork (work.job);
 displayProject (project.projects);
displayEducation(education);
var mapString=" https://www.google.com.sa/maps/@26.6726653,42.7608445,4.27z?hl=ar";
var formattedMap=googleMap.replace("%data%", mapString) ;
$("#mapDiv").append(googleMap);

 $("#footerContacts").prepend(formattedMobile);
 $("#footerContacts").append(formattedEmail);
 $("#footerContacts").append(formattedGithub);
 $("#footerContacts").append(formattedTwitter);
 $("#footerContacts").append(formattedLocation);
