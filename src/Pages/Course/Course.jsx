import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({course}) => {
    console.log(course);
    const {_id,title,img,details} = course;
    return (
        <div >
            <Card className="text-center mb-5">
            <Card.Body>
                <Card.Title className='mb-3'>{title}</Card.Title>
                <Card.Text>
                <img className="w-50 mb-3" src={img} alt="" />
                <p className="details">
                    {
                        details.length > 200 ?
                        <p> {details.slice(0,200) + '...'}  <Link to={`/courses/${_id}`}>read more</Link></p>
                        :
                        <p>{details}</p>
                    }
                </p>
                <Link to={`/courses/${_id}`}>
                    <Button variant="primary" size="lg" active>
                     Details
                    </Button>{' '}
                </Link>
                </Card.Text>
                
            </Card.Body>
        </Card>
        </div>
    );
};

export default Course;