


let person ={
    name : "ramesh",
    age : 32,
    address :{
    city : "kathmandu",
    wardNo: 10,
    province : "bagmati",
    },
   
    greet : function (){
        console.log ("welcome", this.name);

    },
     calculateBirthyear : function(){
        year = 2026 - this.age;
        console.log (year);
    },

};

console.log("name"); 
console.log("address"); 
person.address ="pokhaara";
console.log (person["name"]);
person.greet();
person.calculateBirthyear();



// name, age, address, are called keys, properties 
// and ramesh, 32, kathmandu, are called values.
// object has multiple key vvalue pair seperated by "",
// here greet name is " method"
// person.greet();

