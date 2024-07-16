import React, {useEffect, useState} from 'react';
import ExpandableItem from './ExpandableItem';

export default function ExpandableItems() {
    const [pastes, setPastes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const loginData = {
            username: 'admin',
            password: 'KarDro123!'
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(loginData.username + ":" + loginData.password)
        };

        fetch("http://localhost:8081/api/pastes/", {
            method: 'GET',
            headers: headers
        })
            .then(async response => {
                if (!response.ok) {
                    const errorBody = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
                }
                return response.json();
            })
            .then(data => {
                setPastes(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Ładowanie...</div>;
    if (error) return <div>Błąd: {error}</div>;

    return (
        <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Lista wklejeń</h1>
            {Array.isArray(pastes) && pastes.length > 0 ? (
                pastes.map(paste => (
                    <ExpandableItem key={paste.id} paste={paste} />
                ))
            ) : (
                <p>Brak dostępnych wklejeń</p>
            )}
        </div>
    );
}