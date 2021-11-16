const film = {
    
    getSearch: (req,res)=>{
        console.log("*****ESTA ES LA HOME**************");
        res.render('home', {search:"películas"})       

    },

    getFilm: (req,res)=>{
        console.log("******ESTA ES LA PÁGINA DE PELICULA BUSCADA*********");
        res.render('film', {name:"El diario de Noa"}) 
        
    }
}

module.exports = film;