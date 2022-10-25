import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const [error,setError] = useState('');

    const handleSubmit2 = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/login')
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
    }

    return (
        <Form onSubmit={handleSubmit2} className="form-info w-75">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Your Full Name</Form.Label>
                <Form.Control  name="name" type="text" placeholder="Enter name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Your Photo URL</Form.Label>
                <Form.Control name="photo" type="text" placeholder="Enter photo URL" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Email address</Form.Label>
                <Form.Control  name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fs-5'>Password</Form.Label>
                <Form.Control  name="password" type="password" placeholder="Password" required/>
            </Form.Group>

            <Button variant="primary" type="submit" className='fs-5'>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;