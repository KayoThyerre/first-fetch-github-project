async function user () {
    const response = await fetch('https://api.github.com/users')
    return await response.json()
}

console.log(user())