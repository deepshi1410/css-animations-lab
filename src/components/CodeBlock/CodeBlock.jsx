import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ code, language = 'css', className = '' }) => {
  return (
    <div className={`relative max-h-[70vh] overflow-auto rounded-lg ${className}`}>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className="rounded-lg text-sm p-6 shadow-inner"
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          background: '#1a1a1a',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;