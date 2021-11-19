var ram = {
    fname: "ram",
    age: 25,
    yuga: "Treta",
    power: 2500
}

var krishna = {
    fname: "krishna",
    age: 31,
    yuga: "Dwapar",
    power: 2325
}

function ageComapre(ram, krishna) {
    if(ram.age > krishna.age) {
        console.log("Ram is the elder one");
    }
    else {
        console.log("Krishna is the elder one")
    }
}

function powerCompare(ram, krishna) {
    if(ram.power > krishna.power) {
        console.log("Ram is more powerful")
    }
    else {
        console.log("Krishna is more powerful")
    }
}

function powerInName(ram, krishna) {
    var ramP = ram.fname.length;
    var krishnaP = krishna.fname.length;

    var ramTP = ram.power + (35*ramP);
    var krishnaTp = krishna.power + (35*krishnaP);

    if(ramTP > krishnaTp) {
        console.log("Ram is more powerful")
    }
    else {
        console.log("Krishna is more powerful")
    }

}

ageComapre(ram, krishna);
powerCompare(ram, krishna);
powerInName(ram, krishna);
