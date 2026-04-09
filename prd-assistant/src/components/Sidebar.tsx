import { Brain, LayoutDashboard, PenTool, FileText, Settings, Plus, HelpCircle, Shield } from 'lucide-react';
import { NavItem } from '../App';

interface SidebarProps {
  activeNav: NavItem;
  onNavChange: (nav: NavItem) => void;
}

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'workbench', icon: PenTool, label: 'Workbench' },
    { id: 'templates', icon: FileText, label: 'Templates' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ] as const;

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-100 w-64 border-r border-slate-200/50">
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white">
          <Brain size={18} />
        </div>
        <div>
          <div className="text-lg font-black text-slate-900 tracking-tight leading-tight">Cognitive Workspace</div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Product Intelligence</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-semibold tracking-wide ${
                isActive 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-blue-700' : 'text-slate-400'} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 space-y-2 border-t border-slate-200/50">
        <button className="w-full bg-blue-700 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 mb-4 hover:bg-blue-800 transition-colors shadow-sm font-medium text-sm">
          <Plus size={16} />
          <span>New Project</span>
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-200/50 rounded-lg transition-colors text-sm font-medium">
          <HelpCircle size={16} className="text-slate-400" />
          <span>Help</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-200/50 rounded-lg transition-colors text-sm font-medium">
          <Shield size={16} className="text-slate-400" />
          <span>Privacy</span>
        </button>
      </div>
    </aside>
  );
}
