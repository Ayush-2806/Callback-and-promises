let person ={
    firstName: "Mithun",
    lastName : "S",
    age: 20,
}


function ageInDays(person,callback) {
    var fullName = person.firstName + " " + person.lastName;
    var ageInDays = person.age * 365;
    callback(fullName,ageInDays);
  }

  function logresult(fullName,ageInDays){
   
        console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
      
  }


  ageInDays(person,logresult);