import React from 'react';
import './HomePage.css';
// import developerImage from './developer-profile.jpg'; // Replace with the path to your image

const developerImage = "https://cdn.midjourney.com/c7eb2412-0453-4537-a001-d5e1c3e9c129/0_1.webp"
function HomePage() {
    return (
        <div className="home">
            <div className="content">
                <div className="text-content">
                    <h1>John Doe</h1>
                    <p className="tagline">Full-Stack Blockchain Developer</p>
                    <p>With a passion for decentralized technology and over 4 years of experience, I specialize in creating robust web applications using Node.js and React. My expertise in smart contract development is backed by a solid understanding and application of Solidity, contributing to several significant projects in the blockchain space.</p>
                    <p>My journey has been marked by continuous learning and applying the latest advancements in blockchain technology to develop solutions that are secure, scalable, and optimized for performance.</p>
                </div>
                <div className="image-content">
                    <img src={developerImage} alt="John Doe" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
