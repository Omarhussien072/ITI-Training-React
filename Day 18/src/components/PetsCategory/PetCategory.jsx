import { Outlet } from 'react-router-dom';
import Pets from '../Pets/Pets';
import PetsCategoryStyles from './PetCategory.module.css';

export default function PetCategory() {
    return (
        <>
            <div>
                <h1 className={`text-center text-white p-2 ${PetsCategoryStyles.heading}`}>PetCategories</h1>
                <div className="container d-flex justify-content-center align-items-center flex-wrap gap-5 p-4 mt-4">
                    {
                        <Pets />
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
}
