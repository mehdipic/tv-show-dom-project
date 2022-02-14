const form = document.querySelector('#searchForm')
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    console.log(searchTerm);
    const reserch = {params : {q : searchTerm}}
    const resp = await axios.get('https://api.tvmaze.com/search/shows' , reserch);
    // const resp = await axios.get(
    //     `https://api.tvmaze.com/search/shows?q=${searchTerm}`
        // );
    console.log(resp)
    makeImages(resp.data);
    form.elements.query.value = "";
});

const makeImages = (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}