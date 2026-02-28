const person = {
    Name: "lumi",
    lastName: "nightgale",
    age: 21,
    eyeColors: "brown",

    sayName: function() {
        console.log(this.Name);
    }
};

person.sayName();

const food = ["Sushi","Salad","Lasagna","Chicken Nuggets",];

food.push("Pizza");

console.log(food);