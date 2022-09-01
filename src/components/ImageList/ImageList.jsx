import React, { useState } from 'react';
import { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

import { Container, Card, Image, Modal, Button } from 'semantic-ui-react';

export default function ImageList({ searchResults }) {

    return(
        <Container>
            <h1>{searchResults.length > 0 ? 'Search Results' : 'Enter your search term above'}</h1>
            <Card.Group itemsPerRow={4} >
                {searchResults.map((result) => {
                    return (
                        <Card 
                            key={result.id} 
                            // onClick={() => {
                            //     setModalData(result);
                            //     setOpen(true);
                            // }}
                        >
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