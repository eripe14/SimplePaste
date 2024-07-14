import React, {useState} from 'react';

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
            // Przekierowanie do strony odpowiedzi
            window.location.href = `/response/${uniqueId}`;
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <textarea
              value={content}
              rows={25}
              placeholder="Enter your content here..."
              required={true}
              onChange={(e) => setContent(e.target.value)}
          />
            <button type="submit">Potwierdź</button>
        </form>
    );
}

export default PasteForm;