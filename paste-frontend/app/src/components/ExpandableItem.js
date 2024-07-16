import React, {useEffect, useRef, useState} from 'react';

function ExpandableItem({ paste }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState('0px');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        }
    }, [paste]);

    const contentStyle = {
        maxHeight: isExpanded ? contentHeight : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
        backgroundColor: '#333',
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{
            backgroundColor: '#2d2d2d',
            color: '#ccc',
            borderRadius: '10px',
            marginBottom: '10px',
            overflow: 'hidden'
        }}>
            <div
                onClick={toggleExpand}
                style={{
                    padding: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <span>ID: {paste.id}</span>
                <span style={{ transition: 'transform 0.3s ease-in-out', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
            </div>
            <div style={contentStyle}>
                <div ref={contentRef} style={{ padding: '10px' }}>
                    <p>Unikalne ID: {paste.uniqueId}</p>
                    <p>Data utworzenia: {new Date(paste.createdAt).toLocaleString()}</p>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {paste.content}
          </pre>
                </div>
            </div>
        </div>
    );
}

export default ExpandableItem;