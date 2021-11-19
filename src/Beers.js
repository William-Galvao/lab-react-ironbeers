import React from 'react';
import { Link } from 'react-router-dom';





export default function Beers(props) {
    return <>
        <div>
            <nav className="navbar navbar-light bg-primary">
                <Link className="navbar-brand mx-auto text-white" style={{ fontSize: "50px" }} to="/">⌂</Link>
            </nav>
        </div>
        <div className="row mt-3">
            <div className="col-3 text-center">
                <img className="img-fluid rounded" style={{ maxHeight: "50%" }} src="https://images.punkapi.com/v2/2.png" alt="beer" />
            </div>
            <div className="col-9" style={{ paddingTop: "20px" }}>
                <h2>Trashy Blonde</h2>
                <p style={{ color: "gray" }}>You Know You Shouldn't</p>
                <p style={{ fontSize: "12px" }}>Created by: Sam Mason</p>
            </div>
            <div>
            </div>

        </div>
    </>
}