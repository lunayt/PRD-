import { ChevronRight, PlusCircle, Filter, ArrowUpDown, Search, Clock, ArrowRight, Sparkles, FileEdit, Box, History, LayoutTemplate, User, Plus } from 'lucide-react';

interface ProjectCenterProps {
  onProjectClick: () => void;
}

export default function ProjectCenter({ onProjectClick }: ProjectCenterProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto pb-32">
      <header className="flex justify-between items-end mb-10">
        <div>
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-2 font-medium">
            <span>主页</span>
            <ChevronRight size={14} />
            <span className="text-blue-700">项目中心</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">项目中心</h1>
        </div>
        <button 
          onClick={onProjectClick}
          className="bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-md hover:bg-blue-800 transition-colors"
        >
          <PlusCircle size={18} />
          <span>创建新需求</span>
        </button>
      </header>

      <section className="flex items-center gap-4 mb-8">
        <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <Filter size={16} className="text-slate-400" />
          <span>按状态筛选</span>
        </button>
        <button className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <ArrowUpDown size={16} className="text-slate-400" />
          <span>按时间排序</span>
        </button>
        
        <div className="ml-auto relative w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="搜索项目名称..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm shadow-sm"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col relative group cursor-pointer" onClick={onProjectClick}>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 gap-1">
              <Clock size={12} />
              需求确认中
            </span>
          </div>
          <div className="mb-6 mt-2">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Box size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">CRM 系统升级方案</h3>
            <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed">针对亚太地区销售流程的全面数字化改造，包含线索管理、自动化报表及多端同步优化。</p>
          </div>
          <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">最后编辑</span>
              <span className="text-sm font-medium text-slate-700">10 分钟前</span>
            </div>
            <button className="text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              进入工作台 <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col relative group cursor-pointer" onClick={onProjectClick}>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 gap-1">
              <FileEdit size={12} />
              原型已生成
            </span>
          </div>
          <div className="mb-6 mt-2">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
              <Box size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">聚合支付网关 2.0</h3>
            <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed">重构底层交易路由，支持数字货币及多币种结算，优化支付转化率及安全性校验机制。</p>
          </div>
          <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">最后编辑</span>
              <span className="text-sm font-medium text-slate-700">昨天 14:20</span>
            </div>
            <button className="text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              进入工作台 <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col relative group cursor-pointer" onClick={onProjectClick}>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 gap-1">
              <Sparkles size={12} />
              AI 生成中
            </span>
          </div>
          <div className="mb-6 mt-2">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
              <Box size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">智慧仓储 WMS 系统</h3>
            <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed">引入机器学习预测库存水平，设计自动化分拣机器人调度算法接口及 3D 可视化看板。</p>
          </div>
          <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">最后编辑</span>
              <span className="text-sm font-medium text-slate-700">3 小时前</span>
            </div>
            <button className="text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              进入工作台 <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Empty State Card */}
        <div 
          onClick={onProjectClick}
          className="col-span-1 md:col-span-2 xl:col-span-3 h-64 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-100/50 transition-colors cursor-pointer group"
        >
          <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus size={24} className="text-slate-400 group-hover:text-blue-600" />
          </div>
          <p className="text-slate-700 font-bold text-lg">开始一个新的 PRD 项目</p>
          <p className="text-sm text-slate-500 mt-2">使用 AI 智能辅助，将您的想法快速转化为专业文档</p>
        </div>
      </div>

      {/* Floating Command Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 ml-32 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-slate-200 flex items-center gap-6 z-50">
        <button className="flex flex-col items-center gap-1 group">
          <Search size={20} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">搜索项目</span>
        </button>
        <div className="w-px h-8 bg-slate-200"></div>
        <button className="flex flex-col items-center gap-1 group">
          <History size={20} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">最近操作</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all -my-2">
          <Sparkles size={20} />
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <LayoutTemplate size={20} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">模板库</span>
        </button>
        <div className="w-px h-8 bg-slate-200"></div>
        <button className="flex flex-col items-center gap-1 group">
          <User size={20} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">个人中心</span>
        </button>
      </div>
    </div>
  );
}
