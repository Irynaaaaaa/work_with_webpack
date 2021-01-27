
async function getPlanet(page)
    {
        const res = await axios.get( BASE + `planets/`, {params :{
            'page' : page
        }})
        return res.data.results;
    }

    export default getPlanet;