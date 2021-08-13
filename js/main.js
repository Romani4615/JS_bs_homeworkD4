// cons getData = async => {
//     search
// }
const getData = async (season, round) => {
    searchUrl = `https://ergast.com/api/f1/${season}/1/driverStandings.json`;
    let response = await fetch(searchUrl);
    return response.json(); // return promise
}
const loadData = async (e) => {
    e.preventDefault();
    console.log(e);

    const f1Search = e.target
    console.log(f1Search);

    const fiData = await getData(f1Search);
    console.log(fiData);

    createF1HTML(fiData);

}

const createF1HTML = (racer) => {
    const racerName = racer.name; //givenname
    const familyName = racer.familyName;
    const racerPosition = racer.position;
    const racerPoints = racer.points;
    const racerPermNum = racer.permanentNumber;
    const racerConstructorId = racer.constructorId;
    const racerNationality = racer.nationality;

    console.log(racerName, familyName, racerPosition, racerPoints, racerPermNum, racerConstructorId, racerNationality);
    let racerDisplay = document.getElementById('racerDisplay');
    
    // Display data in HTML
    let htmlName = document.createElement('h3');
    htmlName.innerHTML = 'First Name: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName;
    racerDisplay.insertAdjacentElement('beforeend', htmlName);
    let htmlFamilyName = document.createElement('h3');
    htmlFamilyName.innerHTML = 'Family Name: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName;
    racerDisplay.insertAdjacentElement('beforeend', htmlFamilyName);
    let htmlPosition = document.createElement('h3');
    htmlPosition.innerHTML = 'Position: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].position;
    racerDisplay.insertAdjacentElement('beforeend', htmlPosition);
    let htmlPoints = document.createElement('h3');
    htmlPoints.innerHTML = 'Points: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].points;
    racerDisplay.insertAdjacentElement('beforeend', htmlPoints);
    let htmlConstructor = document.createElement('h3');
    htmlConstructor.innerHTML = 'Car Make: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].DriverConstructors[0].constructorId;
    racerDisplay.insertAdjacentElement('beforeend', htmlConstructor);
    let htmlNationality = document.createElement('h3');
    htmlNationality.innerHTML = 'Driver Nationality: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality;
    racerDisplay.insertAdjacentElement('beforeend', htmlNationality);
    




}

//›››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››
// ***  CONNECT FORM TO LOAD DATA FUNCTION
//‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹
// const form = document.getElementById('racerDataForm');
// form.addEventListener('submit', loadData);