//Question 1:

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In Stock");
}

//Question 2:

   for (var i = 15; i <= 25; i++) { 
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// Question 3:

var games = [
    {
     title: "Grand Theft Auto",
     rating: 4.48,
    },
    {
     title: "Portal 2",
     rating: 3.5,
    },
    {
     title: "Team Fortress",
     rating: null,
    },
    {
     title: "The Witcher",
     rating: 3.0,
    },
    {
     title: "The Elder Scrolls",
     rating: 2.9,
    },
   ];

   console.log(games)

var gamesContainer = document.querySelector(".games")

   for (var i = 0; i < games.length; i++) {
    var data = games[i];
    console.log(data.title);
    console.log(data.rating);

    gamesContainer.innerHTML += "<li>" + data.title + data.rating ;

   }

   

// Question 4:

function whatIDontLike (typeOfGenerator) {
    if (typeof typeOfGenerator === "string") {
        console.log(`I don't like ${typeOfGenerator}`);
    } else {
        console.log("Please send inn a string value");
    }
}

whatIDontLike("Johan");


//question 5: 

/*
function mustBeTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum);
}

mustBeTwoNumbers(4, 2);*/

function mustBeTwoNumbers(number1, number2) {
    console.log(number1 - number2);
}

mustBeTwoNumbers (1, 42);

// question 6:








// Question 7:

var toys = [
    {
     name: "Lego",
     price: 15.6,
    },
    {
     name: "Master of the Universe",
     price: "28.3",
    },
    {
     name: "Barbie",
     price: null,
    },
    {
     name: "Mr Potato Head",
     price: 89.99,
    },
   ];
