import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import ProductsStyles from './Products.module.css';

export default function Products() {
    let { products, getProducts } = useContext(AppContext);

    useEffect(() => {
        getProducts();
    }, [])

    console.log(products);
    return (
        <>
            <div>
                <div className="card-group d-flex flex-wrap mt-5 pt-3 gap-3">
                    {products.map((product) => {
                        return <div className={`${ProductsStyles.cardStyle}`}>
                            <div className={`${ProductsStyles.imgContainer}`}>
                                <img src={product.image} className={`${ProductsStyles.imageStyle}`} alt={product.title} />
                            </div>
                            <div class="card-body d-flex flex-column gap-3">
                                <h4 className="card-title">{product.title}</h4>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}
