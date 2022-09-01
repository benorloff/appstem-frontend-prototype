import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

import { Container, Card, Image } from 'semantic-ui-react';

export default function ImageList({ searchResults }) {

    return(
        <Container>
            <h1>Search Results</h1>
            <Card.Group itemsPerRow={4} >
                {searchResults.map((result) => {
                    return (
                        <Card key={result.id} >
                            <Zoom>
                                <Image src={result.urls.regular}></Image>
                            </Zoom>
                        </Card>
                    )
                })}
            </Card.Group>
        </Container>
    )
}