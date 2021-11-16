//Recoger el valor de mi input cuando le doy al botón enviar

let btnSearch = document.getElementById('btnSearch');
let filmSearch = "";

btnSearch.addEventListener('click',(e)=>{

    e.preventDefault;

    let valueSearch = document.getElementById('inputForm').value;

    filmSearch = valueSearch;
    
})

module.exports = filmSearch;



