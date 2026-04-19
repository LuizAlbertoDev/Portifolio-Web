async function fetchProfileData() {

    const url =
    'https://raw.githubusercontent.com/LuizAlbertoDev/Portifolio-Web/main/data/profile.json';

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erro ao carregar JSON');
        }

        return await response.json();

    } catch (error) {

        console.error('Erro ao buscar dados:', error);

    }

}