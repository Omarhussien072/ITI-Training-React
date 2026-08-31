export default function Hero({userName}) {
    console.log(userName);
    return (
        <>
            <h1 className="text-center text-primary">Hero</h1>
            <div>
                <div className="bg-primary img-container d-flex justify-content-center align-items-center p-3">
                <h2 className="text-center text-white">{userName}</h2>
                    <img src="../../public/cat.png" alt="cat" className="w-50"/>
                </div>
            </div>
        </>
    );
}
