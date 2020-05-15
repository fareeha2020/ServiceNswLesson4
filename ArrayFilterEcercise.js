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
 //1.Use the Array.filter function to create
 // an array of all the pets owned by Luke.   
 function function1(array1){
   return array1.ownerName == "Luke";
          }

 
 let lukeArray=pets.filter(function1);
 console.log(lukeArray);
A