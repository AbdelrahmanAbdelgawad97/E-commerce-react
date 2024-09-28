import React from 'react'
import { Link } from 'react-router-dom';

const Subtitle = ({title, btntitle, pathText}) => {
  return (
    <div className='d-flex justify-content-between pt-4 mb-3'>
        <div className='sub-title'> {title} </div>
        <Link to={`${pathText}`} style={{textDecoration: "none"}}>
          {btntitle ? (<div className='shopping-now'> {btntitle} </div>) : null}
        </Link>
        
    </div>
  )
}

export default Subtitle;
