import React from 'react';
import { GALLERY_ASSETS } from '../constants';

interface SidebarProps {
  activeTab: 'explorer' | 'pfp';
  activeFile: string;
  onFileSelect: (fileId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, activeFile, onFileSelect }) => {
  if (activeTab === 'pfp') {
    return (
      <div className="w-48 md:w-64 bg-[#252526] border-r border-vscode-border overflow-y-auto">
        <div className="p-2 text-xs font-bold text-gray-400 uppercase border-b border-vscode-border">
          PFP Gallery
        </div>
        <div className="p-2 space-y-1">
          {GALLERY_ASSETS.map((asset) => (
            <div
              key={asset.id}
              onClick={() => onFileSelect(asset.id)}
              className={`flex items-center px-2 py-1 text-xs cursor-pointer hover:bg-[#2a2a2a] ${
                activeFile === asset.id ? 'bg-[#37373d]' : ''
              }`}
            >
              <span className="mr-2">🖼️</span>
              <span className="truncate">{asset.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-48 md:w-64 bg-[#252526] border-r border-vscode-border overflow-y-auto">
      <div className="p-2 text-xs font-bold text-gray-400 uppercase border-b border-vscode-border">
        Explorer
      </div>
      <div className="p-2">
        <div className="mb-2">
          <div className="flex items-center text-xs mb-1 text-gray-400">
            <span className="mr-1">▼</span>
            <span className="font-bold">PPP_STUDIO</span>
          </div>
          <div className="ml-3 space-y-1">
            <div
              onClick={() => onFileSelect('home')}
              className={`flex items-center px-2 py-1 text-xs cursor-pointer hover:bg-[#2a2a2a] ${
                activeFile === 'home' ? 'bg-[#37373d]' : ''
              }`}
            >
              <span className="mr-2">⚛️</span>
              <span>App.tsx</span>
            </div>
            <div
              onClick={() => onFileSelect('mission')}
              className={`flex items-center px-2 py-1 text-xs cursor-pointer hover:bg-[#2a2a2a] ${
                activeFile === 'mission' ? 'bg-[#37373d]' : ''
              }`}
            >
              <span className="mr-2">📝</span>
              <span>mission.md</span>
            </div>
            <div
              onClick={() => onFileSelect('build')}
              className={`flex items-center px-2 py-1 text-xs cursor-pointer hover:bg-[#2a2a2a] ${
                activeFile === 'build' ? 'bg-[#37373d]' : ''
              }`}
            >
              <span className="mr-2 text-[10px] bg-blue-600 px-1 rounded">TS</span>
              <span>build_cards.ts</span>
            </div>
            <div
              onClick={() => onFileSelect('license')}
              className={`flex items-center px-2 py-1 text-xs cursor-pointer hover:bg-[#2a2a2a] ${
                activeFile === 'license' ? 'bg-[#37373d]' : ''
              }`}
            >
              <span className="mr-2">📄</span>
              <span>CC0_License.txt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
