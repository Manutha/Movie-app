export default (movieList=[],action)=>{
    if(action.type=="FETCH_MOVIE_LIST")
    return [...action.payload]

return movieList
}