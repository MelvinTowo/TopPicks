import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logreg.css';


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()
        
       
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/Dashboard')
        } catch {
            setError('Please double check your username or password')
        }
        setLoading(false)
    }
  return (
    <div className="page">
    <Container className="container" 
    style={{minHeight: "100vh"}} >
        <div className="w-100" style={{maxWidth: "400px"}}>
            <Card className="formCard">
                <Card.Body>
                    <h2 className = "text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className=" w-100" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="already">
                Need an account? <Link to="/Signup">Signup</Link>
            </div>
        </div>
    </Container>
    </div>
  )
}


// H2 className "text-center mb-4"
// This goes in button disabled={loading} 
// Button className "w-100"
// <Need ans account div className "w-100 text-center mt-2"