import React, { useState } from 'react';
import './ContactPage.css';
import Toaster from '../../components/Toaster/Toaster';

function ContactPage() {
    const [showToaster, setShowToaster] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        setShowToaster(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setShowToaster(false), 3000); // hide toaster after 3 seconds


    };

    return (
        <div className="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {showToaster && <Toaster message="Form submitted successfully!" />}
        </div>
    );
}

export default ContactPage;
