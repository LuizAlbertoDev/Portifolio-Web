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

function updateSkills(profileData) {

    const skillsList =
        document.getElementById('profile.skills.softskills');

    skillsList.innerHTML =
        profileData.skills.softSkills
            .map(skill => `<li>${skill}</li>`)
            .join('');

}

function updateHardSkills(profileData) {

    const hardSkillsList =
        document.getElementById('profile.skills.hardskills');

    hardSkillsList.innerHTML =
        profileData.skills.hardSkills
            .map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)
            .join('');

}

function updateLanguages(profileData) {

    const languagesList =
        document.getElementById('languages');

    languagesList.innerHTML =
        profileData.languages
            .map(language => `<li>${language}</li>`)
            .join('');

}

function updatePortfolio(profileData) {

    const portfolioList =
        document.getElementById('profile.portfolio');
    portfolioList.innerHTML =
        profileData.portfolio
            .map(project => 
            `<li>

                <h3 ${project.github ? 'class="github"' : ''} >
                    ${project.name}
                </h3>

                <a href="${project.url}" target="_blank">
                    Ver projeto
                </a>

            </li>`)
            .join('');
}

function updateExperience(profileData) {

    const experienceList =
        document.getElementById('profile.professionalExperience');

    experienceList.innerHTML =
        profileData.professionalExperience
            .map(exp => 
            `<li>
                <h3 class="title ${exp.github ? 'github' : ''}">
                    ${exp.name}
                </h3>
                <span class="period">
                    ${exp.period}
                </span>
                <p>
                    ${exp.description}
                </p>
            </li>`)
            .join('');
}


(async () => {

    const profileData = await fetchProfileData();

    updateProfileInfo(profileData);
    updateSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);

})();