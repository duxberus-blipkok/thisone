import React, { useState } from 'react';

export const Terminal: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-[#1e1e1e] border-t border-vscode-border ${isExpanded ? 'h-64' : 'h-8'}`}>
      <div
        className="flex items-center justify-between px-3 h-8 text-xs cursor-pointer hover:bg-[#2a2a2a]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <span>{isExpanded ? '▼' : '▶'}</span>
          <span className="text-gray-400">TERMINAL</span>
        </div>
        <div className="flex gap-2 text-gray-500">
          <span className="hover:text-white cursor-pointer">+</span>
          <span className="hover:text-white cursor-pointer">×</span>
        </div>
      </div>
      {isExpanded && (
        <div className="p-3 font-code text-xs text-green-400 overflow-y-auto" style={{ height: 'calc(100% - 2rem)' }}>
          <div className="mb-1">$ npm run dev</div>
          <div className="text-gray-500">
            <div>{'>'} PPP_STUDIO@1.0.0 dev</div>
            <div>{'>'} vite</div>
            <div className="mt-2 text-vscode-keyword">VITE v6.2.0 ready in 420 ms</div>
            <div className="mt-1">{'>'} Local: http://localhost:5173/</div>
            <div>{'>'} Network: use --host to expose</div>
            <div className="mt-2 text-gray-400">press h + enter to show help</div>
          </div>
        </div>
      )}
    </div>
  );
};
