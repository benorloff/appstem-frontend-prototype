import React, { useState } from 'react';

import { Container, List, Button, Grid, Segment } from 'semantic-ui-react';

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import ImageList from "../../components/ImageList/ImageList";

export default function HomePage() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (error) {
        return (
            <>
                <Header />
                <ErrorMessage error={error} />
            </>
        ) 
    }

    if (loading) {
        return (
            <>
                <Header />
                <Loading />
            </>
        ) 
    }

    return (
        <>
            <Header />
            <ImageList />
        </>
    )

}