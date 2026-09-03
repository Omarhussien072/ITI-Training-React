import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Home() {
    let {username} = useContext(AppContext);
    return (
        <>
        <div className="vh-100">
            <h1 style={{marginTop:'5rem'}}>{`username: ${username}`}</h1>
        </div>
        </>
    );
}
