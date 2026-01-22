import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-vscode-status flex items-center justify-between px-2 text-[10px] text-white select-none">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span>⚡</span>
          <span>main</span>
        </div>
        <div>✓ No issues</div>
      </div>
      <div className="flex items-center gap-3 font-bold">
        <div>CA: 8BV89un1w1KE5kjQq5Q9ouy5Guu2md2Jy52SsWnrpump</div>
      </div>
      <div className="flex items-center gap-3">
        <div>Ln 1, Col 1</div>
        <div>Spaces: 2</div>
        <div>UTF-8</div>
        <div>TypeScript JSX</div>
        <div className="flex items-center gap-1">
          <span>🔔</span>
        </div>
      </div>
    </div>
  );
};
