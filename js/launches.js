const launchesContainer = document.querySelector(".launches");

const url = "https://api.spacexdata.com/v3/launches";

async function fetchLaunches() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const launches = json;

        const launchesReversed = launches.reverse();

        launchesContainer.innerHTML = ""

        launches.forEach(function (launches) {
            launchesContainer.innerHTML += `<div class="divContainer">
                                            <h2>Flight number: ${launches.flight_number}</h2>
                                            <p>Mission name: ${launches.mission_name}</p>
                                            <p>Launch year: ${launches.launch_year}</p>
                                            <p>Rocket name: ${launches.rocket.rocket_name}</p>
                                            </div>`;
        });
    }
    catch(error) {
        launchesContainer.innerHTML = "An error has occurred!"
    }
}

fetchLaunches();