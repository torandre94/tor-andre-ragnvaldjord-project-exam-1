const historyContainer = document.querySelector(".history");

const url = "https://api.spacexdata.com/v3/history";

async function fetchHistory() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const history = json;

        historyContainer.innerHTML = ""

        history.forEach(function (history) {
            historyContainer.innerHTML +=  `<div class="divContainer">
                                            <h2>${history.title}</h2>
                                            <p>${history.event_date_utc}</p>
                                            <p>${history.details}</p>
                                            <a href="${history.links.article}" target="_blank">Read more here!</<a>
                                            </div>`;
        });
    }
    catch(error) {
        historyContainer.innerHTML = "An error has occurred!"
    }
}

fetchHistory();