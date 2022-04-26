export default (searchMovie=[],action)=>{
if(action.type=="SEARCH_MOVIE" && action.payload)
    return [...action.payload]
return searchMovie
}

