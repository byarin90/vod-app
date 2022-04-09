import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoItemVod from './comps/infoItemVod';
import Page404 from './comps/page404';
import VodApp from './comps/vodApp';

export default function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<VodApp />} />
        {/* <Route path='/year/:year' element={<VodApp/>} /> */}
        <Route path='/search/:searchP/year/:year/video/:id' element={<InfoItemVod />} />
        <Route path='/video/:id' element={<InfoItemVod />} />
        <Route path="/*" element={<Page404 />} />
        <Route path='/search/:searchP' element={<VodApp />} />
        <Route path='/search/:searchP/year/:year' element={<VodApp />} />
      </Routes>
      <p style={{fontWeight:'bold'}} className='text-white m-0 p-3 bg-dark'>© 2022 Copyright: Yarin Bukai</p>

    </BrowserRouter>
  )
}
