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
  //Use the Array.find function to retrieve the pet owned by Shaggy

  function findShaggy(pet){
      return pet.ownerName =="shaggy";

  }
  let shaggypet=pets.find(findShaggy);
  console.log(shaggypet);
