function darts(input) {
    let index = 0;
    let playerName = input[index++];
    let command = input[index];
    let startPoints = 301;
    let unsuccessful = 0;
    let successul = 0;
    while (command !== "Retire") {
        let sector = command;
        index++;
        let points = Number(input[index]);
        index++;
        command = input[index];
        switch (sector) {
            case "Single":
                points *= 1;
                if (startPoints < points) {
                    unsuccessful++;
                    continue;
                } else {
                    successul++;
                }
                startPoints -= points;
                break;
            case "Double":
                points *= 2;
                if (startPoints < points) {
                    unsuccessful++;
                    continue;
                } else {
                    successul++;
                }
                startPoints -= points;
                break;
            case "Triple":
                points *= 3;
                if (startPoints < points) {
                    unsuccessful++;
                    continue;
                }
                else {
                    successul++;
                }
                startPoints -= points;
                break;
        }
        if (startPoints === 0) {
            console.log(`${playerName} won the leg with ${successul} shots.`);
            break;
        }
    }
    if (command === "Retire") {
        console.log(`${playerName} retired after ${unsuccessful} unsuccessful shots.`);
    }
}