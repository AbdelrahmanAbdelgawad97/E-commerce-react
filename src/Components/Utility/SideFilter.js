import React from 'react'
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const SideFilter = () => {
    return (
        <div>
            <div className="mt-3">
                <Row>
                    <div className="d-flex flex-column mt-2">
                        <div className="">Category</div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 "> All</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 "> Glases</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 "> Clothes</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 "> Computer-Hardware</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 "> Home Appliance</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column mt-2">
                        <div className=" mt-3">Brand</div>
                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 ">All</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 ">Dell</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 ">HP</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 ">LG</div>
                        </div>

                        <div className="d-flex mt-3">
                            <input type="checkbox" value="0" />
                            <div className="filter-sub me-2 ">Canon</div>
                        </div>
                    </div>

                    <div className="my-3">Price</div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">From:</p>
                        <input
                            className="m-2 text-center"
                            type="number"
                            style={{ width: "50px", height: "25px" }}
                        />
                    </div>
                    <div className="d-flex">
                        <p className="filter-sub my-2">To:</p>
                        <input
                            className="m-2 text-center"
                            type="number"
                            style={{ width: "50px", height: "25px" }}
                        />
                    </div>
                </Row >
            </div >
        </div>
    )
}

export default SideFilter
