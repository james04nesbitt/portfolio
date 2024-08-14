import React, { useState } from 'react';
import Draggable from 'react-draggable';

const ResumeWindow = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleMaximize = () => setIsMaximized(!isMaximized);

  if (!isOpen) return null;

  const windowStyle = isMaximized
    ? { width: '100vw', height: '100vh', top: 0, left: 0 }
    : { width: '800px', height: '600px' };

  return (
    <Draggable handle=".handle" disabled={isMaximized}>
      <div style={{
        position: 'fixed',
        ...windowStyle,
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}>
        <div className="handle" style={{
          padding: '10px',
          backgroundColor: '#f0f0f0',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={handleClose} style={buttonStyle('#ff5f56')} />
            <button style={buttonStyle('#ffbd2e')} />
            <button onClick={handleMaximize} style={buttonStyle('#27c93f')} />
          </div>
          <span style={{ marginLeft: '20px', fontWeight: 'bold' }}>Resume</span>
        </div>
        <iframe
          src={`${process.env.PUBLIC_URL}/james_resume.pdf#view=FitH`}
          width="100%"
          height="calc(100% - 41px)"
          style={{ border: 'none' }}
        />
      </div>
    </Draggable>
  );
};

const buttonStyle = (bgColor) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: bgColor,
  cursor: 'pointer',
});

export default ResumeWindow;