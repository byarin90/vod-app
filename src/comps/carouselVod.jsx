import React from 'react'
import { Carousel } from 'react-bootstrap'
import {FaPlay,FaInfoCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function CarouselVod() {
    let nav = useNavigate()
    return (
        <React.Fragment>
            <Carousel interval={1500} fade>
                <Carousel.Item className='carousleDiv' style={{backgroundPosition:'center top',backgroundImage:'url(https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/jason-statham-FF-Hobbs-Shaw.jpg)'}}>
                  <Carousel.Caption className='text-start '>
                      <button onClick={()=>{
                          nav('/video/tt6806448')
                      }} className='btn btn-warning'>More Information <FaInfoCircle className='ms-2'/></button>
                      <button className='d-block d-md-inline btn btn-danger  px-md-5  my-2 my-md-0 mx-md-3'>Watch  <FaPlay className='ms-2'/></button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousleDiv flash' style={{backgroundImage:'url(https://persiadigest.com/wp-content/uploads/2021/05/1622044950_The-Flash-Season-8-will-start-with-five-exceptional-cross.jpg)'}}>
                    <Carousel.Caption className='text-start '>
                    <button onClick={()=>{
                        
                          nav('/video/tt3107288')
                      }} className='btn btn-warning d-block d-md-inline'>More Information <FaInfoCircle className='ms-2'/></button>
                      <button className='d-block d-md-inline btn btn-danger  px-md-5  my-2 my-md-0 mx-md-3'>Watch  <FaPlay className='ms-2'/></button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousleDiv batman' style={{backgroundImage:'url(https://sm.ign.com/ign_il/news/n/new-batman/new-batman-v-superman-image-revealed_vpf6.jpg)'}}>

                <Carousel.Caption className='text-start '>
                    <button onClick={()=>{
                          nav('/video/tt2975590')
                      }} className='btn btn-warning d-block d-md-inline'>More Information <FaInfoCircle className='ms-2'/></button>
                      <button className='d-block d-md-inline btn btn-danger  px-md-5  my-2 my-md-0 mx-md-3'>Watch  <FaPlay className='ms-2'/></button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}
