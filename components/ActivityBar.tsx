import React from 'react';

interface ActivityBarProps {
  activeTab: 'explorer' | 'pfp';
  onTabChange: (tab: 'explorer' | 'pfp') => void;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-2 border-r border-vscode-border">
      <button
        onClick={() => onTabChange('explorer')}
        className={`w-10 h-10 flex items-center justify-center mb-2 hover:bg-[#2a2a2a] ${
          activeTab === 'explorer' ? 'border-l-2 border-vscode-keyword bg-[#2a2a2a]' : ''
        }`}
        title="Explorer"
      >
        <span className="text-xl">📁</span>
      </button>
      <button
        onClick={() => onTabChange('pfp')}
        className={`w-10 h-10 flex items-center justify-center mb-2 hover:bg-[#2a2a2a] ${
          activeTab === 'pfp' ? 'border-l-2 border-vscode-keyword bg-[#2a2a2a]' : ''
        }`}
        title="PFP Gallery"
      >
        <span className="text-xl">🖼️</span>
      </button>
    </div>
  );
};
