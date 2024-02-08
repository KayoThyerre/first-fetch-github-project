const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto do perfil do usuário">
                <div class="data">
                    <h1>${user.name || 'Não possui nome cadastrado😢'}</h1>
                    <p>${user.bio || 'Não possui bio cadastrada😢'}</p>
                    <div>
                        <p>Seguidores ${user.followers}</p>
                        <p>Seguindo ${user.following}</p>
                    </div>
                </div>
                <div class="event">
                    <h2 class = "data">Eventos</h2>
                    <div class = "event-data">
                        <p>Teste de repositório </p><p event-description>Teste de evento</p>
                    <div>
                </div>
            </div>`;

        let repositoriesItems = ''; // Inicializando como uma string vazia

        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItems}</ul>
                </div>`;
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

};

export { screen };


async function getUserRepositories(){
    const response = await fetch(`https://api.github.com/users/kayothyerre/repos`)
    return await response.json()
}
console.log(getUserRepositories())


async function getUserEvents(){
    const response = await fetch(`https://api.github.com/users/kayothyerre/events`)
    return await response.json()
}
console.log(getUserEvents())
