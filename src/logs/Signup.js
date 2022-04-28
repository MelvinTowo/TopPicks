import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './logreg.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError ('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/Dashboard')
        } catch {
            setError('Ensure your password is more than 6 charecters long')
        }
        setLoading(false)

        
    }
  return (
    <div className="page">
        <Container className="container" 
    style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
            <Card className="formCard">
                <Card.Body>
                    <h2 className = "text-center mb-4">Sign up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="already">
            Already have an account? <Link to="/Login">Log in</Link> 
            </div>
        </div>
        </Container>
    </div>
  )
}
// h2 className = "text-center mb-4"
// Button disabled={loading} className="w-100"
// div className="w-100 text-center mt-2"