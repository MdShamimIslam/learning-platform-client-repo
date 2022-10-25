import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
             <Accordion defaultActiveKey="0">
                
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>Ques-01: What is Cors?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Ques-02: Why are you using Firebase? What other options do you have to implement authentication?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                        <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>Ques-03: How does the private route work?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Ques-04: What is Node? How does it work?</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </Accordion.Body>
                </Accordion.Item>

             </Accordion>
        </div>
    );
};

export default Blog;