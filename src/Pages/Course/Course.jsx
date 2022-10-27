import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css';

const Course = ({course}) => {
    console.log(course);
    const {_id,name,title,img,details} = course;
    return (
        <div >
            <Card className="text-center mb-5">
            <Card.Header className="cart-part">
                <h3>{name}</h3>
                <FaFilePdf className="icon"></FaFilePdf>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-3'>{title}</Card.Title>
                <Card.Text>
                <img className="w-50 mb-3" src={img} alt="" />
                <p className="details">
                    {
                        details.length > 200 ?
                        <p> {details.slice(0,200) + '...'}  <Link>read more</Link></p>
                        :
                        <p>{details}</p>
                    }
                </p>
                </Card.Text>
                <Button variant="primary" className='fs-5'>Get Premium Access</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Course;