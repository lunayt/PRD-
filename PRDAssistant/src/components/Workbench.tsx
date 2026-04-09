import { Bot, Send, GitMerge, History, ListTree, FolderOpen, FileCode2, Sparkles } from 'lucide-react';

export default function Workbench() {
  return (
    <div className="flex h-full p-6 gap-6 bg-slate-50 overflow-hidden">
      {/* Left Column: AI Chat Interface */}
      <section className="flex-[3] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <Bot className="text-blue-600" size={20} />
            <span className="font-bold text-slate-800">交互工作台：需求摄取与引导</span>
          </div>
          <span className="px-2 py-1 rounded bg-blue-100 text-[10px] text-blue-700 font-bold uppercase tracking-wider">
            追问模式激活
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
              我想做一个带权限控制的订单管理系统，能够满足我们公司多级部门的需求。
            </div>
          </div>

          {/* AI Response 1 */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
              <Sparkles className="text-blue-600" size={16} />
            </div>
            <div className="max-w-[85%] bg-slate-50 p-5 rounded-2xl rounded-tl-sm text-sm text-slate-700 leading-relaxed border border-slate-100">
              <p className="mb-4">收到。基于 B 端典型的权限管理场景，我需要确认几个关键的<strong>业务规则</strong>以补全逻辑漏洞：</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                  <p className="font-bold text-slate-800 mb-1">Q1: 关于“数据隔离”</p>
                  <p className="text-xs text-slate-500 mb-3">是否需要支持部门间的数据隔离？（例如：华东区员工仅能查看华东区的订单，无法查看华南区）</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                      是，需要部门隔离
                    </button>
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                      否，全局可见
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Response 2 */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
              <Sparkles className="text-blue-600" size={16} />
            </div>
            <div className="max-w-[85%] bg-slate-50 p-5 rounded-2xl rounded-tl-sm text-sm text-slate-700 leading-relaxed border border-slate-100">
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <p className="font-bold text-slate-800 mb-1">Q2: 关于“审批逻辑”</p>
                <p className="text-xs text-slate-500">订单状态流转是否涉及多级审批？若审批驳回，是直接作废还是退回上一步修改？</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 pr-24 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-h-[100px] resize-none" 
              placeholder="在此回复 AI 的提问，或进一步描述您的业务需求..."
            ></textarea>
            <button className="absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm">
              <span className="text-xs font-bold">发送</span>
              <Send size={14} />
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-colors">
              <GitMerge size={14} />
              查看当前逻辑树
            </button>
            <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition-colors">
              <History size={14} />
              讨论记录
            </button>
          </div>
        </div>
      </section>

      {/* Right Column: Requirement Tree */}
      <section className="flex-[2] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h2 className="font-bold text-slate-800 flex items-center gap-2">
            <ListTree className="text-slate-400" size={18} />
            结构化需求树 (实时同步)
          </h2>
          <span className="text-[10px] text-slate-400 font-medium">自动保存 12:45:10</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-6">
            {/* Group: Core Entities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FolderOpen className="text-slate-400" size={14} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">核心实体定义</span>
              </div>
              <div className="ml-2 pl-3 border-l border-slate-200 space-y-2">
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-100 border-l-4 border-l-green-500">
                  <div>
                    <p className="text-xs font-bold text-slate-800">订单模型 (Order)</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">包含：单号、金额、下单人、所属部门</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold">已确认</span>
                </div>
              </div>
            </div>

            {/* Group: Business Rules */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileCode2 className="text-slate-400" size={14} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">业务规则 (US-01)</span>
              </div>
              <div className="ml-2 pl-3 border-l border-slate-200 space-y-2">
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-100 border-l-4 border-l-blue-500">
                  <div>
                    <p className="text-xs font-bold text-slate-800">数据隔离逻辑</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">待确认：是否按部门层级隔离数据</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold animate-pulse">解析中...</span>
                </div>
                
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-100 border-l-4 border-l-blue-500">
                  <div>
                    <p className="text-xs font-bold text-slate-800">审批权限链路</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">待确认：多级审批节点定义</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold">待追问</span>
                </div>

                <div className="p-3 bg-slate-50/50 rounded-lg flex items-center justify-between border border-slate-100 border-l-4 border-l-slate-300">
                  <div>
                    <p className="text-xs font-bold text-slate-500">操作日志审计</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">未开始</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold">草稿</span>
                </div>
              </div>
            </div>

            {/* Export Readiness */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 mb-2">生成准备度</p>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[35%]"></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2">补全“数据隔离”与“审批逻辑”后可生成原型</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button className="flex-1 py-2.5 text-xs font-bold border border-slate-200 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            保存共识
          </button>
          <button className="flex-1 py-2.5 text-xs font-bold bg-blue-600 text-white rounded-lg opacity-50 cursor-not-allowed shadow-sm">
            导出 PRD 框架
          </button>
        </div>
      </section>

      {/* Floating AI Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
          <Sparkles size={24} />
        </button>
      </div>
    </div>
  );
}
