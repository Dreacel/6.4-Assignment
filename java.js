const person = {
    Name: "lumi",
    lastName: "nightgale",
    age: 21,
    eyeColors: "brown",

    diaplay: function() {
        console.log(this.Name+''+this.lastName);
    }
};

person.display();