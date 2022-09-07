const fleet = [];

function newShip(length, coordinates, hits, isSunk){
    const ship = {
        shipLength: length,
        coordinates: coordinates,
        hits: hits,
        isSunk: isSunk,
    }
    fleet.push(ship);
    return ship;
}

function hit(square){
    fleet.forEach((ship) => { 
        if(ship.coordinates.includes(square)){
            ship.hits.push(square);
            gameboardArr.forEach((gamesquare) => {
                if(gamesquare.grid.includes(square)){
                    gamesquare.hit = true;
                }
            })
        }
    })
}

function checkSunk(ship){
//    fleet.forEach((ship) => {
    if(ship.shipLength === ship.hits.length){
        ship.isSunk = true;
    }
//    })
}

const makeGamesquare = (letter, index, containsShip, selected, hit) => {
    const gamesquare = {};
    gamesquare.grid = letter+index;
    gamesquare.containsShip = containsShip;
    gamesquare.selected = selected;
    gamesquare.hit = hit;
    return gamesquare;
}


let gameboardArr = [];
function createGameboard(){
    let count = 0;
    const letters = ['A','B','C','D','E','F','G','H','I','J']
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i]
        for (let J = 0; J < 9; J++) {
            gameboardArr[count] = makeGamesquare(letter, J, false, false, false)
            count++;
        }
    }
    return gameboardArr;
}



function populateShips(){
    gameboardArr.forEach((gamesquare) => {
        fleet.forEach((ship) => {
            let gridNumber = gamesquare.grid
            if(ship.coordinates.includes(gridNumber))
            gamesquare.containsShip = true;
        })
    })
}


module.exports = {
    newShip, fleet, hit, checkSunk, createGameboard, gameboardArr, populateShips
}