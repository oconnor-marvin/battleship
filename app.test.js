const {newShip, fleet, hit, checkSunk, createGameboard, gameboardArr, populateShips} = require('./app');

test('gameboard has been created', () => {
    createGameboard();
    expect(gameboardArr[39].grid).toBe('E3')
})

test('shipbuilding successful', () => {
    expect(newShip(4, ['E1','E2','E3','E4'], [], false)).toStrictEqual({
        shipLength: 4,
        coordinates: ['E1', 'E2', 'E3', 'E4'],
        hits: [],
        isSunk: false,
    })
})

test('ship hit', () => {
    hit('E3')
    expect(fleet[0]).toStrictEqual({
        shipLength: 4,
        coordinates: ['E1', 'E2', 'E3', 'E4'],
        hits: ['E3'],
        isSunk: false,
    })
    expect(gameboardArr[39].hit).toBe(true);
})

test('sinking ships', () => {
    hit('E1')
    hit('E2')
    checkSunk(fleet[0]);
    expect(fleet[0].isSunk).toBe(false)
})

test('gameboard contains a ship', () => {
    populateShips();
    expect(gameboardArr[39].containsShip).toBe(true)
})