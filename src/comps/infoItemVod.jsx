import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function InfoItemVod() {
  const { id,year,searchP } = useParams();
  const [obj,setObj] =useState({});
  const [loading,setLoading] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  useEffect(() => {
    makeStars();
}, [obj])


  const doApi = async () => {
    setObj({})
    setLoading(true)
    let data = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=fd6aa444`);
    let d = data.data;
    let tempObj;
    tempObj = { name: d.Title, img: d.Poster, year: d.Year, info: d.Plot, genre: d.Genre, actors: d.Actors, rate: +(d.Ratings[0].Value).slice(0, 3) }
    setObj(tempObj)
    setLoading(false)

  }

  const makeStars = () => {
    setStars([]);
    let stars = [];
    for (let index = 0; index < obj.rate; index++) {
        stars.push(<div className='text-white'><img width={22} src='/star.png' alt={'half_star'}/></div>)
    }
    if (obj.rate % 2 != 0) stars.push(<div className='text-white'><img width={22} alt={'star'} src='/half_star.png' /></div>)
    setStars(stars);
}
  return (
    <div style={{ minHeight: '100vh' }} className='bg-dark mx-auto p-md-5 text-white'>
        <div className="row mx-auto">
            <div className="col-md-5 text-center p-md-0 pt-5 overflow-hidden">
              {loading && <img width={200} className='text-center mt-5' src="https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif" alt="loading"/> }
              <img className='itemInfo-img' width={400} src={obj.img} alt={obj.name} />
            </div>
            <div className="col-md-7 p-5 text-md-start text-center">
              <h1 className='display-6'>{obj.name}</h1>
              <p className=''>{obj.info}</p>
              <h6>Genre: {obj.genre}</h6>
              <h6>Actors: {obj.actors}</h6> 
              <div className='d-flex flex-column align-items-md-start py-2  align-items-center'> 
              <h5>Year: {obj.year}</h5> 
            <div className='d-flex my-4 my-md-0 info_stars'>{stars}</div>
              </div>
            <Link to={`/search/${searchP ||'bank'}/year/${year||'noYear'}`} style={{fontWeight:'bold'}} className='btn btn-light my-2 itemInfo-btn'>Back</Link>
            </div>
        </div>
    </div>
  )
}