import axios from 'axios';
import PizzaStyles from './Pizza.module.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';

export default function Pizza() {

    useEffect(() => {
        getRecipes('pizza')
    }, [])

    let [recipes, setRecipes] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [fruits, setFruits] = useState([
        {
            'name': 'tomato',
            'type': 'vegtable'
        },

        {
            'name': 'apple',
            'type': 'fruit'
        },

    ]);
    const getRecipes = async (searchTerm) => {
        setRecipes(await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}}`)
            .then((response) => { return response.data.data.recipes })
            .catch((error) => console.error(error)).finally(console.log('Request Complete')));
        setIsLoading(false);
    }

    return (
        <>
            <ul>
                {

                    fruits.map((fruit) => {
                        return <div key={nanoid()}>
                            <li>
                                {`name: ${fruit.name}`}
                            </li>
                            <li>
                                {`name: ${fruit.type}`}
                            </li>
                        </div>
                    })

                }
            </ul>
            <div className="vh-100 w-100 overflow-auto">
                {isLoading != true ? <div className={`d-flex flex-wrap ${PizzaStyles.cardContainer}`}>
                    {recipes.map((recipe) => {
                        return <RecipeContainer recipe={recipe} />
                    })}
                </div> : <div className={`d-flex justify-content-center align-items-center vh-100 ${PizzaStyles.loader}`}><Loader /></div>}
            </div>
        </>
    );
}

const RecipeContainer = ({ recipe }) => {
    return (
        <>
            <div key={recipe.id} className={`${PizzaStyles.card} mt-5`}>
                <div className="img-container">
                    <img className={`${PizzaStyles.image}`} src={recipe.image_url} alt="Card image cap" />
                </div>
                <h4 className="card-title text-center">{recipe.title}</h4>
                <p className="card-text text-center">{recipe.publisher}</p>
            </div>
        </>
    )
}
