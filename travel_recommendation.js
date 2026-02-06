const btnSearch = document.querySelector(".search-btn");
const clearSearch = document.querySelector(".clear-btn");

function searchResult(){
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML += '';
    
    fetch('trevel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const country = data.countries.find(item => item.name.toLowerCase() === input);

        if(country){
        
        }
        
    })
}



