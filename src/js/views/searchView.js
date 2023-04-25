import { elements } from "../base";

export const clearInput=()=>{
    elements.searchInput.value="";
}
export const clearResults=()=>{
    elements.searchResults.value="";
}

export const displayResults=movies=>{
   movies.forEach(movie => {
       console.log(movie);
      
        var html=
        `
        <li class="media mb-3">
        <a class="d-flex" href="#${movie.imdbID}">
            <img src="${movie.Poster}" alt="">
        </a>
        <div class="media-body">
            <h5>${movie.Title}</h5>
            ${movie.Plot}
        </div>
        </li>
        `;
        elements.searchResults.insertAdjacentHTML("beforeend",html);
    });
    
}