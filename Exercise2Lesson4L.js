function checkNameAndAge(person)
 {
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x") {
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX) {
        return true;
    } else {
        return false;
    }
}

let person1 = {
    name: "Xavier",
    age: 29
}

 console.log(checkNameAndAge(person1));

let person2 = {
    name: "Dan",
    age: 24
}

console.log(checkNameAndAge(person2));

let person3 = {
    name: "Dave",
    age: 37
}

 console.log(checkNameAndAge({name: "Xanathar",age: 45});

 //console.log(checkNameAndAge(person3));