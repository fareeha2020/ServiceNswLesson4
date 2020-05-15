//Use the Array.map function to create an array of all the names of the owners.
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
  //Use the Array.map function to create an array of
  // all the names of the owners.
//unique list is extension exercise
function getOwner(getname){
    return getname.ownerName;
}

//call function

let collectArray=pets.map(getOwner);
  console.log(collectArray);