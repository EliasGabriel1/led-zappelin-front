import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function Chat() {
  const [message, setMessage] = useState('');
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit('new message', message);
    setMessage('');
  }

  function handleMessage(data) {
    dispatch({ type: 'ADD_MESSAGE', payload: data });
  }

  socket.on('new message', handleMessage);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
