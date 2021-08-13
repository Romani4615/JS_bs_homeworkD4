// cons getData = async => {
//     search
// }

const getData = async (year) => {
    searchUrl = `https://ergast.com/api/f1/${year}/1/driverStandings.json`;
    let response = await fetch(searchUrl);
    return response.json(); // return promise
}
const loadData = async (e) => { //submit button
    e.preventDefault();
    console.log(e);

    const f1Search = e.target[1].value; // will save what we type in will save to variable
    console.log(f1Search);// insert to get data

    const f1Data = await getData(f1Search);
    console.log(f1Data);

    createF1HTML(f1Data);

}

const createF1HTML = (racer) => { 
    const r = racer.MRData.StandingsTable.StandingsLists[0].DriverStandings[1]
    const racerName = r.Driver.givenName; //givenname
    const familyName = r.Driver.familyName;
    const racerPosition = r.position;
    const racerPoints = r.points;
    const racerPermNum = r.Driver.permanentNumber;
    const racerConstructorId = r.Constructors[0].constructorId;
    const racerNationality = r.Driver.nationality;
    
    console.log(racerName, familyName, racerPosition, racerPoints, racerPermNum, racerConstructorId, racerNationality);
    let racerDisplay = document.getElementById('racerDisplay');
    
    // Display data in HTML
    let htmlName = document.createElement('h3');
    htmlName.innerHTML = 'First Name: ' + racerName;
    racerDisplay.insertAdjacentElement('beforeend', htmlName);
    
    let htmlFamilyName = document.createElement('h3');
    htmlFamilyName.innerHTML = 'Family Name: ' + familyName;
    racerDisplay.insertAdjacentElement('beforeend', htmlFamilyName);
    
    let htmlPosition = document.createElement('h3');
    htmlPosition.innerHTML = 'Position: ' + racerPosition;
    racerDisplay.insertAdjacentElement('beforeend', htmlPosition);
    
    let htmlPoints = document.createElement('h3');
    htmlPoints.innerHTML = 'Points: ' + racerPoints;
    racerDisplay.insertAdjacentElement('beforeend', htmlPoints);
    
    let htmlPermNum = document.createElement('h3');
    htmlPermNum.innerHTML = 'Permanent Number: ' + racerPermNum;
    racerDisplay.insertAdjacentElement('beforeend', htmlPermNum);
    
    let htmlConstructor = document.createElement('h3');
    htmlConstructor.innerHTML = 'Car Make: ' + racerConstructorId;
    racerDisplay.insertAdjacentElement('beforeend', htmlConstructor);
    
    let htmlNationality = document.createElement('h3');
    htmlNationality.innerHTML = 'Driver Nationality: ' + racerNationality;
    racerDisplay.insertAdjacentElement('beforeend', htmlNationality);
    

let racerList = document.createElement('ul');
for (const a of r.DriverStandings){
    let htmlStandings = document.createElement('li');
    console.log(a)
    htmlStandings.innerHTML = a.r.position.value;
    racerList.insertAdjacentElement('beforeend', htmlStandings);
}
racerDisplay.insertAdjacentElement('beforeend', racerList)
}
// let Lists = document.createElement('ul');
    // for (const a of racer.abilities){
    //     let htmlAbilities = document.createElement('li');
    //     console.log(a)
    //     htmlAbilities.innerHTML = a.ability.name;
    //     abilityList.insertAdjacentElement('beforeend', htmlAbilities);
    // }
    // pokeDisplay.insertAdjacentElement('beforeend', abilityList)


//›››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››
// ***  CONNECT FORM TO LOAD DATA FUNCTION
//‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹
const form = document.getElementById('racerDataForm');
form.addEventListener('submit', loadData);

//›››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››››
// ***  PRINT DATA ON PAGE
//‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹