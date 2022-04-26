import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { fetchMovieList,searchMovieList } from '../redux/actions'
import CardComponent from './CardComponent' 

const MovieList =(props)=>{ 
    const {movieList,searchKey} =props
const [data,setData]=useState([])
useEffect(()=>{
    if(searchKey){
        const filtered= movieList.filter(({title})=>title?.toLowerCase()?.includes(searchKey.toLowerCase()))
        props.searchMovieList(filtered)
       } 
 else props.fetchMovieList()

},[searchKey])
useEffect(()=>{
    if(searchKey) setData(props.searchMovie)
    else setData(props.movieList)
},[props.movieList,props.searchMovie])

return <CardComponent movieList={data} />
}
const mapStateToProps = state =>{
    return {movieList : state.movieList,searchMovie:state.searchMovie}
}
export default connect(mapStateToProps,{fetchMovieList,searchMovieList})(MovieList)