import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';

SyntaxHighlighter.registerLanguage('css', css);

const CodeBlock = ({ code, language = 'css', className = '' }) => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      })
      .catch(() => {
        setCopyStatus('Failed to Copy');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      });
  };

  return (
    <div
      className={`relative max-h-[70vh] overflow-auto rounded-lg shadow-md border border-gray-700 ${className}`}
      style={{
        backgroundColor: '#1e1e2f',
        fontFamily: 'Fira Code, monospace',
      }}
    >
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md hover:bg-gray-700 focus:ring focus:ring-indigo-500 transition-all"
        title="Copy Code"
      >
        {copyStatus}
      </button>

      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers={true}
        lineNumberStyle={{
          color: '#757575',
          fontSize: '0.85rem',
        }}
        customStyle={{
          margin: 0,
          background: 'transparent',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '0.9rem',
        }}
        wrapLines={true}
        lineProps={(lineNumber) => ({
          style: {
            display: 'block',
            padding: '0 8px',
            borderLeft: '3px solid transparent',
          },
          className: lineNumber % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-800/50',
        })}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
