import React, { useEffect, useState } from 'react'
import CarouselVod from './carouselVod'
import './vodApp.css'
import { FaSearch, FaFile } from 'react-icons/fa'
import YearsLinks from './yearsLinks'
import axios from 'axios'
import ItemVod from './itemVod'
import { useNavigate, useParams } from 'react-router-dom'

export default function VodApp(props) {
  const [ar, setAr] = useState([])
  const [searchQ, setSearchQ] = useState('bank')
  const { year, searchP } = useParams();
  const [flag, setFlag] = useState(false)
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    doApi()
  }, [year, flag])

  useEffect(() => {
    doApi()
  }, [searchP, year,searchP])


  const doApi = async () => {
    setAr([])
    setLoading(true)

    let { data } = await axios.get(`https://www.omdbapi.com/?s=${searchP||'bank'}&y=${year}&apikey=fd6aa444`)
    let temp_ar = data.Search || []
    temp_ar = temp_ar.length > 0 ? temp_ar.filter(temp_ar => temp_ar.Poster !== 'N/A') : [];
    setFlag(!temp_ar.length ? true : false)
    setAr(temp_ar)
    setLoading(false)
  }

  return (
    <div className='vodApp bg-dark'>
      <nav className='vodApp_nav d-flex align-items-center justify-content-between'>
        <div className='col-4'> <h1 className='logo mx-4'>VodApp</h1></div>
        <div className='col-md-3 mx-4'>
          <div className='float-end vodApp-input'>  <input onKeyDown={(e) => { if (e.key === 'Enter') { nav(`/search/${e.target.value||'bank'}`); setSearchQ(e.target.value) } }} onInput={(e) => {
            setSearchQ(e.target.value)
          }}  placeholder='Search...' className='vodApp-inputS col-md-10 col-9' type="search" /> <FaSearch onClick={() => {
            nav(`/search/${searchQ}`);
          }} style={{ marginRight: '10px', cursor: 'pointer' }} className='text-white' /> </div>
        </div>
      </nav>
      <CarouselVod year={year||'noYear'} search={searchP||'bank'}/>
      <YearsLinks searchQ={searchQ} />
      <div className="container border-1 border my-3 bg-white "></div>
      <div className="row container mx-auto">
        {loading && <div> <img src={'https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif'} alt="loading" width={100} /> </div>}

        {(flag && (!loading)) && <h2 className='text-white display-6'>There is no results.... <FaFile className='mx-3' /></h2>}
        {ar.map(item => {
          return (
            <ItemVod key={item.imdbID} year={year||'noYear'} search={searchP||'bank'} item={item} />
          )
        })}
      </div>

    </div>
  )
}
