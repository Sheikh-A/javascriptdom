// Step 1: Demonstrate single Selections using getElementById() and querySelector()
//
//.getElementById()
//- Any valid ID will work
//- No need for the # CSS selector, just the name of the ID

let logoTitle = document.getElementById("logo-title");
console.log(logoTitle);

let menuItems = document.getElementsByClassName("menu-item");
console.log(menuItems); //HTML collection


// Always log the result to showcase the element is indeed what you thought it was.

/*  querySelector() NEWER METHODS
- Any valid CSS selector will work but you MUST use the selector for the argument
- Be careful to mention that it finds the FIRST matching selection.  This can be an issue of developers forget and have multiple class names.
*/

let logoTitleQS = document.querySelector("#logo-title"); //based on CSS styled selectors
console.log(logoTitleQS);

//ERROR
// let logoTitleQSW = document.querySelector("logo-title"); //based on CSS styled selectors
// console.log(logoTitleQSW);

let menuItemsQS = document.querySelector(".menu-item"); //CSS
console.log("single item:", menuItemsQS);
//only first item returned

let menuItemsQSALL = document.querySelectorAll(".menu-item"); //CSS
console.log(menuItemsQSALL[0]); //Home
console.log(menuItemsQSALL[1]); //About
console.log(menuItemsQSALL[2]); //Blog
console.log(menuItemsQSALL[3]); //Contact
//ARRAY has forEach

let cardImage = document.querySelectorAll(".card-img-top");

cardImage[0].src = "https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";
cardImage.alt = "this is a ship";

cardImage[1].src = "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
cardImage.alt = "this is a ship";

cardImage[2].src = "https://images.unsplash.com/photo-1507860842836-a290cfcc4bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80";
cardImage.alt = "this is a ship";

cardImage[3].src = "https://images.unsplash.com/photo-1583403422031-961e77990dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80";
cardImage.alt = "this is a ship";

let firstHeadline = document.querySelector(".card-title");
firstHeadline.textContent = "Flexship One";

let textCard = document.getElementsByClassName("card-title");
Array.from(textCard).forEach( (element) => {
    element.textContent = `Flexships`
} );

let cardText = document.getElementsByClassName("card-text");
Array.from(cardText).forEach( (element) => {
    element.textContent = `Ship fast, fast ship, Ship fast, fast ship, Ship fast, fast ship, Ship fast, fast ship,`
});


const subtitles = document.querySelectorAll(".card-subtitle");

subtitles.forEach((element) => {
    element.style.color = "dodgerblue";
    element.textContent = "FlexingPort";
});


const links = document.querySelectorAll(".card-link");
links.forEach((element) => {
    element.href = "https://unsplash.com/search/photos/ships";
    element.textContent = "Ships";
})

links[1].href = "https://unsplash.com/search/photos/transportation";
links[1].textContent = "Transport";

links[3].href = "https://unsplash.com/search/photos/transportation";
links[3].textContent = "Transport";

links[5].href = "https://unsplash.com/search/photos/transportation";
links[5].textContent = "Transport";

links[7].href = "https://unsplash.com/search/photos/transportation";
links[7].textContent = "Transport";

console.log(links);

const lastCard = document.querySelector(".card-text--last");

lastCard.classList.remove("extra-stuff");

let newContent = document.createElement("footer");

newContent.textContent = "Website created by Ali Sheikh";
newContent.style.color = "white";
newContent.style.fontSize = "14px";

let body = document.querySelector('body');
body.appendChild(newContent);

body.style.backgroundColor = "cornflowerblue";
// Step 2: Review methods that return a multiple selections in the form of a HTMLCollection

// Note that you must show the true console in your browser window because the result will be a HTMLCollection and is too large for codepen.

//ADDING EVENT LISTENERS



const firstCat = document.querySelectorAll(".card-img-top");

// firstCat.addEventListener("mouseenter", () => {
//     firstCat.style.transform = "scale(1.4)";
//     firstCat.style.transition = "transform 1s";
//     console.log("Our mouse if over the ship" + new Date());
// }); //only does ONCE

// firstCat.addEventListener("mouseleave", () => {
//     firstCat.style.transform = "scale(1)";
// });


firstCat.forEach((elements) => {
    elements.addEventListener("mouseenter", (event) => {
            elements.style.transform = "scale(1.4)";
            elements.style.transition = "transform 1s";
            console.log("date", new Date());
    });
});

firstCat.forEach((elements) => {
    elements.addEventListener("mouseleave", (event) => {
            elements.style.transform = "scale(1)";
    });
});

const cardTitles = document.querySelectorAll(".card-title");
console.log(cardTitles);

cardTitles.forEach((elements) => {
    elements.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.style.transform = "rotate(360deg)";

        event.target.parentElement.parentElement.style.transition = "transform 1s";
        // if(event.target.style.color === "blue") {
        //     event.target.style.color = "black";
        // } else {
        //     event.target.style.color = "blue";
        // };
    })
});

// for(let i = 0; i < cardTitles.length; i++) {
//     cardTitles[i].addEventListener("mouseenter", () => {
//         cardTitles[i].style.fontSize = "50px";
//     });
// };



// firstCat.addEventListener("mouseenter", () => {
//     firstCat.style.transform = "scale(1.2)";
//     firstCat.style.transition = "transform 1s";
//     console.log("Our mouse if over the ship" + new Date());
// }, {once: true}); //only does ONCE



const cards = document.querySelectorAll('.card');

//STOP PROPOGATION

cards.forEach((cardEl) => {
    cardEl.addEventListener('click', (event) => {
        event.stopPropagation();
        if(cardEl.style.backgroundColor === 'green') {
            cardEl.style.backgroundColor = 'white';
        } else {
            cardEl.style.backgroundColor = 'green';
        }
    });
});



const cbody = document.querySelector('body');

cbody.addEventListener('click', (event) => {
    console.log(event.target);
    event.stopPropagation();
    if(cbody.style.backgroundColor === "red") {
        cbody.style.backgroundColor = "cornflowerblue";
    } else {
        cbody.style.backgroundColor = "red";
    }
});

const homeLink = document.querySelector(".menu-item");

// homeLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('clicked');
// })


// You can target specific elements by using the array-like syntax of a HTMLCollection


// Step 3: Review methods that return a multiple selections in the form of a NodeList



// Step 4: Talk about the differences between HTMLCollection and NodeList by showing a HTMLCollection and a NodeList on top of each other in the console.  Point out that HTMLCollections are faster by their nature but that NodeLists allow for the use of forEach() without converting to an Array.

// // Example of forEach on our NodeList changing all matching elements.


// // Convert HTMLColletion to an Array.  Take time to showcase the __proto__ for the respective console logs between HTMLCollection, NodeList, and Array.  Point out the methods in each example.
// // ✅
// // getElementsbyClassName;
// Array.from

// // Step 5: DOM manipulation






// Step 6: DOM Style
//  anything with a - needs to be camel cased.  eg: background-color should be style.backgroundColor



// Step 7: classList manipulation, we will remove a class called ".extra-stuff" from our DOM.




// Step 8: Creating new DOM elements in JS only

// Creating a new element, adding content, and adding it to browser

// Item Creation Step 1: create a new element



// Item Creation Step 2: add some content to the newly created div



// Item Creation Step 3: prepend or append the element to an existing DOM node on the page
