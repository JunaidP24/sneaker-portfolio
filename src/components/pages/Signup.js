import React, {useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Button, FormLabel, Alert} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { auth1 } from '../../contexts/AuthContext'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef =  useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(auth1,emailRef.current.value,passwordRef.current.value)
            navigate('/', {replace: true})
        } catch(e) {
            console.log(e)
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return(
        <Container className='d-flex align-items-center
        justify-content-center'
        style = {{minHeight:"100vh"}}>
        <div className= "w-100" style={{maxWidth:'400px'}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id = 'email' className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type = 'email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id = 'password' className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = 'password' ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id = 'password-conf' className='mb-3'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type = 'password' ref={passwordConfRef} required />
                        </Form.Group>
                        <Button disabled={loading} className = 'w-100 mb-3' type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to = '/login'>Log In</Link>
            </div>
        </div>
        </Container>
    )
};

export default SignUp