import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [error,setError] = useState('');
    const {signIn,loginProvider} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = ()=>{
        loginProvider(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithub = ()=>{
        loginProvider(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="form-info w-75">
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fs-5'>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>

            <div className='register-info'>
                <p>Create a New Account? <Link to="/register">Register Now</Link></p>
            </div>

            <Button variant="primary" type="submit" className='fs-5 mb-4'>
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        <Button variant="outline-dark" className='mb-3 fs-5 w-100' onClick={handleGoogle}><FaGoogle></FaGoogle> Login with Google</Button><br />
        <Button variant="outline-dark" className='fs-5 w-100' onClick={handleGithub}><FaGithub></FaGithub> Login with Github</Button>
        </div>
        
        
    );
};

export default Login;