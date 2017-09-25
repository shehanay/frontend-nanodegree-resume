var data = '%data%';

//bio class displays my ID and contacts 
var bio = {
    name: "Shehana Alsubaiy",
    role: "Web Devloper",
    contacts: {
        mobile: "099-555-5555",
        email: "Shehana@example.com",
        github: "Shehanay",
        twitter: "@shehanay",
        location: "Riyadh",
    },
    welcomeMessage: "Hello, This is my resume :)",
    skills: ["Programmer", "Quick Learner"],
    biopic: "images/fry.jpg",
    display: function() {
// display all of bio data member 
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        $("#topContacts, #footerContacts").prepend(formattedMobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);
        var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
        $("#topContacts").append(formattedBiopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#topContacts").append(formattedWelcomeMessage);
        $("#topContacts").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkills);
        }

    }

};


// work class displays all of my jobs
var work = {
    jobs: [{
            employer: "Shehana",
            title: "Teaching",
            location: "Riyadh",
            dates: "03-Augest-2016",
            description: "I teached girls who didn't specialized at universities a simple course of a computer"
        },
        {
            employer: "Shehana",
            title: "Trainer at KKESH Hospital",
            location: "Riyadh",
            dates: "20-July-2017",
            description: "I took my training at KKESH Hospital to help doctors and their assistants through their work"

        }
    ],
    display: function() {
// this function display all the values assigned to work class     	
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
            var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
            var formattedDate = HTMLworkDates.replace(data, work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
            var formattedWork = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
            $(".work-entry:last").append(formattedWork);
        }
    }
};


// projects class displays all of my projects that  I have done it.
var projects = {
    projects: [{
        title: "Solving Edge Matching with SAT Solver ",
        dates: "2017",
        description: "This project is my BSc project and it about solving edge matching game with SAT solver ",
        images: ["images/EM puzzle unbounded unsined.png","images/EM puzzle bounded unsined.png"]
    }],
    display: function() {
// this function display all the values assigned to projects class  
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedDate = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            var formattedImages=undefined;
               for(var j=0; j<projects.projects[i].images.length; j++){
        	  formattedImages = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
        	$(".project-entry:last").append(formattedImages); 
        }
          var formattedProject = formattedTitle + formattedDate + formattedDescription ;
            $(".project-entry:last").prepend(formattedProject); 
        }

    }
};


//education class displays all of my schools and online courses that I have took
var education = {
    schools: [{
        name: "Alabna'a Schools",
        location: "Riyadh",
        degree: "high school",
        majors: ["secondary school"],
        dates: "2012"
    }],
    onlineCourses: [{
        title: "Algorithm Course",
        school: "Coursera",
        dates: "2016",
        url: "https://www.coursera.org"
    }],
    display: function() {
// this function display all the values assigned to education class  
        $("#education").append(HTMLschoolStart);

        $("#education").append(HTMLonlineClasses);

        for (var i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
            var formattedDate = HTMLschoolDates.replace(data, education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[i]);
            var formattedSchools = formattedName + formattedDegree + formattedDate + formattedLocation + formattedMajor;
            $(".education-entry:last ").append(formattedSchools);
        }

        for (var j = 0; j < education.onlineCourses.length; j++) {
            var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
            var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
            var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
            var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[j].url);
            var formattedOnlineCourses = formattedTitle + formattedSchool + formattedDates + formattedUrl;
            $(".education-entry:last ").append(formattedOnlineCourses);
        }

    }
};


// display all of classes 
bio.display();
work.display();
projects.display();
education.display();
// append my location
$("#mapDiv").append(googleMap);