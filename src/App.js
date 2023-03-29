import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let newColor = false;
  let bg = "#f1f1f1";

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  }

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });
  });
  return (
    <div>
      <ul>
        {messages.map((msg, index) => {
          const previousMsg = messages[index !== 0 ? index - 1 : 0][1];
          const isSameSender =  previousMsg === msg[1]? 1:0;
          if(!isSameSender){
            if (newColor) {
              bg = '#f1f1f1';
            } else {
              bg = '#ff69b4';
            }
            newColor = !newColor;
          }
          return (
            <li style={{ backgroundColor: bg }} key={index}>
              {msg[0]}
            </li>
          );
        })}


      </ul>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ChatApp;
