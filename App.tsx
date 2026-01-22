import React, { useState } from 'react';
import { ActivityBar } from './components/ActivityBar';
import { Sidebar } from './components/Sidebar';
import { Terminal } from './components/Terminal';
import { StatusBar } from './components/StatusBar';
import { HERO_TEXT, SKILLS, PROJECTS, GALLERY_ASSETS } from './constants';

function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'pfp'>('explorer');
  const [activeFile, setActiveFile] = useState('home');

  // Handle switching tabs in activity bar
  const handleTabChange = (tab: 'explorer' | 'pfp') => {
    setActiveTab(tab);
    // When switching to PFP tab, default to first image if current file isn't an image
    if (tab === 'pfp' && !activeFile.startsWith('pfp_')) {
      setActiveFile(GALLERY_ASSETS[0].id);
    }
    // When switching to Explorer, default to home if current file is an image
    if (tab === 'explorer' && activeFile.startsWith('pfp_')) {
      setActiveFile('home');
    }
  };

  const renderContent = () => {
    // If it's a PFP file, show image viewer
    if (activeFile.startsWith('pfp_')) {
      return <ImageViewer fileId={activeFile} />;
    }

    switch(activeFile) {
      case 'home':
        return <HomeFile />;
      case 'mission':
        return <MissionFile />;
      case 'build':
        return <BuildCardsFile />;
      case 'license':
        return <LicenseFile />;
      default:
        return <HomeFile />;
    }
  };

  const getFileName = () => {
    if (activeFile.startsWith('pfp_')) {
       const asset = GALLERY_ASSETS.find(a => a.id === activeFile);
       return asset ? asset.name : 'image.png';
    }

    switch(activeFile) {
      case 'home': return 'App.tsx';
      case 'mission': return 'mission.md';
      case 'build': return 'build_cards.ts';
      case 'license': return 'CC0_License.txt';
      default: return 'App.tsx';
    }
  };

  const getFileIcon = () => {
    if (activeFile.startsWith('pfp_')) return '🖼️';
     switch(activeFile) {
      case 'home': return '⚛️';
      case 'mission': return '📝';
      case 'build': return 'TS';
      case 'license': return '📄';
      default: return '⚛️';
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-vscode-bg text-vscode-text overflow-hidden">
      
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#1e1e1e] flex items-center px-3 text-xs text-gray-400 select-none border-b border-vscode-border">
         <div className="mr-4 text-blue-400 font-bold">VS Code</div>
         {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map(item => (
           <div key={item} className="mx-2 hover:text-white cursor-pointer hidden md:block">{item}</div>
         ))}
         <div className="flex-1 text-center text-gray-500 font-sans">PumpfunPixel Studio - Visual Studio Code</div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <ActivityBar activeTab={activeTab} onTabChange={handleTabChange} />
        <Sidebar activeTab={activeTab} activeFile={activeFile} onFileSelect={setActiveFile} />
        
        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-bg min-w-0">
          
          {/* Tabs */}
          <div className="flex bg-[#252526] overflow-x-auto no-scrollbar">
            <div className="bg-vscode-bg px-3 py-2 text-sm border-t-2 border-vscode-keyword text-white flex items-center min-w-fit pr-8 relative group cursor-pointer max-w-xs">
              <span className="mr-2 text-xs opacity-80">{getFileIcon()}</span>
              <span className="truncate">{getFileName()}</span>
              <span className="ml-2 text-gray-500 hover:text-white absolute right-2 opacity-0 group-hover:opacity-100">×</span>
            </div>
            {/* Fake inactive tab */}
            <div className="bg-[#2d2d2d] px-3 py-2 text-sm text-gray-400 flex items-center min-w-fit pr-8 cursor-pointer border-r border-[#1e1e1e] hover:bg-[#2a2a2a]">
                 <span className="mr-2 text-xs opacity-80 text-yellow-500">{}</span>
                 terminal_logs.log
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="h-6 flex items-center px-4 text-xs text-gray-500 bg-vscode-bg border-b border-vscode-border overflow-hidden">
             <span>src</span>
             <span className="mx-1">›</span>
             <span>{activeTab === 'explorer' ? 'components' : 'assets'}</span>
             <span className="mx-1">›</span>
             <span className="text-vscode-text truncate">{getFileName()}</span>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto relative font-code text-sm md:text-base">
             {/* Render different content types properly */}
             {activeFile.startsWith('pfp_') ? (
                <div className="h-full flex items-center justify-center bg-[#1e1e1e] p-8">
                   {renderContent()}
                </div>
             ) : (
                <div className="min-h-full py-4 px-4">
                  {renderContent()}
                </div>
             )}
          </div>

          {/* Terminal / Bottom Panel */}
          <Terminal />
          
        </div>
      </div>

      <StatusBar />
    </div>
  );
}

// --- FILE COMPONENTS ---

const HomeFile = () => (
  <div className="text-vscode-text space-y-1">
    <div className="code-line"><span className="text-vscode-keyword">import</span> React <span className="text-vscode-keyword">from</span> <span className="text-vscode-string">'react'</span>;</div>
    <div className="code-line"><span className="text-vscode-keyword">import</span> {'{ PumpfunPixel }'} <span className="text-vscode-keyword">from</span> <span className="text-vscode-string">'./studio'</span>;</div>
    <div className="code-line">&nbsp;</div>
    <div className="code-line"><span className="text-vscode-comment">// {HERO_TEXT.description}</span></div>
    <div className="code-line"><span className="text-vscode-keyword">export default function</span> <span className="text-vscode-func">App</span>() {'{'}</div>
    <div className="code-line">&nbsp;&nbsp;<span className="text-vscode-keyword">return</span> (</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-vscode-func">Container</span>&gt;</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-vscode-func">StudioHero</span></div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">mission</span>=<span className="text-vscode-string">"GET_ALON_TO_SWITCH"</span></div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">status</span>=<span className="text-vscode-string">"LIVE_DRAWING"</span></div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-vscode-func">Button</span> <span className="text-sky-300">onClick</span>={'{'}() =&gt; <span className="text-vscode-func">joinStream</span>(){'}'}&gt;</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WATCH_US_BUILD</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-vscode-func">Button</span>&gt;</div>
    <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-vscode-func">Container</span>&gt;</div>
    <div className="code-line">&nbsp;&nbsp;);</div>
    <div className="code-line">{'}'}</div>
    
    {/* Preview Rendering */}
    <div className="mt-8 border border-vscode-border p-6 rounded bg-[#252526] max-w-2xl mx-auto shadow-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">PumpfunPixel (PPP)</h1>
        <h2 className="text-xl text-vscode-keyword mb-4">LIVE PIXEL STUDIO</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
           {['🎨 1/1 LIVE DRAWS', '🔓 FREE CC0 COMMONS', '🟩 PUMPFUN CULTURE', '🎯 TARGET: ALON'].map(feat => (
             <div key={feat} className="bg-[#1e1e1e] p-2 border border-vscode-border text-xs text-vscode-string">
                {feat}
             </div>
           ))}
        </div>

        <p className="text-gray-400 mb-6 font-sans text-sm">
          We don't just launch a coin. We build the culture.
          <br/>Every pixel placed is a step closer to the mission.
        </p>

        <div className="flex gap-4 justify-center">
             <button onClick={() => window.open('https://twitter.com/pumpdotfun', '_blank')} className="bg-vscode-status text-white px-6 py-2 rounded hover:bg-opacity-80 transition-all font-sans font-bold text-sm">
                 @TAG_ALON
             </button>
             <button className="bg-vscode-comment text-white px-6 py-2 rounded hover:bg-opacity-80 transition-all font-sans font-bold text-sm">
                 REQUEST_1/1
             </button>
        </div>
    </div>
  </div>
);

const BuildCardsFile = () => (
    <div className="text-vscode-text">
        <div className="code-line"><span className="text-vscode-comment">// We ship via Build Cards, not a strict roadmap.</span></div>
        <div className="code-line"><span className="text-vscode-keyword">const</span> <span className="text-vscode-func">BUILD_DECK</span>: <span className="text-vscode-func">Card</span>[] = [</div>
        {PROJECTS.map(p => (
            <React.Fragment key={p.id}>
                <div className="code-line pl-4">{'{'}</div>
                <div className="code-line pl-8"><span className="text-sky-300">card_id</span>: <span className="text-vscode-number">{p.id}</span>,</div>
                <div className="code-line pl-8"><span className="text-sky-300">type</span>: <span className="text-vscode-string">"{p.title}"</span>,</div>
                <div className="code-line pl-8"><span className="text-sky-300">effect</span>: <span className="text-vscode-string">"{p.description}"</span>,</div>
                <div className="code-line pl-8"><span className="text-sky-300">status</span>: <span className="text-vscode-string">"{p.status}"</span></div>
                <div className="code-line pl-4">{'},'}</div>
            </React.Fragment>
        ))}
        <div className="code-line">];</div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {PROJECTS.map(p => (
                <div key={p.id} className="p-4 border border-vscode-border bg-[#252526] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-1 bg-vscode-keyword text-black text-[10px] font-bold">
                        {p.status === 'completed' ? 'SHIPPED' : 'BUILDING'}
                    </div>
                    <div className="font-bold text-vscode-func mb-2 text-lg">{p.title}</div>
                    <div className="text-gray-400 text-xs mb-3">{p.description}</div>
                    <div className="flex gap-2">
                        {p.techStack.map(t => (
                            <span key={t} className="text-[10px] bg-[#1e1e1e] px-1 border border-gray-700 text-gray-500">{t}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MissionFile = () => (
    <div className="text-vscode-text font-sans p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-6">MISSION_BRIEF.md</h1>
        
        <div className="bg-[#2d2d2d] border-l-4 border-vscode-status p-4 mb-6">
             <h2 className="text-xl font-bold text-white mb-2">The Goal</h2>
             <p className="text-gray-300">Get <span className="text-vscode-keyword">@alon</span> (Pumpfun CEO) to switch his PFP to a PPP-made pixel avatar.</p>
        </div>

        <h3 className="text-lg font-bold mt-6 mb-2 text-vscode-func">How to Join the Raid:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-400 mb-6 font-code text-sm">
            <li>Select a PPP CC0 PFP from the gallery.</li>
            <li>Set it as your X (Twitter) Avatar.</li>
            <li>Tag <span className="text-vscode-string">@pumpdotfun</span> + Alon.</li>
            <li>Comment on our thread to request a 1/1 live draw.</li>
        </ol>
        
        <div className="bg-black p-4 font-code text-xs text-green-400 border border-gray-700">
            > TRANSPARENCY_MODE: ON<br/>
            > COLLABS: PUBLIC_ONLY<br/>
            > BACKCHANNELS: DISABLED<br/>
            > VIBES: IMMUTABLE
        </div>
    </div>
);

const LicenseFile = () => (
    <div className="text-vscode-text">
        <div className="code-line"><span className="text-vscode-comment">/* </span></div>
        <div className="code-line"><span className="text-vscode-comment"> * LICENSE: CC0 1.0 Universal</span></div>
        <div className="code-line"><span className="text-vscode-comment"> * </span></div>
        <div className="code-line"><span className="text-vscode-comment"> * The person who associated a work with this deed has dedicated</span></div>
        <div className="code-line"><span className="text-vscode-comment"> * the work to the public domain by waiving all of his or her rights</span></div>
        <div className="code-line"><span className="text-vscode-comment"> * to the work worldwide under copyright law.</span></div>
        <div className="code-line"><span className="text-vscode-comment"> * </span></div>
        <div className="code-line"><span className="text-vscode-comment"> * YOU CAN COPY, MODIFY, DISTRIBUTE AND PERFORM THE WORK,</span></div>
        <div className="code-line"><span className="text-vscode-comment"> * EVEN FOR COMMERCIAL PURPOSES, ALL WITHOUT ASKING PERMISSION.</span></div>
        <div className="code-line"><span className="text-vscode-comment"> */</span></div>
        <div className="code-line">&nbsp;</div>
        <div className="code-line"><span className="text-vscode-keyword">export const</span> <span className="text-vscode-func">usageRights</span> = <span className="text-vscode-string">"UNRESTRICTED"</span>;</div>
    </div>
);

const ImageViewer = ({ fileId }: { fileId: string }) => {
    // Find the asset based on ID
    const asset = GALLERY_ASSETS.find(a => a.id === fileId);
    // Fallback if not found (shouldn't happen with correct logic)
    const url = asset ? asset.url : 'https://via.placeholder.com/300?text=404';

    const handleDownload = async () => {
        if (!asset) return;
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = asset.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (e) {
            // Fallback for CORS issues, simply open in new tab
            window.open(url, '_blank');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAABVJREFUOE9jZACD/wz//wP///8DAwAA///9A/8LAAAAAElFTkSuQmCC')] p-8 border border-vscode-border shadow-2xl">
                 <img src={url} alt={asset?.name || "Pixel PFP"} className="max-w-full max-h-[50vh] object-contain" />
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
                <span className="text-gray-400 text-xs"> {asset?.name} </span>
                <span className="text-gray-500 text-[10px]"> FREE CC0 LICENSE </span>
                <div className="flex gap-4">
                    <button 
                        onClick={handleDownload}
                        className="bg-vscode-status text-white px-4 py-2 text-xs font-bold rounded hover:bg-blue-600">
                        DOWNLOAD_PNG
                    </button>
                    <button className="bg-vscode-activity text-white px-4 py-2 text-xs font-bold rounded hover:bg-gray-600 border border-gray-600">
                        COPY_HEX
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;