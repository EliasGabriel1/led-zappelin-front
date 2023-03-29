import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function ChatApp() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let newColor = false;
  let bg = "#f1f1f1";
  let direction = "right";

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
      <ul style={{ listStyle: "none", maxWidth: "300px", padding: "5px 10px" }}>
        {messages.map((msg, index) => {
          const previousMsg = messages[index !== 0 ? index - 1 : 0][1];
          const isSameSender = previousMsg === msg[1] ? 1 : 0;
          if (!isSameSender) {
            if (newColor) {
              bg = '#f1f1f1';
              direction = "right";
            } else {
              bg = '#ff69b4';
              direction = "left";
            }
            newColor = !newColor;
          }

          return (
            <li style={{ backgroundColor: bg, listStyle: "none", maxWidth: "300px", padding: "5px 10px", textAlign: direction, margin: "10px 0" }} key={index}>
              {msg[0]}
            </li>
          );
        })}


      </ul>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", padding: "5px 10px", display: "flex", justifyContent: "end" }}>
        <input value={message} onChange={(event) => setMessage(event.target.value)} style={{border: "1px solid black", width: "100%", height: "30px", padding: "0px" }} />
        <button type="submit" style={{backgroundColor: "black", border: "none", cursor: "pointer", maxHeight: "32px" }}>
          <img style={{ cursor: "pointer", maxHeight: "32px" }} src='https://i.postimg.cc/0KStX5WC/icons8-enviar-32.png' border='0' alt='icons8-enviar-32' width={"100%"} />
        </button>
      </form>
    </div>
  );
}

export default ChatApp;
