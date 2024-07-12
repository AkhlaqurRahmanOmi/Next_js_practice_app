import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'


const WelcomeEmail = ({ name }: { name: String }) => {
    return (
        <Html>
            <Preview> Welcome to the system</Preview>
            <Body style={body}>
                <Container>
                    <Text style={headding}>Hello {name}</Text>
                    <Link href='http://localhost:3000'>Home</Link>
                </Container>
            </Body>

        </Html>
    )
}

const body: CSSProperties = {
    background: '#fff',
}

const headding: CSSProperties = {
    fontSize: '42px',
}

export default WelcomeEmail