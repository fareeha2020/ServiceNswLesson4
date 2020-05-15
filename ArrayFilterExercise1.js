 /* Use the Array.filter function to create an array of all the pets that
  are less than 5 years old and that have either a pet or owner name that starts with "S"*/

  let pets = [
    {
      name: "Rex",
      age: 4,
      ownerName: "Luke"
    },{
      name: "Spot",
      age: 7,
      ownerName: "Jade"
    },{
      name: "Scooby",
      age: 3,
      ownerName: "Shaggy"
    },{
      name: "Lucky",
      age: 1,
      ownerName: "Luke"
    },{
      name: "Sadie",
      age: 3,
      ownerName: "Daniel"
    },{
      name: "Duke",
      age: 5,
      ownerName: "Sabine"}
    ];

    function function1(pet){
        let lessThan5=pet.age<5;
        let startS=pet.name[0].toLowerCase()=="s"||
        pet.ownerName[0].toLowerCase()=="s";
         return lessThan5 && startS;
         

    }
    let myPetMatches=pets.filter(function1);
    console.log(myPetMatches);
