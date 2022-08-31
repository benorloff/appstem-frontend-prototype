import React, { useState } from 'react';

import { Container, List, Button, Grid, Segment } from 'semantic-ui-react';

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import ImageList from "../../components/ImageList/ImageList";

export default function HomePage({ attemptSearch, searchResults }) {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (error) {
        return (
            <>
                <Header attemptSearch={attemptSearch} />
                <ErrorMessage error={error} />
            </>
        ) 
    }

    if (loading) {
        return (
            <>
                <Header attemptSearch={attemptSearch} />
                <Loading />
            </>
        ) 
    }

    return (
        <>
            <Header attemptSearch={attemptSearch} />
            <ImageList searchResults={searchResults} />
        </>
    )

}