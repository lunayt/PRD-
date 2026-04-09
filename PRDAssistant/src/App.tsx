import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import ProjectCenter from './components/ProjectCenter';
import Workbench from './components/Workbench';
import PrototypePreview from './components/PrototypePreview';
import PRDExport from './components/PRDExport';

export type NavItem = 'dashboard' | 'workbench' | 'templates' | 'settings';
export type WorkspaceTab = 'workbench' | 'preview' | 'documents';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('dashboard');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('workbench');

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden ml-64">
        {activeNav === 'workbench' && (
          <TopHeader activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {activeNav === 'dashboard' && (
            <ProjectCenter onProjectClick={() => setActiveNav('workbench')} />
          )}
          {activeNav === 'workbench' && activeTab === 'workbench' && <Workbench />}
          {activeNav === 'workbench' && activeTab === 'preview' && <PrototypePreview />}
          {activeNav === 'workbench' && activeTab === 'documents' && <PRDExport />}
          
          {/* Placeholder for other nav items */}
          {(activeNav === 'templates' || activeNav === 'settings') && (
            <div className="flex items-center justify-center h-full text-slate-400">
              Content for {activeNav} coming soon...
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
