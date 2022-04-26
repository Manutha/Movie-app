import { AXIOS_API } from "../../api/api"
export const fetchMovieList =()=>async dispath=> {
    try{
    const movieList =await AXIOS_API.get() 
    
    dispath({type:"FETCH_MOVIE_LIST",payload:movieList?.data?.movies})
}catch(err){
    console.log(err.message)
}
}

export const searchMovieList =(movie)=>{
    return {
        type : "SEARCH_MOVIE",
        payload : movie
    }
}