import React, { useState, lazy } from 'react';
import axios from 'axios';
import Toaster from '../Toaster/Toaster';
import Interests from '../Interests/Interests';
import Loader from '../Loader/Loader';
import Recommendations from '../Recommendations/Recommendations';

import './GiftForm.css';

function GiftForm() {
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState('1');
    const [interests, setInterests] = useState([]);
    const [newInterest, setNewInterest] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleNewInterestChange = (e) => {
        setNewInterest(e.target.value);
    };

    const handleInterestRemove = (index) => {
        setInterests(interests.filter((_, i) => i !== index));
    };


    const handleNewInterestAdd = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // Prevent the event from triggering the form submit
            if (newInterest) {
                setInterests([...interests, newInterest]);
                setNewInterest('');
            }
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);


        const chatGptKey = process.env.REACT_APP_OPENAI_API_KEY;
        // const chatGptKey = ""

        try {
            const client = axios.create({
                headers: {
                    Authorization: "Bearer " + chatGptKey,
                },
            });

            const params = {
                prompt: `Generate gift recommendations for a ${age} year old ${gender} who is interested in ${interests.join(', ')}`,
                model: "text-davinci-003",
                max_tokens: 80,
                temperature: 0,
            };

            const result = await client.post("https://api.openai.com/v1/completions", params);


            const outputResult = result.data.choices[0].text.trim();
            const formattedResult = outputResult.substring(outputResult.indexOf('1.'));
            setRecommendations(formattedResult.split('\n'));

            // setRecommendations(outputResult.split('\n'));
            setLoading(false);
            setMessage({ type: 'success', text: 'Recommendations fetched successfully.' });
        } catch (error) {
            setLoading(false);
            setRecommendations([]);
            setMessage({ type: 'error', text: 'An error occurred while fetching recommendations. Please try again.' });
        }
    };

    return (
        <div className="GiftForm-wrapper">
            <div className="GiftForm">
                <h1 className="GiftForm-title">Gift Recommendation App</h1>
                <form className="GiftForm-form" onSubmit={handleSubmit}>
                    <select name="gender" value={gender} onChange={handleGenderChange} className="GiftForm-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select name="age" value={age} onChange={handleAgeChange} className="GiftForm-select">
                        {[...Array(100)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <Interests interests={interests} onRemove={handleInterestRemove} />
                    <input name="newInterest" value={newInterest} onChange={handleNewInterestChange} onKeyPress={handleNewInterestAdd} placeholder="Add interest" className="GiftForm-input" />

                    <button className="GiftForm-button" type="submit">
                        Get Recommendations
                    </button>
                </form>
            </div>

            {!loading ? (
                <>
                    <Toaster message={message} />
                    <Recommendations recommendations={recommendations} />

                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default GiftForm;
