let logo = document.getElementById('logo-full');
let about = document.getElementById('about');
let skills = document.querySelector('skills');
let contact = document.querySelector('contact');

let toBanner = document.getElementsByClassName('banner');
let toAbout = document.getElementsByClassName('about-me');
let toSkills = document.getElementsByClassName('skills');
let toContact = document.getElementsByClassName('contact');


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
