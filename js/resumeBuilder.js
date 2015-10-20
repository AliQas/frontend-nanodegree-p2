
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
			"url": "http://wisemansay.co.uk/wp-content/uploads/2010/12/1249995657_27631-400x200.jpg"
		}
		]
		
	},

	{
		"title": "Portfolio Page",
		"dates": "Sep 2015",
		"description": "Create a responsive Portfolio page using HTML, CSS and Bootstrap.",
		"images": [
		{
			"url": "http://wisemansay.co.uk/wp-content/uploads/2010/12/1249995657_27631-400x200.jpg"
		}
		]
		
		
	}


	]
};

//Append formatted header element to the page

//$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


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



work.display = function(){
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

work.display();

// .append() the internationalize button to the main div
$("#main").append(internationalizeButton);

//Create a function called inName() that takes in a string of two names and returns an internationalized 
//string that looks like so: Ali NAQVI
function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates );
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image].url);
				$(".project-entry:last").append(formattedImage);
			}
			
		}


	}
};

projects.display();

//Create a funciton that displays all education (schools + details) in correct format

education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
		
		}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		for(course in education.onlineCourses){

			

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);


		}
	

	}

		
	
}

education.display();

//Google Map
$("#mapDiv").append(googleMap);

