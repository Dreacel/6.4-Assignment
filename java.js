const person = {
    Name: "lumi",
    lastName: "nightgale",
    age: 21,
    eyeColors: "brown",

    sayName: function() {
        console.log(this.Name+''+this.lastName);
    }
};

person.sayName();
person.saylastName();