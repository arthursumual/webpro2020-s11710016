//EXERCISE #03
function yearUntilRetirement5(year, firstName) {
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + " retired in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired.")
    }
}

//Convert to ES6 Syyntax

const yearUntilRetirement6 = (year, firstName) => {
    let age = 28;
    let retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstname} retired in ${retirement} years`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
}

yearUntilRetirement5(2020, 'Arthur');