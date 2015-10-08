
var formattedName = HTMLheaderName.replace("%data%", "Ali Naqvi");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var formattedEmail = HTMLemail.replace("%data%", "aliqasimnaqvi@gmail.com");
var formattedPicture = HTMLbioPic.replace("%data%", "https://media.licdn.com/media/p/2/005/073/013/0bc428b.jpg");
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", "Welcome to my resume page!");
var skills = ["awesomeness ", "programming ", "digital marketing "];
var formattedSkills = HTMLskills.replace("%data%", skills); 
var formattedWorkTitle = HTMLworkTitle.replace("%data%", "Business Director");
var formattedYearsWorked = HTMLworkDates.replace("%data%", "2 years");
var formattedWorkCity = HTMLworkLocation.replace("%data%", "London");

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"email" : formattedEmail,
	"biopic" : formattedPicture,
	"welcomemsg" : formattedWelcomeMsg,
	"skills" : formattedSkills,
};


$("#header").prepend(bio.biopic);
$("#header").append(bio.name);
$("#header").append(bio.role);
$("#letsConnect").append(bio.email);
$("#header").append(bio.welcomemsg);
$("#main").append(bio.skills);

bio.work = {
	"position" : formattedWorkTitle,
	"yearsworked": formattedYearsWorked,
	"workcity": formattedWorkCity
}


$("#main").append(bio.work);
