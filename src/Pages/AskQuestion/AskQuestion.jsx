import React from 'react';
import { Accordion } from 'react-bootstrap';

const AskQuestion = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>Ques-01: What this site about?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>PL-Education is E-learning platform.Where you can learn essential topics about web-development such as Javascript,Html,Css,React etc whit an affortable price</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Ques-02: How many videos are there?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>Well each course have 450+ videos, 15 assignments, weekly zoom conference, 24/7 support session, qualities videos etc.</p>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Ques-03: Why PL-Education?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>We are in this particular stage since 2019.We have came a long way.Our support session is top notch.Even if you complete course on time and do good then have a special team they will help you to find your job.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>Ques-04: Why learn Web-Development?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>Now-a-days web-development is a really good skill to have.A experienced web developer earns so much.</p>
                    </Accordion.Body>
                </Accordion.Item>

             </Accordion>
        </div>
    );
};

export default AskQuestion;