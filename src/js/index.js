//api: e0935941
//url: http://www.omdbapi.com/
//https://www.omdbapi.com/?apikey=e0935941&t=a
//
//model view controller

import Search  from "./models/Search";
import { elements,renderLoader,clearLoader } from "./base";
import * as searchView from "./views/searchView";
import { Movie } from "./models/Movie";
const state={};
const searchController=async ()=>{
    const keyword=elements.searchInput.value;
    if (keyword) {
        state.search=new Search(keyword);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults)
        await state.search.getResults();
        searchView.displayResults([state.search.data])
        clearLoader(elements.searchResults)
    }
    else{
        alert("bilgi gir!")
    }
}

const search=new Search("abc");
console.log(search);
search.getResults();
elements.searchForm.addEventListener("submit",(e)=>{
    searchController();
    e.preventDefault();
})
//movie controller
const movieControler =async ()=>{
    const id=window.location.hash.replace("#","");
    if (id) {
        state.movie=new Movie(id)
        await state.movie.GetMovie();
        console.log(state.movie)
    }
};
window.addEventListener("hashchange",movieControler)