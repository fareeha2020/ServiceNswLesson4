/*Create a function that takes 3 parameters. The first should be an object with two properties
 name and age. The second should be a number, the third should be a string. The function should
  return true if the age of the object is equal to 
the second parameter and the name is not equal to the third parameter. Otherwise return false.*/
let pets = [
    {
      name: "Rex",
      age: 4
      
    },{
      name: "Spot",
      age: 7
      
    }];
function function3(object1,num,stg)
{
    if (object1.age==num && object1.name!=stg ) {
        return true;
    } else {
        return false;
    }
}
console.log(function3(
  {
  name:"Luke",
  age:23},23,"Lue"));

console.log(function3(pets,30,"far"));
console.log(function3(pets,4,"far"));
console.log(function3(pets,1,"rex"));
