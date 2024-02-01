import { baseUrl } from "/src/scripts/variables"

async function getFollowers (userName){
    const response = await fetch(`${baseUrl}/${userName}/followers`)
    return await response.json()
    
}

async function getFollowing (userName){
    const response = await fetch(`${baseUrl}/${userName}/following`)
    return await response.json()
}

export { getFollowers, getFollowing }