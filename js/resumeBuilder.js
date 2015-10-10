//create formatted versions of all objects

//bio section formatted objects
var formattedName = HTMLheaderName.replace("%data%", "Ali Naqvi");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var formattedContact = HTMLcontactGeneric.replace("%data%", "aliqasimnaqvi@gmail.com").replace("%contact%", "Email:");
var formattedEmail = HTMLemail.replace("%data%", "aliqasimnaqvi@gmail.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "@Ali_Qas");
var formattedGithub = HTMLgithub.replace("%data%", "https://github.com/AliQas");
var formattedLocation = HTMLlocation.replace("%data%", "London, UK");
var formattedBioPic = HTMLbioPic.replace("%data%", "images/biopic.jpg");
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", "Welcome to my resume page!");
var skills = ["digital marketing", " web development", " business development"];
var formattedSkills = HTMLskills.replace("%data%", skills);

//work section formatted objects
var formattedCurrentEmployer = HTMLworkEmployer.replace("%data%", "Neo@Ogilvy");
var formattedCurrentWorkTitle = HTMLworkTitle.replace("%data%", "Business Director");



//create bio object
var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"email" : formattedEmail,
		"twitter" : formattedTwitter,
		"github" : formattedGithub,
		"location" : formattedLocation
	},

	"biopic" : formattedBioPic,
	"welcomemsg" : formattedWelcomeMsg,
	"skills" : formattedSkills
};

//create work object
var work = {
	"currentjob" : formattedCurrentWorkTitle,
	"employer" : formattedCurrentEmployer,
	"yearsworked" : 2,
	"workcity" : "London, UK"
}

//header section
$("#header").prepend(HTMLskillsStart);
$("#header").prepend(bio.skills);
$("#header").prepend(bio.welcomemsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bio.biopic);


//top contacts section
$("#topContacts").append(bio.contacts.email);
$("#topContacts").append(bio.contacts.twitter);
$("#topContacts").append(bio.contacts.github);
$("#topContacts").append(bio.contacts.location);


//work experience section
$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").append(work.currentjob);
$("#workExperience").append(work.employer);



//projects section
$("#projects").prepend(HTMLprojectStart);

//education section
$("#education").prepend(HTMLschoolStart);







