const btnSearch = document.querySelector(".search-btn");
const clearSearch = document.querySelector(".clear-btn");

function searchResult(event) {
    event.preventDefault();

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");


    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            let results = [];

            if (["beach", "beaches"].includes(searchInput)) {
                results = data.beaches;
            } else if (["country", "countries"].includes(searchInput)) {
                results = data.countries;
            } else if (["temple", "temples"].includes(searchInput)) {
                results = data.temples;
            }

            resultDiv.innerHTML = '';

            if (!searchInput) {
                resultDiv.innerHTML = `<p>No Results found!</p>`;
                return;
            }


            results.forEach(result => {
                if (result.cities) {
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDiv");
                    countryDiv.innerHTML = `<h2>${result.name}</h2>`;

                    result.cities.forEach(city => {
                        const cityDiv = document.createElement("div");
                        cityDiv.classList.add("cityDiv");
                        cityDiv.innerHTML = `
                            <div class="result_card">
                                <img class="result_img" src="${city.imageUrl}" alt="${city.name}">
                                <div class="result_content">
                                    <h3 class="result_name">${city.name}</h3>
                                    <p class="result_description">${city.description}</p>
                                    <button type="button" class="result_button">Visit</button>
                                </div>
                            </div>
                        `;
                        countryDiv.appendChild(cityDiv);
                    });

                    resultDiv.appendChild(countryDiv);
                    displayCountryTime();


                } else {
                    resultDiv.innerHTML += `
                        <div class="result_card">
                            <img class="result_img" src="${result.imageUrl}" alt="${result.name}">
                            <div class="result_content">
                                <h3 class="result_name">${result.name}</h3>
                                <p class="result_description">${result.description}</p>
                                <button type="button" class="result_button">Visit</button>
                            </div>
                        </div>
                    `;
                        
                }
            });

        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
}

btnSearch.addEventListener('click', searchResult);

function clearbtn(event){
    event.preventDefault();
    document.getElementById("searchInput").value = "";
    document.getElementById("result").innerHTML = "";
}

clearSearch.addEventListener('click', clearbtn);

function displayCountryTime() {
    const options = {
        timeZone: 'America/New_York',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    

    const newYorkTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in New York:", newYorkTime);
}

