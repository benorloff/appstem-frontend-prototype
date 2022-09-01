import React, { useState } from 'react';

import { Container, Card, Image, Modal, Button } from 'semantic-ui-react';

export default function ImageList({ searchResults }) {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    return(
        <Container>
            <h1>{searchResults.length ? 'Search Results' : 'Enter your search term above'}</h1>
            <Card.Group itemsPerRow={4} >
                {searchResults.map((result) => {
                    return (
                        <Card 
                            key={result.id} 
                            onClick={() => {
                                setModalData(result);
                                setOpen(true);
                            }}
                        >
                            <Image src={result.urls.small}></Image>
                        </Card>
                    )
                })}
            </Card.Group>
            {/* <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>Photo by <a href={modalData.user.links.html}>{modalData.user.name}</a></Modal.Header>
                <Modal.Content image>
                    <Image src={modalData.urls.regular} ></Image>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Actions>
            </Modal> */}
        </Container>
    )
}