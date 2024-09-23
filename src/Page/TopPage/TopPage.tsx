import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResponseMessage('メールが送信されました。');
      } else {
        setResponseMessage('メールの送信に失敗しました。');
      }
    } catch (error) {
      setResponseMessage('エラーが発生しました。');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">送信</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default EmailForm;
