import React from 'react';
import beers from "./assets/beers.png"
import newBeer from "./assets/new-beer.png"
import randomBeer from "./assets/random-beer.png"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        < div className="m-0">
            <Link to="/beers" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div>
                    <img className='img-fluid w-100' src={beers} alt="beers" />
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu cursus libero, ut cursus lacus. Pellentesque nisi metus, mollis at interdum eu, dignissim vel ex. ➥</p>

                </div>
            </Link>
            <Link to="/randombeer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div>
                    <img className='img-fluid w-100' src={randomBeer} alt="random beer" />
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu cursus libero, ut cursus lacus. Pellentesque nisi metus, mollis at interdum eu, dignissim vel ex. ➥</p>
                </div>
            </Link>
            <Link to="/newbeer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div>
                    <img className='img-fluid w-100' src={newBeer} alt="new beer" />
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu cursus libero, ut cursus lacus. Pellentesque nisi metus, mollis at interdum eu, dignissim vel ex. ➥</p>
                </div>
            </Link>

        </div >
    )
}
