import { Card, Col, Row,Empty } from 'antd';
import { useEffect, useState } from 'react';

const gridStyle = {
  width: 200,
  textAlign: 'center',
  height: 250,
};
const { Meta } = Card;
export default (props) => {
    const [genreViseMovie,setGenreViseMovie]=useState({})
    const {movieList} = props; 
    const returnGenres =()=>{
      return movieList.map(({genres})=>genres.join(' & ')).sort()
    }
    
    useEffect(()=>{
        const genres = returnGenres()
        const genreMovies ={}
        genres.map(gen=>{
           const list= movieList.filter(({genres})=>genres.join(' & ')==gen) 
           genreMovies[gen]=list
           
        })
        setGenreViseMovie(genreMovies)
    },[movieList])

    const renderMovies =()=>{

      if(movieList.length){
        const movies=[]
        for(const[key,values] of Object.entries(genreViseMovie)){
       const movieCard=<Card title={key} key={key}><Row gutter={16}> { 
            values.map(val=><Col span={8}> <Card hoverable={true} cover={<img alt="example"  src={val.poster} style={{height:190}} />} key={val.id}  style={gridStyle}><Meta title={val.title} /></Card></Col>)
        }</Row></Card>
        movies.push(movieCard)

    }
    return movies.map(movie=>movie) }
    else return <Empty/>
    } 

    return <>{renderMovies()}</>
}
 