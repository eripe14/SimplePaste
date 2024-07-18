import React, {useState} from 'react';
import './style/App.css';

function PasteForm() {
    const [content, setContent] = useState('');

    const loginData = {
        username: 'admin',
        password: 'KarDro123!'
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(loginData.username + ":" + loginData.password)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/submit', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ content }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const uniqueId = data.uniqueId;

            window.location.href = `/response/${uniqueId}`;
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="paste-form-box">
                <div className="paste-form-dots">
                    <div className="paste-dot red"></div>
                    <div className="paste-dot yellow"></div>
                    <div className="paste-dot green"></div>
                </div>
                <div className="paste-form-group">
                    <textarea
                        className="paste-form-control"
                        value={content}
                        rows={20}
                        placeholder="Enter your content here..."
                        required={true}
                        onChange={(event) => setContent(event.target.value)}
                    />
                    <button className="paste-form-control-button" type="submit">Share code</button>
                </div>
            </div>
        </form>
    );
}

export default PasteForm;