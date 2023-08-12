const invalid = document.getElementById("invalid");
const loader = document.getElementById("loader");

function showLoader(){
    loader.style.display ="block";
}

function hideLoader(){
    loader.style.display= "none";
}

async function fetchURL(api,movie){
    showLoader();
    const url = `https://www.omdbapi.com/?s=${movie}&apikey=${api}`;
    
    try{
      const response = await fetch(url,{method:"GET"});
      const result = await response.json();
      if (result.Response === "False" && result.Error === "Invalid API key!") {
        throw new Error("Invalid API Key!");
      }
      hideLoader();
      showDataOnUI(result);
    }
    catch(e){
        alert(e.message);
        hideLoader();
    }
    
    
}

const searchBtn = document.getElementById("btn");

 searchBtn.addEventListener("click",()=>{
    const apiString = document.getElementById("apikey").value.trim();
    const movieName = document.getElementById("movie").value.trim();
 
    fetchURL(apiString,movieName);
 });


const container = document.getElementById("container");

 function showDataOnUI(data){
   container.innerHTML="";
   let arr = data.Search;
   arr.forEach(ele => {
      const poster = ele.Poster;
      const title = ele.Title;
      const year = ele.Year;
      const imdbId = ele.imdbID;

      const url = `https://www.imdb.com/title/${imdbId}/`;
      const chunkSize = 16;
      const formattedTitle = breakTextIntoChunks(title, chunkSize);

      let posterSrc = poster !== "N/A" ? poster : "./images.png";
     
      const card = document.createElement("div");
      card.id = "card";

      card.innerHTML=
      `<div id="image">
      <img src="${posterSrc}">
   </div> 

   <div id="title">
      <p>${formattedTitle}</p>
      <p style="font-size: 13px;">${year}</p>
   </div>

   <div id="more">
      <a href=${url}>More details</a>
   </div>`

   container.appendChild(card);

   });

 }


 function breakTextIntoChunks(text, chunkSize) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks.join('<br>');
  }