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
        let results = [];

        if(searchInput === "beach"){
            results = data.beaches;
        } else if(searchInput === "country"){
            results = data.countries;
        }else if (searchInput === "temple"){
            results = data.temples;
        }

        if(searchInput === 0){
            resultDiv.innerHTML += `<p>No Results found!</p>`
            return;
        }
        results.forEach(result => {
            console.log(result);
            resultDiv.innerHTML += `
                <div class="result_card">
                    <img class="result_img" src="${result.imageUrl}" alt="${result.name}">
                    <div class="result_content">
                        <h3 class="result_name">${result.name}</h3>
                        <p class="result_description">${result.description}</p>
                        <button type="button" class="result_button">Visit</button>
                    </div>
                </div>
            `

        });
        console.log("Results:", results);
        
    })
        .catch(error => {
        console.error("Fetch error:", error);
            });
}
btnSearch.addEventListener('click', searchResult);



