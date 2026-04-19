function updateProfileInfo(profileData) {

    document.getElementById('profile.name').innerText =
        profileData.name;

    document.getElementById('profile.job').innerText =
        profileData.job;

    document.getElementById('profile.location').innerText =
        profileData.location;

    document.getElementById('profile.phone').innerText =
        profileData.phone;

    document.getElementById('profile.email').innerText =
        profileData.email;

    document.getElementById('profile.photo').src =
        profileData.photo;

}

(async () => {

    const profileData = await fetchProfileData();

    updateProfileInfo(profileData);

})();