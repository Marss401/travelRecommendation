const btnSearch = document.querySelector(".search-btn");
const clearSearch = document.querySelector(".clear-btn");

function searchResult(event){
    console.log("function fired");
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';
    
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
         console.log("FULL DATA:", data);
         console.log("COUNTRIES:", data.countries);
         console.log("FIRST COUNTRY:", data.countries[0]);
        const country = data.countries.find(item => item.name.toLowerCase() === searchInput);

      if (country) {
        console.log("MATCH FOUND:", country);
      } else {
        console.log("NO MATCH");
      }
        
    })
        .catch(error => {
        console.error("Fetch error:", error);
            });
}
btnSearch.addEventListener('click', searchResult);



