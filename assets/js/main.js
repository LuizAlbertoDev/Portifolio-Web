function updateProfileInfo(profileData) { 

    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    const phoneLink = document.getElementById('profile.phone.link');

    phone.innerText = profileData.phone;
    phoneLink.href = `tel:${profileData.phone.replace(/\D/g, '')}`;

    const email = document.getElementById('profile.email');
    const emailLink = document.getElementById('profile.email.link');

    email.innerText = profileData.email;
    emailLink.href = `mailto:${profileData.email}`;

}

(async () => {

    const profileData = await fetchProfileData();
    console.log(profileData);

    updateProfileInfo(profileData);

})();