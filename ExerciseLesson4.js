/*
Create a function that
 takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers.
  Return true if num is between floor and ceiling. Otherwise return false
.*/
function function1(floor,ceiling,num)

{
    if( num>floor && num<ceiling ){
        return true;

    }else{
        return false;
    }
}
console.log(function1(3,5,6));
console.log(function1(12,24,13));
