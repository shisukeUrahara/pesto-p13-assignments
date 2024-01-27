'use client';
import { useContext } from 'react';
import { ShortenUrlContext } from '../../context/UrlShortenerContext';
import styles from './ShortenedUrlsList.module.css';

const ShortenedUrlsList = () => {
    const { shortenedUrls } = useContext(ShortenUrlContext);

    return (
        <div className={styles.urlListContainer}>
            {shortenedUrls.length === 0 ? (
                <p className={styles.emptyMessage}>Empty URL's list</p>
            ) : (
                <>
                    <p className={styles.emptyMessage}>Shortened URL's list</p>

                    <ul className={styles.urlList}>
                        {shortenedUrls.map((url, index) => (
                            <li key={index} className={styles.urlItem}>
                                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.urlLink}>
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>

            )}
        </div>
    );
};

export default ShortenedUrlsList;
