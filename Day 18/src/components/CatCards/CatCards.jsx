import { useState } from 'react';
import catCardsStyles from './CatCards.module.css';
export default function CatCards() {

    let [catsDetails, setCatsDetails] = useState([
        {
            "petID": 1,
            "petName": "Zuma",
            "breed": "Abyssinian",
            "country": "Ethiopia",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Ticked",
            "isAdopted": false
        },
        {
            "petID": 2,
            "petName": "Apollo",
            "breed": "Aegean",
            "country": "Greece",
            "origin": "Natural/Standard",
            "coat": "Semi-long",
            "pattern": "Bi- or tri-colored",
            "isAdopted": false
        },
        {
            "petID": 3,
            "petName": "Swirl",
            "breed": "American Curl",
            "country": "United States",
            "origin": "Mutation",
            "coat": "Short/Long",
            "pattern": "All",
            "isAdopted": true
        },
        {
            "petID": 4,
            "petName": "Ranger",
            "breed": "American Bobtail",
            "country": "United States",
            "origin": "Mutation",
            "coat": "Short/Long",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 5,
            "petName": "Buster",
            "breed": "American Shorthair",
            "country": "United States",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "All but colorpoint",
            "isAdopted": false
        },
        {
            "petID": 6,
            "petName": "Bristle",
            "breed": "American Wirehair",
            "country": "United States",
            "origin": "Mutation",
            "coat": "Rex",
            "pattern": "All but colorpoint",
            "isAdopted": true
        },
        {
            "petID": 7,
            "petName": "Sahara",
            "breed": "Arabian Mau",
            "country": "Arabian Peninsula",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "",
            "isAdopted": false
        },
        {
            "petID": 8,
            "petName": "Boomer",
            "breed": "Australian Mist",
            "country": "Australia",
            "origin": "Crossbreed",
            "coat": "Short",
            "pattern": "Spotted and Classic tabby",
            "isAdopted": false
        },
        {
            "petID": 9,
            "petName": "Sterling",
            "breed": "Asian",
            "country": "United Kingdom",
            "origin": "",
            "coat": "Short",
            "pattern": "Evenly solid",
            "isAdopted": false
        },
        {
            "petID": 10,
            "petName": "Silky",
            "breed": "Asian Semi-longhair",
            "country": "United Kingdom",
            "origin": "Crossbreed",
            "coat": "Semi-long",
            "pattern": "Solid",
            "isAdopted": true
        },
        {
            "petID": 11,
            "petName": "Lotus",
            "breed": "Balinese",
            "country": "United States",
            "origin": "Crossbreed",
            "coat": "Long",
            "pattern": "Colorpoint",
            "isAdopted": false
        },
        {
            "petID": 12,
            "petName": "Pippin",
            "breed": "Bambino",
            "country": "United States",
            "origin": "Crossbreed",
            "coat": "Hairless/Furry down",
            "pattern": "",
            "isAdopted": false
        },
        {
            "petID": 13,
            "petName": "Hunter",
            "breed": "Bengal",
            "country": "United States",
            "origin": "Hybrid",
            "coat": "Short",
            "pattern": "Spotted/Marbled",
            "isAdopted": false
        },
        {
            "petID": 14,
            "petName": "Mystic",
            "breed": "Birman",
            "country": "France",
            "origin": "Natural",
            "coat": "Semi Long",
            "pattern": "Colorpoint",
            "isAdopted": true
        },
        {
            "petID": 15,
            "petName": "Bagheera",
            "breed": "Bombay",
            "country": "United States",
            "origin": "Crossbred",
            "coat": "Short",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 16,
            "petName": "Rio",
            "breed": "Brazilian Shorthair",
            "country": "Brazil",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 17,
            "petName": "Winston",
            "breed": "British Semi-longhair",
            "country": "United Kingdom",
            "origin": "",
            "coat": "Medium",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 18,
            "petName": "Barnaby",
            "breed": "British Shorthair",
            "country": "United Kingdom",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "All",
            "isAdopted": true
        },
        {
            "petID": 19,
            "petName": "Duchess",
            "breed": "British Longhair",
            "country": "United Kingdom",
            "origin": "",
            "coat": "Long",
            "pattern": "",
            "isAdopted": false
        },
        {
            "petID": 20,
            "petName": "Mango",
            "breed": "Burmese",
            "country": "Burma and Thailand",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 21,
            "petName": "Pearl",
            "breed": "Burmilla",
            "country": "United Kingdom",
            "origin": "Crossbreed",
            "coat": "Short/Long",
            "pattern": "",
            "isAdopted": false
        },
        {
            "petID": 22,
            "petName": "Pounce",
            "breed": "California Spangled",
            "country": "United States",
            "origin": "Crossbreed",
            "coat": "Short",
            "pattern": "Spotted",
            "isAdopted": true
        },
        {
            "petID": 23,
            "petName": "Cocoa",
            "breed": "Chantilly-Tiffany",
            "country": "United States",
            "origin": "",
            "coat": "",
            "pattern": "",
            "isAdopted": false
        },
        {
            "petID": 24,
            "petName": "Gaston",
            "breed": "Chartreux",
            "country": "France",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 25,
            "petName": "Titan",
            "breed": "Chausie",
            "country": "France",
            "origin": "Hybrid",
            "coat": "Short",
            "pattern": "Ticked",
            "isAdopted": true
        }
    ]);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className={`text-center text-white p-2 ${catCardsStyles.heading}`}>Cats</h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 p-3'>
                {
                    catsDetails.map((cat) => {
                        return <div key={cat.petID} className={`g-dark text-white w-25 h-25 position-relative rounded-4 ${catCardsStyles.petCard}`}>
                            {cat.isAdopted == true ? <span className="bg-danger rounded-start-pill p-2 bordered-3 position-absolute top-0 end-0">Adopted</span> : <span className="bg-success rounded-start-pill p-2 position-absolute top-0 end-0">Available</span>}
                            <div className="card-body d-flex flex-column gap-2 p-4">
                                <h3 className="card-title">Name: {cat.petName}</h3>
                                <p className="card-text m-0">Breed: {cat.breed}</p>
                                <p className="card-text m-0 fw-bold">Country: {cat.country}</p>
                                <p className="card-text m-0 fw-bold">{origin.length > 0 ? `Origin: ${cat.origin}` : 'Origin: Unkown'}</p>

                                <div className="d-flex justify-content-evenly m-2">
                                    <button className={`btn btn-dark border border-1  text-white w-100 ${catCardsStyles.bookbtn}`}>Book a vist</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
}
