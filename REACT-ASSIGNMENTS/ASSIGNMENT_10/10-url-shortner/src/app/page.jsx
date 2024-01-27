import ShortenForm from "@/Components/ShortenForm/ShortenForm";
import ShortenedUrlsList from "@/Components/ShortenedUrlsList/ShortenedUrlsList";
import { ShortenUrlProvider } from '../context/UrlShortenerContext';
import axios from "axios";

export default function Home() {

    const shortenUrl = async (originalUrl) => {
        'use server';
        const params = new URLSearchParams();
        params.append('url', originalUrl);


        const apiKey = process.env.SHORTEN_URL_API_KEY

        const res = await axios.post('https://urlbae.com/api/url/add', { url: originalUrl }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        })

        return res.data;
    };


    return (
        <div>
            <ShortenUrlProvider >
                <ShortenForm shortenUrl={shortenUrl} />
                <ShortenedUrlsList />
            </ShortenUrlProvider>
        </div>
    )
}