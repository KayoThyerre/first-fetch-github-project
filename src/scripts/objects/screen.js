

const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto do perfil do usuário">
                <div class="data">
                    <h1>${user.name || 'Não possui nome cadastrado😢'}</h1>
                    <p>${user.bio || 'Não possui bio cadastrada😢'}</p>
                    <div class = "flw">
                        <h2>🐱‍🏍Seguidores ${user.followers}</h2>
                        <h2>🐱‍👤Seguindo ${user.following}</h2>
                    </div>
                </div>
            </div>`;

        let repositoriesItems = '';

        user.repositories.forEach(repo => repositoriesItems += `
        <li>
            <a href="${repo.html_url}" target="_blank">${repo.name}
                <ul>
                    <li class = "repositories-info">🍴 ${repo.forks ?? 'Sem forks'}</li>
                    <li class = "repositories-info">⭐ ${repo.stargazers_count ?? 'Sem estrelas'}</li>
                    <li class = "repositories-info">👀 ${repo.watchers ?? 'Sem observadores'}</li>
                    <li class = "repositories-info">💻 ${repo.language ?? 'Sem linguagem'}</li>
                </ul>
            </a>
        </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItems}</ul>
                </div>`;
        }

        let eventsItens = '';

        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItens += `
                <li>
                    <h3>${event.repo.name}</h3>
                    <p> => ${event.payload.commits[0].message}</p>
                </li>`
            } else {
                eventsItens += `
                <li>
                    <h3>${event.repo.name}</h3>
                    <p> => Criado um ${event.payload.ref_type}</p>
                </li>`
            }
        })
        
        this.userProfile.innerHTML += `
        <div class = "events section">
            <h2>Events</h2>
            <ul>${eventsItens}</ul>
        </div>`
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

};

export { screen };


// async function repositories(){
//     const response = await fetch(`https://api.github.com/users/kayothyerre/repos`)
//     return await response.json()
// }
// console.log(repositories())

// function getUserRepositories(){
//     repositories().then(repositoriesData => {
//         console.log(repositoriesData)
//     })
// }
// getUserRepositories()



// async function getUserEvents(){
//     const response = await fetch(`https://api.github.com/users/kayothyerre/events`)
//     return await response.json()
// }
// console.log(getUserEvents())


/* <div class="event">
                    <h2 class = "data">Eventos</h2>
                    <div class = "event-data">
                        <p>teste</p><p event-description>Teste de evento</p>
                    <div>
                </div> */