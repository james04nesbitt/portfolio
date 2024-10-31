import React, { useState } from 'react';
import Draggable from 'react-draggable';
import PDFViewer from 'pdf-viewer-reactjs';

const ResumeWindow = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => setIsMaximized(!isMaximized);

  const windowStyle = isMaximized
    ? { width: '100vw', height: '100vh', top: 0, left: 0 }
    : { width: '800px', height: '600px' };

  return (
    <Draggable handle=".handle" disabled={isMaximized}>
      <div
        style={{
          position: 'fixed',
          ...windowStyle,
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          className="handle"
          style={{
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={onClose} style={buttonStyle('#ff5f56')} title="Close" />
            <button style={buttonStyle('#ffbd2e')} title="Minimize" />
            <button onClick={handleMaximize} style={buttonStyle('#27c93f')} title={isMaximized ? "Restore" : "Maximize"} />
          </div>
          <span style={{ fontWeight: 'bold' }}>Resume</span>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'auto' }}>
          <PDFViewer
            document={{
              url: `${process.env.PUBLIC_URL}/james_resume.pdf`,
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
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
