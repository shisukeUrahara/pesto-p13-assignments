'use client';

import { useContext, useState } from 'react';
import { ShortenUrlContext } from '../../context/UrlShortenerContext';
import styles from './ShortenForm.module.css';

const ShortenForm = ({ shortenUrl }) => {
    const [url, setUrl] = useState('');
    const { setShortenedUrls, shortenedUrls, setError } = useContext(ShortenUrlContext);

    // const { shortenUrl } = useContext(ShortenUrlContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (url) {
            const response = await shortenUrl(url);
            if (!response.error) {
                setShortenedUrls([...shortenedUrls, response.shorturl]);
                setUrl('')
            }
            else {
                setError(response.error)

            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.shortenForm}>
            <input
                type="text"
                placeholder="Enter URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button type="submit">Shorten</button>
        </form>
    );
};

export default ShortenForm;
