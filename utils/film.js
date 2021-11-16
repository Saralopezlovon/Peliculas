const film = {
    
    // getSearch: async ()=>{
    //     const data = await fetch('https://fakestoreapi.com/products',{
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(product)
    //     })
    //     const res = await data.json()
    //     return res       

    // },

    getFilm: async ()=>{
        const data = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e8f1e353');
        const film = await data.json();
        console.log(film)
        //   return film
    }
}

module.exports = film;