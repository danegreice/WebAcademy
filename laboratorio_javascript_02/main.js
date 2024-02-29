const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */


for (let i = 1; i<=5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    newImage.setAttribute('alt', 'Pic' + i);
    thumbBar.appendChild(newImage);
 
 
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.src);
    });
 }
 
 
 
 /* Wiring up the Darken/Lighten button */
 
 btn.addEventListener('click', () => {
    if ((btn.getAttribute("class")) === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
 });
 