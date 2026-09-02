import { useState } from 'react';
import dogCardsStyles from './DogCards.module.css';
export default function CatCards() {
    let [dogsDetails, setDogsDetails] = useState([
        {
            "petID": 1,
            "petName": "Cooper",
            "breed": "Golden Retriever",
            "country": "Scotland",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 2,
            "petName": "Luna",
            "breed": "German Shepherd",
            "country": "Germany",
            "origin": "Natural/Standard",
            "coat": "Short/Medium",
            "pattern": "All",
            "isAdopted": true
        },
        {
            "petID": 3,
            "petName": "Doodle",
            "breed": "Labradoodle",
            "country": "Australia",
            "origin": "Crossbreed",
            "coat": "Curly",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 4,
            "petName": "Charlie",
            "breed": "Cavalier King Charles Spaniel",
            "country": "United Kingdom",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Bi-colored",
            "isAdopted": false
        },
        {
            "petID": 5,
            "petName": "Bailey",
            "breed": "Beagle",
            "country": "United Kingdom",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Tri-colored",
            "isAdopted": true
        },
        {
            "petID": 6,
            "petName": "Stella",
            "breed": "Miniature Poodle",
            "country": "Germany/France",
            "origin": "Natural/Standard",
            "coat": "Curly",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 7,
            "petName": "Puggsy",
            "breed": "Pug",
            "country": "China",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 8,
            "petName": "Rocky",
            "breed": "Boxer",
            "country": "Germany",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Brindle/Solid",
            "isAdopted": true
        },
        {
            "petID": 9,
            "petName": "Coco",
            "breed": "French Bulldog",
            "country": "France",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Brindle/Solid",
            "isAdopted": false
        },
        {
            "petID": 10,
            "petName": "Aurora",
            "breed": "Siberian Husky",
            "country": "Russia",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 11,
            "petName": "Dash",
            "breed": "Miniature Dachshund",
            "country": "Germany",
            "origin": "Mutation",
            "coat": "Short/Long",
            "pattern": "All",
            "isAdopted": true
        },
        {
            "petID": 12,
            "petName": "Merle",
            "breed": "Australian Shepherd",
            "country": "United States",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Merle",
            "isAdopted": false
        },
        {
            "petID": 13,
            "petName": "Bolt",
            "breed": "Border Collie",
            "country": "Scotland/England",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Bi-colored",
            "isAdopted": false
        },
        {
            "petID": 14,
            "petName": "Kiko",
            "breed": "Shiba Inu",
            "country": "Japan",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Solid",
            "isAdopted": true
        },
        {
            "petID": 15,
            "petName": "Comet",
            "breed": "Greyhound",
            "country": "Egypt/Middle East",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 16,
            "petName": "Tyson",
            "breed": "Staffordshire Bull Terrier (Pit Bull type)",
            "country": "United Kingdom",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "All",
            "isAdopted": false
        },
        {
            "petID": 17,
            "petName": "Gus",
            "breed": "Rottweiler",
            "country": "Germany",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Solid (with tan)",
            "isAdopted": true
        },
        {
            "petID": 18,
            "petName": "Lola",
            "breed": "Great Dane",
            "country": "Germany",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Harlequin",
            "isAdopted": false
        },
        {
            "petID": 19,
            "petName": "Fifi",
            "breed": "Papillon",
            "country": "France/Belgium",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Bi-colored",
            "isAdopted": false
        },
        {
            "petID": 20,
            "petName": "Buddy",
            "breed": "Boston Terrier",
            "country": "United States",
            "origin": "Crossbreed",
            "coat": "Short",
            "pattern": "Bi-colored",
            "isAdopted": true
        },
        {
            "petID": 21,
            "petName": "Misty",
            "breed": "Samoyed",
            "country": "Siberia/Russia",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Solid",
            "isAdopted": false
        },
        {
            "petID": 22,
            "petName": "Benny",
            "breed": "Bernese Mountain Dog",
            "country": "Switzerland",
            "origin": "Natural/Standard",
            "coat": "Long",
            "pattern": "Tri-colored",
            "isAdopted": false
        },
        {
            "petID": 23,
            "petName": "Pip",
            "breed": "Miniature Schnauzer",
            "country": "Germany",
            "origin": "Natural/Standard",
            "coat": "Wiry",
            "pattern": "All",
            "isAdopted": true
        },
        {
            "petID": 24,
            "petName": "Winston",
            "breed": "Bulldog",
            "country": "United Kingdom",
            "origin": "Natural/Standard",
            "coat": "Short",
            "pattern": "Solid/Brindle",
            "isAdopted": false
        },
        {
            "petID": 25,
            "petName": "Spot",
            "breed": "English Springer Spaniel",
            "country": "United Kingdom",
            "origin": "Natural/Standard",
            "coat": "Semi-long",
            "pattern": "Spotted",
            "isAdopted": true
        }
    ]);
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className={`text-center text-white p-2 ${dogCardsStyles.heading}`}>Dogs</h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 p-3'>
                {
                    dogsDetails.map((dog) => {
                        return <div key={dog.petID} className={`g-dark text-white w-25 h-25 position-relative rounded-4 ${dogCardsStyles.petCard}`}>
                            {dog.isAdopted == true ? <span className="bg-danger rounded-start-pill p-2 bordered-3 position-absolute top-0 end-0">Adopted</span> : <span className="bg-success rounded-start-pill p-2 position-absolute top-0 end-0">Available</span>}
                            <div className="card-body d-flex flex-column gap-2 p-4">
                                <h3 className="card-title">Name: {dog.petName}</h3>
                                <p className="card-text m-0">Breed: {dog.breed}</p>
                                <p className="card-text m-0 fw-bold">Country: {dog.country}</p>
                                <p className="card-text m-0 fw-bold">{origin.length > 0 ? `Origin: ${dog.origin}` : 'Origin: Unkown'}</p>

                                <div className="d-flex justify-content-evenly m-2">
                                    <button className={`btn btn-dark border border-1  text-white w-100 ${dogCardsStyles.bookbtn}`}>Book a vist</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
}
