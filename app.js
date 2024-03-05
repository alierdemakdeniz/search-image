const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#search-input")
const  buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageListWrapper = document.querySelector(".imageList-wrapper")

runEventListeners();

function runEventListeners(){

    form.addEventListener("submit",search);
    clearButton.addEventListener("click",clear);
}
function clear() {
    searchInput.value="";
    // Array.from(imageListWrapper.children).forEach((child)=> child.remove()) 
    imageListWrapper.innerHTML=""   
}
function search(e){
     imageListWrapper.innerHTML=""
    const value = searchInput.value.trim();
    
    
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization:"Client-ID 0FMpXUReYvigVxVNKqhEWuzR6IausIIgC4n2U9n6lAI"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.results.forEach(image => {
            console.log(image.urls.small);
            addImageUI(image.urls.small);
        });
    })
    .catch((err)=>console.log(err))


    e.preventDefault();
}
function addImageUI(url){
    const div = document.createElement("div")
    div.className="card"

    const img=document.createElement("img")
    img.setAttribute("src",`${url}`)
    img.setAttribute("height"," auto")
    img.setAttribute("width","auto")
    // img.setAttribute("style","object-fit :cover")
    // img.setAttribute("style","border-radius : 15px ")
    img.setAttribute("style", "filter:drop-shadow(2px 4px 6px black); object-fit : cover; border-radius:15px;")
    
    

    div.append(img);
    imageListWrapper.append(div)




}
