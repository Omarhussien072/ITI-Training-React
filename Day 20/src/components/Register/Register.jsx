import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register() {
    let [user, setUser] = useState(
        {
            "id": null,
            "userEmail": "",
            "userName": "",
            "userPassword": "",
        }
    );

    let [isLoading, setIsLoading] = useState(false);

    const [message,setMessage] = useState({
        text: '',
        type: '',
    });

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value, });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/users',{
            id: user.id || 0,
            username: user.userName,
            email: user.userEmail,
            password: user.userPassword,
        }).then(() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                toast.success('User Registered!', {icon: '✅', style:{borderRadius: '10px', background: '#333', color: '#fff',},});
            } ,3000);
            setTimeout(() => {Navigate('/pizza')}, 5000);
        }).catch((e) => {
            toast.success(`Failed to register: ${e}`, {icon: '❌', style:{borderRadius: '10px', background: '#333', color: '#fff',},});
            setIsLoading(false);
        }).finally(console.log('Request Sent Succefully'));

    }

    return (
        <>
            <div>
                <Toaster  position="top-right" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}} toasterId="default" toastOptions={{className: '', duration: 2000, removeDelay: 2000, style:{background: '#363636', color: '#fff',}, success:{duration:3000, iconTheme:{primary:'green', secondary:'black',},},}}/>
            </div>
            <div className="vh-100 d-flex justify-content center align-items-center">
                <div className=" bg-info-subtle mt-5 p-3 mx-auto w-25 text-center rounded ">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                        <input type="number" name='id' id='id' placeholder="Enter ID" onChange={handleChange} className="form-control text-center" required />
                        <input type="text" name='userName' id='userName' placeholder="Enter Username" onChange={handleChange} className="form-control text-center" required />
                        <input type="email" name='userEmail' id='userEmail' placeholder="Enter Email" onChange={handleChange} className="form-control text-center" required />
                        <input type="password" name='userPassword' id='userPassword' placeholder="Enter Password" onChange={handleChange} className="form-control text-center" required />
                        <button type="submit" className="btn btn-primary text-center" disabled={!isLoading? '' : 'disabled'}>{!isLoading? 'Register' : 'Registering'}</button>
                    </form>
                </div>
            </div>
        </>
    );
}
