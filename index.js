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
<select>
        <option>Choose Yor Favorite Dog Breed</option>
       ${Object.keys(breedList).map(function(breed) {
return `<option>${breed}</option>`
       }).join('')}

    </select>
` 
}