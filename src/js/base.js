export  const elements={
    searchForm:document.getElementById("form-search"),
    searchInput:document.getElementById("txt-keyword"),
    searchResults:document.getElementById("results"),
    
}
export const image_sizes=
{
  //burayı ben yapmıyacam
}
export const renderLoader=parent=>{
       const loader=`        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       `
       parent.insertAdjacentHTML("beforebegin",loader);
}
export const clearLoader=parent=>{
      const loader=parent.previousSibling;
      if (loader) {
        loader.parentNode.removeChild(loader)
      }
}