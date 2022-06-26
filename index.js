//Fetch data 
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
const data = await response.json()
createBreedList(data.message)
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
document.getElementById("slideshow").innerHTML = `
 <div class="slide" style="background-image: url('${images[0]}')"> </div>
  <div class="slide" style="background-image: url('${images[1]}')"> </div>
        `
        currentPosition +=2
        //Time taken  to show next slide 
        setInterval(nextSlide, 3000)
        function nextSlide() {
            document.getElementById("slideshow").insertAdjacentHTML("beforeend", ` <div class="slide" style="background-image: url('${images[currentPosition]}')"> </div>`)
//Time to wait before next slide is shown 
            setTimeout(function(){
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