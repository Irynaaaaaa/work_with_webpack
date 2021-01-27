
async function getCharacter(url){
    return await axios.get(url);
}

export default getCharacter;