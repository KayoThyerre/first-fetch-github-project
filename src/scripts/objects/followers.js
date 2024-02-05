import { baseUrl } from "/src/scripts/variables"


async function getFollowers (userName){
    const response = await fetch(`${baseUrl}/${userName}/followers`);
    const followersContent = await response.json();
    console.log(followersContent);
    return followersContent;
}


export { getFollowers, getFollowing }