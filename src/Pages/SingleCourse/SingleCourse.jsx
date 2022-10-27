import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePdf } from 'react-icons/fa';
import './SingleCourse.css';

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const {category_id,title,details,img,name} = singleCourse;
  
    return (
        <Card>
            <Card.Header className='file'>
                <h3>{name}</h3>
                <FaFilePdf className='fs-4'></FaFilePdf>
                </Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Get Premium Access</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default SingleCourse;