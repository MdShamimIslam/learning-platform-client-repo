import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaRegFilePdf } from 'react-icons/fa';
import './SingleCourse.css';
import Pdf from "react-to-pdf";
 
const ref = React.createRef();
const SingleCourse = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const {category_id,title,details,img,name} = singleCourse;
  
    return (
        <Card  ref={ref}>
            <Card.Header className='file'>
                <h3>{name}</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) =>
                    <button className='btn text-black bg-transparent font-semibold text-2xl border-white-600 rounded border-0'
                    onClick={toPdf}><FaRegFilePdf></FaRegFilePdf></button>}
                </Pdf>
            </Card.Header>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to='/access'>
                    
                </Link>
            </Card.Body>
        </Card>
    );
};

export default SingleCourse;