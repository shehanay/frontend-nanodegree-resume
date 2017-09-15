/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name="Shehana Alsubaiy";
var role="Web Devloper";
var mobile="099-555-5555";
var email="Shehana@example.com";
var github="Shehanay";
var twitter="@shehanay";
var location="Riyadh";

 var formattedName = HTMLheaderName.replace("%data%", name );
 $("#header").append(formattedName);
 var formattedRole= HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedRole);

 var work={
 	job:[{employer:"Shehana", title:"Teaching"},{employer:"Shehana",title:"Trainer at KKESH Hospital"}]
 	};
 for(jobs in work.job){
 	$("#workExperience").append(HTMLworkStart);
var formattedEmployer= HTMLworkEmployer.replace("%data%",work.job[jobs].employer);
var formattedTitle= HTMLworkTitle.replace("%data%",work.job[jobs].title);
var formattedEmployerTitle=formattedEmployer + formattedTitle;

 $(".work-entry:last").append(formattedEmployerTitle);
 }
