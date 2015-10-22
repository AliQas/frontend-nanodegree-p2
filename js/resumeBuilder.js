// bio JSON
var bio = {
	'name' : 'Ali Naqvi',
	'role' : 'Web Developer',
	'contacts' : {
		'email' : 'aliqasimnaqvi@gmail.com',
		'twitter' : 'Ali_Qas',
		'github' : 'https://github.com/AliQas',
		'location' : 'London, UK'
	},

	'biopic' : 'images/biopic.jpg',
	'welcomemsg' : 'Welcome to my resume page!',
	'skills' : ['digital marketing', 'web development', 'business development']
};

//work JSON
var work = {
	'jobs': [
	{
		'title': 'Business Director',
		'employer': 'Neo@Ogilvy',
		'dates': 'Jan 2014-Present',
		'location': 'London, United Kingdom',
		'description': 'Responsible for cross-channel business development on HSBC account. Oversee a team of 2 Account Managers and 4 Account Executives'
	},

	{
		'title': 'Senior SEO Account Manager',
		'employer': 'STEAK, Ltd',
		'dates': 'Jul 2013-Dec 2013',
		'location': 'London, United Kingdom',
		'description': 'Led a team of 3 Account Executives. Oversaw delivery of SEO services to Allianz Insurance, NetJets Global, ETX Capital and Monster'
	},

	{
		'title': 'SEO Account Manager',
		'employer': 'STEAK, Ltd',
		'dates': 'Mar 2012-Jul 2013',
		'location': 'London, United Kingdom',
		'description': 'Led a team of 3 Account Executives. Responsible for SEO activity for Allianz Insurance, ETX Capital and NetJets Europe.'
	},

	{
		'title': 'SEO Account Executive',
		'employer': 'STEAK, Ltd',
		'dates': 'Jan 2011-Mar 2012',
		'location': 'London, United Kingdom',
		'description': 'Assisted Account Manager in delivering SEO activity for Dixons, PC World, Allianz Insurance and NetJets accounts.'
	}

	]

};

//education JSON
var education = {
	'schools': [
		{
			'name': 'Monash University',
			'degree': 'Bachelor of Arts in Communication Studies',
			'dates': '2006-2008',
			'location': 'Melbourne, Australia',
			'majors': 'Media and Communication'
		},

		{
			'name': 'TMC Academy',
			'degree': 'Higher Diploma in Mass Communication',
			'dates': '2004-2005',
			'location': 'Singapore',
			'majors': 'Communication Studies'

		},

		{
			'name': 'Singapore American School',
			'degree': 'High School Diploma',
			'dates': '2001-2004',
			'location': 'Singapore',
			'majors': 'N/A'	

		}

	],

	'onlineCourses': [
	{
		'school': 'Udacity',
		'title': 'Frontend Web Developer Nanodegree',
		'dates': '2015',
		'url': 'https://www.udacity.com'
	},

	{
		'school': 'Coursera',
		'title': 'Learning How to Learn',
		'dates': '2015',
		'url': 'https://www.coursera.com'
	}
	]

};

//projects JSON

var projects = {
	'projects': [
	{
		'title': 'About Me Page',
		'dates': 'Sep 2015',
		'description': 'Create a simple About Me page using HTML and CSS',
		'images': [
		{
			'url': 'http://wisemansay.co.uk/wp-content/uploads/2010/12/1249995657_27631-400x200.jpg'
		}
		]

	},

	{
		'title': 'Portfolio Page',
		'dates': 'Sep 2015',
		'description': 'Create a responsive Portfolio page using HTML, CSS and Bootstrap.',
		'images': [
		{
			'url': 'http://wisemansay.co.uk/wp-content/uploads/2010/12/1249995657_27631-400x200.jpg'
		}
		]


	}


	]
};

//Create Global Variables for reusable objects

//JQuery selectors for main divs

var $header = $('#header');
var $topContacts = $('#topContacts');
var $workExperience = $('#workExperience');
var $projects = $('#projects');
var $education = $('#education');
var $mapDiv = $('#mapDiv');
var $footerContacts = $('#footerContacts');



var data = '%data%';





//bio display function

bio.display = function(){
	'use strict';

	if(bio.role.length){
		var formattedHeaderRole = HTMLheaderRole.replace(data, bio.role);
		$header.prepend(formattedHeaderRole);
	}

	if(bio.name.length){
		var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
		$header.prepend(formattedHeaderName);
	}

	if(bio.biopic.length){
		var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
		$header.append(formattedBioPic);
	}

	if(bio.welcomemsg.length){
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomemsg);
		$header.append(formattedWelcomeMsg);
	}


	if(bio.skills.length){
		$header.append(HTMLskillsStart);
		for(var skill in bio.skills){
			if(skill.length){
				$('#skills:last').append(HTMLskills.replace(data, bio.skills[skill]));
			}
		}

	}


	if(bio.contacts.email.length){
		var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
		$topContacts.append(formattedEmail);
		$footerContacts.append(formattedEmail);
	}

	if(bio.contacts.twitter.length){
		var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
		$topContacts.append(formattedTwitter);
		$footerContacts.append(formattedTwitter);
	}

	if(bio.contacts.github.length){
		var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
		$topContacts.append(formattedGithub);
		$footerContacts.append(formattedGithub);
	}

	if(bio.contacts.location.length){
		var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
		$topContacts.append(formattedLocation);
		$footerContacts.append(formattedLocation);
	}

};



bio.display();








//Write a for-in loop that iterates over all the jobs in your work object and .append()s a new HTMLworkStart elemnt for each one and...
//formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle...
//and .append()s a concatenation of employer and title each to the element with class work-entry:last



work.display = function(){
	
	'use strict';

	
	work.jobs.forEach(function(job){
		
		var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
		var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
		var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
		var allJobInfo = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

		$workExperience.append(HTMLworkStart);
		$('.work-entry:last').append(allJobInfo);

	});

};

work.display();


projects.display = function(){
	
	'use strict';

	projects.projects.forEach(function(project){

		var formattedTitle = HTMLprojectTitle.replace(data, project.title);
		var formattedDates = HTMLprojectDates.replace(data, project.dates);
		var formattedDescription = HTMLprojectDescription.replace(data, project.description);
		
		var allProjectInfo = formattedTitle + formattedDates + formattedDescription;

		$projects.append(HTMLprojectStart);
		$('.project-entry:last').append(allProjectInfo);		

	});

};

projects.display();

//Create a function that displays all education (schools + details) in correct format

education.display = function(){
	'use strict';
	for(var school in education.schools){
		$education.append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
		$('.education-entry:last').append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
		$('.education-entry:last').append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace(data, education.schools[school].majors);
		$('.education-entry:last').append(formattedMajors);

		}

	if(education.onlineCourses.length) {
		$education.append(HTMLonlineClasses);
		$education.append(HTMLschoolStart);
		for(var course in education.onlineCourses){



			var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
			$('.education-entry:last').append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
			$('.education-entry:last').append(formattedSchool);

			var formattedOnlineSchoolDates = HTMLonlineDates.replace(data, education.onlineCourses[course].dates);
			$('.education-entry:last').append(formattedOnlineSchoolDates);

			var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
			$('.education-entry:last').append(formattedURL);


		}


	}



};

education.display();

//Google Map
$mapDiv.append(googleMap);
