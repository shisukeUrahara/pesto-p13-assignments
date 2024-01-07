import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender, setAge, addInterest, removeInterest, fetchRecommendations, clearRecommendations, setMessage } from '../../store/reducers';
import Interests from '../Interests/Interests';
import Recommendations from '../Recommendations/Recommendations';
import Loader from '../Loader/Loader';
import Toaster from '../Toaster/Toaster'
import './GiftForm.css';

function GiftForm() {
    const dispatch = useDispatch();
    const { gender, age, interests, recommendations, status, message } = useSelector((state) => state.gift);
    const [newInterest, setNewInterest] = useState('');

    const handleGenderChange = (e) => {
        dispatch(setGender(e.target.value));
    };

    const handleAgeChange = (e) => {
        dispatch(setAge(e.target.value));
    };

    const handleNewInterestChange = (e) => {
        setNewInterest(e.target.value);
    };

    const handleInterestRemove = (index) => {
        dispatch(removeInterest(index));
    };

    const handleNewInterestAdd = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (newInterest) {
                dispatch(addInterest(newInterest));
                setNewInterest('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearRecommendations());
        dispatch(fetchRecommendations({ age, gender, interests }))
            .unwrap()
            .then(() => {
                dispatch(setMessage({ type: 'success', text: 'Recommendations fetched successfully.' }));
            })
            .catch(() => {
                dispatch(setMessage({ type: 'error', text: 'An error occurred while fetching recommendations. Please try again.' }));
            });
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

            {status === 'loading' ? (
                <Loader />
            ) : (
                <>
                    <Toaster message={message} />
                    <Recommendations recommendations={recommendations} />
                </>
            )}
        </div>
    );
}

export default GiftForm;
