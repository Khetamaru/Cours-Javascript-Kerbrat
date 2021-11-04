let spare = 2;

/**
 * @param {number} diskNumber
 * @param {number} startTower
 * @param {number} endTower
 */
function Hanoi(diskNumber, startTower, endTower) {

    let temp = 0;

    if (diskNumber == 1) { console.log(startTower + " -> " + endTower); }
    else {

        temp = spare;
        spare = endTower;
        Hanoi(diskNumber - 1, startTower, temp);

        console.log(startTower + " -> " + endTower);

        spare = startTower;
        Hanoi(diskNumber - 1, temp, endTower);
    }
}

Hanoi(4, 1, 3);