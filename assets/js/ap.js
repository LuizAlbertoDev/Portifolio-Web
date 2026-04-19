async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LuizAlbertoDev/NOME-DO-REPO/main/data/profile.json';

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // Exemplo: mostrar nome
        document.getElementById('profileName').innerText = data.name;

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchProfileData();
