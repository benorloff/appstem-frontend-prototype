import React from 'react';

import { Container, Card } from 'semantic-ui-react';

import ImageCard from '../../components/ImageCard/ImageCard';

export default function ImageList({ results }) {
    return(
        <Container>
            <h1>Image List</h1>
            <Card.Group itemsPerRow={4} >
                <Card color='red' image='/logo512.png' />
                <Card color='red' image='/logo512.png' />
                <Card color='red' image='/logo512.png' />
                <Card color='red' image='/logo512.png' />

            </Card.Group>
        </Container>
    )
}