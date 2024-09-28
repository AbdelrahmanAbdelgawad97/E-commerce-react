import React from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from "../../images/sort.webp"
const SearchCountResult = ({title}) => {
    const handler =() => {

    }

    return (
        <div className='d-flex justify-content-between pt-3 px-2'>
            <div className='sub-title'>{title}</div>
            <div className='search-count-text d-flex'>
                <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={<p className="mx-1"> <img width="20px" height="20px" className='ms-1' src={sort} alt=''/>Sort By</p>}
                delay={300}
                align="CENTER"
                hover
                >
                <div className='card-filter'>
                    <div className='border-bottom card-filter-item'>Best Seller</div>
                    <div className='border-bottom card-filter-item'>Higher Rate</div>
                    <div className='border-bottom card-filter-item'>Price From Lower To Higher</div>
                    <div className='border-bottom card-filter-item'>Price From Higher To Lower</div>
                </div>
                </UnopDropdown>
            </div>    
        </div>
  )
}

export default SearchCountResult
