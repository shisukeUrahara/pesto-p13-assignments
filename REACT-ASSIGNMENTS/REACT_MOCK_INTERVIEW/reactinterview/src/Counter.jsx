import React, { useState, useEffect } from "react";
import useFetch from "./useFetch"; // Assuming useFetch is in the same directory

function RecursiveObjectDisplay({ obj }) {
    return (
        <ul>
            {Object.entries(obj).map(([key, value]) => (
                <li key={key}>
                    {key}: {typeof value === 'object' && value !== null ? <RecursiveObjectDisplay obj={value} /> : value.toString()}
                </li>
            ))}
        </ul>
    );
}

function Counter() {
    const [count, setCount] = useState(0); // Start count from 0
    const [triggerFetch, setTriggerFetch] = useState(Date.now());

    // Adjusted useFetch to depend on triggerFetch
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users/', [triggerFetch]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => {
                const nextCount = (prevCount % 10) + 1;
                if (nextCount === 10) {
                    // Toggle triggerFetch to true/false to re-trigger the fetch
                    console.log("**@ toggling fetch")
                    setTriggerFetch(Date.now());
                }
                return nextCount;
            });
        }, 1000); // Increment count every second

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Counter: {count}</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>Error: {error}</p>}
            {!isLoading && !error && data && (
                <div>
                    <h2>Users</h2>
                    {data.map(user => (
                        <div key={user.id}>
                            <RecursiveObjectDisplay obj={user} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Counter;
