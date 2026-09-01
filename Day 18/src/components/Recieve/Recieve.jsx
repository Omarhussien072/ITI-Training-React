export default function Recieve({productDetails , deleteProduct}) {
    let {id, productName, price, description , onSale} = productDetails;
    return (
        <>
                <div className="card bg-dark text-white w-25">
                    <div className="card-body position-relative">
                        <h2 className="card-title mt-4">Name: {productName}</h2>
                        <h4 className="card-title">Price: {price}</h4>
                        <p className="card-text fw-bold">Description: {description}</p>
                        {onSale == true ? <span className="bg-danger p-2 position-absolute top-0 left-0">on-sale</span> : ''}
                        
                        <div className="d-flex justify-content-evenly m-2">
                            <button className="btn btn-danger text-white" onClick={() => {
                                deleteProduct(id);
                            }}>Delete</button>
                            <button className="btn btn-info text-white">Update</button>
                        </div>
                    </div>
                </div>
        </>
    );
}
