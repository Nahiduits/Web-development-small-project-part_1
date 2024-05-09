const accesskey = "KjS6HZLGxSrHMgw9fjG7Ke8MVIYods_bEml7kk17H08"
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    const inputData = inputE1.value ;
    const url = `<https://api.unsplash.com/search/photos?page=1&query=${inputData}&client_id=${accesskey}>`
      
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    console.log(results);

    if(page==1){
        searchResults.innerHTML = ""

    }
    results.map((result)=>{
       const imageWrapper = document.createElement("div");
       imageWrapper.classList.add("search-result");
       const image = document.createElement('img');
       image.src = result.urls.small;
       image.alt = result.alt_description;
       const imageLink = document.createElement('a');
       imageLink.href = result.links.html;
       imageLink.target = "_blank"
       imageLink.textContent = result.alt_description;

       imageWrapper.appendChild(image);
       imageWrapper.appendChild(imageLink);
       searchResults.appendChild(imageWrapper);
       
    })

    page++;
    if(page>1){
        showMore.style.display = "block";
    }
}

formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    searchImages();
})





