import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

export default function YearsLinks(props) {
  let navigate = useNavigate()
  const [years, setYears] = useState([])
  useEffect(() => {
    let temp_ar = []
    for (let index = 1950; index <= (new Date()).getFullYear(); index++) {
      temp_ar.push({
        label: index,
        value: index
      })
    }
    setYears(temp_ar)
  }, [])

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand><Link className='yearLinks-link text-white' to='/'>Top Years</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/1950`}>1950</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/1960`}>1960</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/1970`}>1970</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/1980`}>1980</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/1990`}>1990</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/2000`}>2000</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/2010`}>2010</Link></Nav.Link>
              <Nav.Link ><Link className='yearLinks-link' to={`/search/${props.searchQ}/year/2020`}>2020</Link></Nav.Link>      </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <div className='container '>  <Select onChange={item => {
        navigate(`/search/${props.searchQ}/year/${item.value}`);
      }} options={years} className=' my-md-0 w-25 selectYears text-center'></Select>
      </div>
    </React.Fragment>)
}
