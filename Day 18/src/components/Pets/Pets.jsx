import PetsStyles from './Pets.module.css';
import dogsImg from '../../assets/dogs.png';
import catsImg from '../../assets/cats.png';
import { NavLink } from 'react-router-dom';

export default function Pets() {
    let images = [catsImg, dogsImg];
    return (
        <>
            <div className={`d-flex flex-wrap vh-100 gap-5 justify-content-center align-items-center`}>
                {images.map((img) => {
                    return <NavLink className={`${PetsStyles.cardStyle}`} to={img == catsImg ? 'cats' : 'dogs'}>
                        <div className={`d-flex justify-content-center align-items-center text-white ${PetsStyles.cardOverlay}`}>
                            <h2>{img == catsImg ? 'Cats' : 'Dogs'}</h2>
                        </div>
                        <img className={`${PetsStyles.image}`} src={img} alt={`${img == catsImg ? 'cat' : 'dog'}`} />
                    </NavLink>
                })}
            </div>
        </>
    );
}
