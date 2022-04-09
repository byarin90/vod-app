import React from 'react'
import { Link } from 'react-router-dom';

export default function ItemVod(props) {
    let item = props.item;
    item.Poster = item.Poster != "N/A" ? item.Poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWSxsVpAmqb_T7CLGolJ193Bw9xh7X7r0yQ&usqp=CAU";
    return (
        <div className='col-md-3  p-md-4 px-5 my-5 my-md-0 '>
            <Link to={`/search/${props.search}/year/${props.year}/video/`+item.imdbID}>
            <div style={{borderRadius:'20px',cursor:'pointer'}} className='shadow overflow-hidden h-100'>
                <img src={item.Poster} height={300} className=' w-100'  alt={item.Title} />
            </div>
            </Link>
        </div>
    )
}
