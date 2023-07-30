let logo = document.getElementsByClassName('logo')[0];
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');

let toBanner = document.getElementsByClassName('banner')[0];
let toAbout = document.getElementsByClassName('about-me')[0];
let toSkills = document.getElementsByClassName('skills')[0];
let toContact = document.getElementsByClassName('contact-content')[0];


let showBanner = function() {
    toBanner.style.display = 'flex';
    toAbout.style.display = 'none';
    toSkills.style.display = 'none';
    toContact.style.display = 'none';
}
let showAboutMe = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'flex';
    toSkills.style.display = 'none';
    toContact.style.display = 'none';
}
let showSkills = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'none';
    toSkills.style.display = 'flex';
    toContact.style.display = 'none';
}
let showContact = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'none';
    toSkills.style.display = 'none';
    toContact.style.display = 'flex';
}

logo.addEventListener('click', showBanner);
about.addEventListener('click', showAboutMe);
skills.addEventListener('click', showSkills);
contact.addEventListener('click', showContact);


let eng = document.getElementById('eng-flag');
let fin = document.getElementById('fin-flag');

let engText = document.getElementsByClassName('eng')[0];
let finText = document.getElementsByClassName('fin')[0];

let showEng = function() {
    engText.style.display = 'flex';
    finText.style.display = 'none';
}
let showFin = function() {
    engText.style.display = 'none';
    finText.style.display = 'flex';
}

eng.addEventListener('click', showEng);
fin.addEventListener('click', showFin);
