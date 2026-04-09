import { Moon, Bell, Share, Download } from 'lucide-react';
import { WorkspaceTab } from '../App';

interface TopHeaderProps {
  activeTab: WorkspaceTab;
  onTabChange: (tab: WorkspaceTab) => void;
}

export default function TopHeader({ activeTab, onTabChange }: TopHeaderProps) {
  const tabs = [
    { id: 'workbench', label: 'Workbench' },
    { id: 'preview', label: 'Preview' },
    { id: 'documents', label: 'Documents' },
  ] as const;

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm z-30 sticky top-0">
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-bold tracking-tight text-blue-800">CognitivePRD</h1>
        <div className="h-4 w-[1px] bg-slate-300"></div>
        <nav className="flex gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`pb-1 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Moon size={18} />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={18} />
        </button>
        <button className="ml-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2">
          <Share size={16} />
          Share
        </button>
        <button className="px-4 py-1.5 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-sm flex items-center gap-2">
          <Download size={16} />
          Export
        </button>
        <div className="ml-4 w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
