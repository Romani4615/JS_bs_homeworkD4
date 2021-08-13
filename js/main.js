// cons getData = async => {
//     search
// }

const getData = async () => {
    searchUrl = `https://ergast.com/api/f1/20201/driverStandings.json`;
    let response = await fetch(searchUrl);
    return response.json(); // return promise
}
const loadData = async (e) => {
    e.preventDefault();
    console.log(e);

    const f1Search = e.target[1]
    console.log(f1Search);

    const f1Data = await getData(f1Search);
    console.log(f1Data);

    createF1HTML(f1Data);

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
    htmlFamilyName.innerHTML = 'Family Name: ' + familyName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName;
    racerDisplay.insertAdjacentElement('beforeend', htmlFamilyName);

    let htmlPosition = document.createElement('h3');
    htmlPosition.innerHTML = 'Position: ' + racerPosition.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].position;
    racerDisplay.insertAdjacentElement('beforeend', htmlPosition);

    let htmlPoints = document.createElement('h3');
    htmlPoints.innerHTML = 'Points: ' + racerPoints.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].points;
    racerDisplay.insertAdjacentElement('beforeend', htmlPoints);

    let htmlPermNum = document.createElement('h3');
    htmlPermNum.innerHTML = 'Permanent Number: ' + racerPermNum.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.permanentNumber;
    racerDisplay.insertAdjacentElement('beforeend', htmlPermNum);

    let htmlConstructor = document.createElement('h3');
    htmlConstructor.innerHTML = 'Car Make: ' + racerConstructorId.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].DriverConstructors[0].constructorId;
    racerDisplay.insertAdjacentElement('beforeend', htmlConstructor);
    
    let htmlNationality = document.createElement('h3');
    htmlNationality.innerHTML = 'Driver Nationality: ' + racerNationality.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality;
    racerDisplay.insertAdjacentElement('beforeend', htmlNationality);
    



    // let Lists = document.createElement('ul');
    // for (const a of racer.abilities){
    //     let htmlAbilities = document.createElement('li');
    //     console.log(a)
    //     htmlAbilities.innerHTML = a.ability.name;
    //     abilityList.insertAdjacentElement('beforeend', htmlAbilities);
    // }
    // pokeDisplay.insertAdjacentElement('beforeend', abilityList)
}

//›››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››
// ***  CONNECT FORM TO LOAD DATA FUNCTION
//‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹
const form = document.getElementById('racerDataForm');
form.addEventListener('submit', loadData);

//›››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››
// ***  PRINT DATA ON PAGE
//‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹