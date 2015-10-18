
//create bio JSON
var bio = {
	"name" : "Ali Naqvi",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "aliqasimnaqvi@gmail.com",
		"twitter" : "Ali_Qas",
		"github" : "https://github.com/AliQas",
		"location" : "London, UK"
	},

	"biopic" : "images/biopic.jpg",
	"welcomemsg" : "Welcome to my resume page!",
	"skills" : ["digital marketing", "web development", "business development"]
};

//create work JSON
var work = {
	"jobs": [
	{
		"title": "Business Director",
		"employer": "Neo@Ogilvy",
		"dates": "Jan 2014-Present",
		"location": "London, United Kingdom",
		"description": "Responsible for cross-channel business development on HSBC account. Oversee a team of 2 Account Managers and 4 Account Executives"
	},

	{
		"title": "Senior SEO Account Manager",
		"employer": "STEAK, Ltd",
		"dates": "Jul 2013-Dec 2013",
		"location": "London, United Kingdom",
		"description": "Led a team of 3 Account Executives. Oversaw delivery of SEO services to Allianz Insurance, NetJets Global, ETX Capital and Monster"
	},

	{
		"title": "SEO Account Manager",
		"employer": "STEAK, Ltd",
		"dates": "Mar 2012-Jul 2013",
		"location": "London, United Kingdom",
		"description": "Led a team of 3 Account Executives. Responsible for SEO activity for Allianz Insurance, ETX Capital and NetJets Europe."
	},

	{
		"title": "SEO Account Executive",
		"employer": "STEAK, Ltd",
		"dates": "Jan 2011-Mar 2012",
		"location": "London, United Kingdom",
		"description": "Assisted Account Manager in delivering SEO activity for Dixons, PC World, Allianz Insurance and NetJets accounts."
	}

	]
	
};

//create education JSON
var education = {
	"schools": [
		{
			"name": "Monash University",
			"degree": "Bachelor of Arts in Communication Studies",
			"dates": "2006-2008",
			"location": "Melbourne, Australia",
			"majors": "Media and Communication"
		},
		
		{
			"name": "TMC Academy",
			"degree": "Higher Diploma in Mass Communication",
			"dates": "2004-2005",
			"location": "Singapore",
			"majors": "Communication Studies"

		},

		{
			"name": "Singapore American School",
			"degree": "High School Diploma",
			"dates": "2001-2004",
			"location": "Singapore",
			"majors": "Communication Studies"	

		}

	],

	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "Frontend Web Developer Nanodegree",
		"dates": "2015",
		"url": "https://www.udacity.com"
	},

	{
		"school": "Coursera",
		"title": "Learning How to Learn",
		"dates": "2015",
		"url": "https://www.coursera.com"
	}
	]
	
};

var projects = {
	"projects": [
	{
		"title": "About Me Page",
		"dates": "Sep 2015",
		"description": "Create a simple About Me page using HTML and CSS",
		"images": [
			{
				"url": "https://www.github.com"
			}
		]
	},

	{
		"title": "Portfolio Page",
		"dates": "Sep 2015",
		"description": "Create a responsive Portfolio page using HTML, CSS and Bootstrap.",
		"images": [
			{
				"url": "https://www.github.com"
			}
		]
	}


	]
};

//Append formatted header element to the page

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

//write an if statement to check whether there are any skills in the bio object
//If the if statement evaluates to true, .append() HTMLskillsStart to the div with the id=header
//Then .append() the skills to the element with the id=skills using HTMLskills to format each skill

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		if(skill.length > 0){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		};
	};

};

//Write a for-in loop that iterates over all the jobs in your work object and .append()s a new HTMLworkStart elemnt for each one and...
//formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle...
//and .append()s a concatenation of employer and title each to the element with class work-entry:last 



function displayWork(){
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDescription);
};
};

displayWork();

