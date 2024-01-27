'use client';
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Creating the context
export const ShortenUrlContext = createContext();

export const ShortenUrlProvider = ({ children }) => {
    const [shortenedUrls, setShortenedUrls] = useState([]);
    const [error, setError] = useState('');

    return (
        <ShortenUrlContext.Provider value={{ shortenedUrls, error, setShortenedUrls, setError }}>
            {children}
        </ShortenUrlContext.Provider>
    );
};
