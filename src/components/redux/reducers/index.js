import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer";
import SearchMovieReducer from "./SearchMovieReducer";

export default combineReducers({
    movieList : MovieListReducer,
    searchMovie:SearchMovieReducer
})