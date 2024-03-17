//Customer review ratging // Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
        // Loop through the "stars" NodeList Again
        stars.forEach((star, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});

// Box 2
//Customer review ratging // Select all elements with the "i" tag and store them in a NodeList called "stars"
const rates = document.querySelectorAll(".rates i");

// Loop through the "stars" NodeList
rates.forEach((rate, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    rate.addEventListener("click", () => {
        // Loop through the "stars" NodeList Again
        rates.forEach((rate, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? rate.classList.add("active") : rate.classList.remove("active");
        });
    });
});


//Rating3    ratings

//Customer review ratging // Select all elements with the "i" tag and store them in a NodeList called "stars"
const ratings = document.querySelectorAll(".ratings i");

// Loop through the "stars" NodeList
ratings.forEach((rating, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    rating.addEventListener("click", () => {
        // Loop through the "stars" NodeList Again
        ratings.forEach((rating, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? rating.classList.add("active") : rating.classList.remove("active");
        });
    });
});