//Global Scope Variable to show and delete  slide
let timer
let deleteFirstPhotoDelay

//Fetch data 
async function start() {
    //adding catch incase of error occuring when fetching data
try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
const data = await response.json()
createBreedList(data.message)
} catch (e) {
    console.log("Dog Breed List Not Fetched.")
}
}
start()

//  Function for Creating Dropdown of Dog breeds
function createBreedList(breedList) {
document.getElementById("breed").innerHTML = `
<select onchange="loadByBreed(this.value)">
        <option>Choose Yor Favorite Dog Breed</option>
       ${Object.keys(breedList).map(function(breed) {
return `<option>${breed}</option>`
       }).join('')}

    </select>
` 
}

//Function to listen our event when we select dog breed
async function loadByBreed(breed) {
if (breed != "Choose Yor Favorite Dog Breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
const data = await response.json()
createSlideShow(data.message)
   } 
}

//Function to Create Slides
function createSlideShow(images) {
    let currentPosition = 0
    clearInterval(timer)
    clearTimeout(deleteFirstPhotoDelay) 
// function to deal with case where we have one image only
    if (images.length >1) {
document.getElementById("slideshow").innerHTML = `
 <div class="slide" style="background-image: url('${images[0]}')"> </div>
  <div class="slide" style="background-image: url('${images[1]}')"> </div>
        `
        currentPosition +=2
        //function for case where only two photos are available
        if (images.length ===2)  currentPosition = 0;
        //Time taken  to show next slide 
       timer = setInterval(nextSlide, 3000)
    } else {
document.getElementById("slideshow").innerHTML = `
 <div class="slide" style="background-image: url('${images[0]}')"> </div>
  <div class="slide"> </div>
        `
    }
        function nextSlide() {
            document.getElementById("slideshow").insertAdjacentHTML("beforeend", ` <div class="slide" style="background-image: url('${images[currentPosition]}')"> </div>`)
//Time to wait before next slide is shown 
           deleteFirstPhotoDelay = setTimeout(function(){
                //reomve shown slide
                document.querySelector(".slide").remove()
            }, 1000)
            //function to allow slides show after each other in looping manner even after last is reached
            if (currentPosition + 1 >= images.length) {
                currentPosition = 0;
            } else {
                currentPosition++
            }
        }
}

// add event listener to review form
document.addEventListener("DOMContentLoaded", () => {

let form = document.querySelector('form')
// add event listener to review button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitDetails(document.querySelector('#feedback').value);
  form.reset();
});
});
//adding event to remove button and styling it
function submitDetails(rev) {
let li= document.createElement('li')
let btn= document.createElement('button');
btn.addEventListener('click', toDelete);
btn.textContent= ' Remove';
btn.style.color ="white";
btn.style.borderRadius = "12px";
btn.style.backgroundColor = "red";
li.textContent= `${rev} `;
li.appendChild(btn);
document.querySelector('#reviewed').appendChild(li)
}
// dalete reason the user may not want to appear
function toDelete() {
  document.querySelector('li').remove();
};

// Membership form  function
function submit_form(){  
alert("Login successfully");  
}  
function create(){  
alert("Welcome To Our Club!!");  
}  
 //modifying login / sign up buttons
 //log in button
document.getElementById("loged").style.backgroundColor ="blue";
document.getElementById("loged").style.color ="white";
//sign up button
document.getElementById("signed").style.backgroundColor ="green";
document.getElementById("signed").style.color ="white";
