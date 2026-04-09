import { CheckCircle2, FileText, FileDown, List, Info, Users, LayoutTemplate, Shield, Gauge, Tag, User, Calendar } from 'lucide-react';

export default function PRDExport() {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
      {/* Editor Header */}
      <div className="h-16 px-8 flex justify-between items-center bg-white border-b border-slate-200 shadow-sm z-10 flex-shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-slate-900">PRD 一键导出中心</h1>
          <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-md text-green-700 text-xs font-bold border border-green-100">
            <CheckCircle2 size={14} />
            内容已就绪
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 text-blue-700 transition-all shadow-sm">
            <FileText size={18} />
            导出 Word (.docx)
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md">
            <FileDown size={18} />
            导出 Markdown (.md)
          </button>
        </div>
      </div>

      {/* Dual Pane Editor */}
      <div className="flex flex-1 overflow-hidden p-6 gap-6">
        {/* Left: Document Structure (Outline) */}
        <div className="w-72 flex flex-col gap-4 flex-shrink-0">
          <div className="bg-white rounded-xl p-5 shadow-sm h-full overflow-y-auto border border-slate-200">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center justify-between">
              文档目录 (Standard)
              <List size={16} />
            </h3>
            <ul className="space-y-1.5">
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                  <Info size={18} />
                  1. 综述 (Overview)
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium cursor-pointer transition-colors">
                  <Users size={18} />
                  2. 用户分析 (User Persona)
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium cursor-pointer transition-colors">
                  <List size={18} />
                  3. 功能需求 (Functional)
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium cursor-pointer transition-colors">
                  <LayoutTemplate size={18} />
                  4. ASCII 原型设计
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium cursor-pointer transition-colors">
                  <Shield size={18} />
                  5. 安全与权限
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium cursor-pointer transition-colors">
                  <Gauge size={18} />
                  6. 非功能性需求
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Rendered Document */}
        <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col overflow-hidden relative border border-slate-200">
          <div className="flex-1 overflow-y-auto p-12 max-w-4xl mx-auto w-full">
            <article className="max-w-none">
              <div className="border-b border-slate-200 pb-8 mb-10">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">AI 产品小助手 PRD</h1>
                <div className="flex gap-6 text-slate-500 text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Tag size={16} /> 版本: V1.0.0</span>
                  <span className="flex items-center gap-1.5"><User size={16} /> 作者: Cognitive AI</span>
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> 2023-11-25</span>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-6">1. 综述 (Overview)</h2>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 mt-6">1.1 项目背景与核心问题</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  在 B 端产品开发流程中，产品经理（PM）常耗费大量精力在文档排版、逻辑补全以及低保真原型绘制上。本项目旨在打造一个深度集成 B 端视觉规范（Ant Design）的 AI 助手，实现“聊完即产出”。
                </p>

                <h3 className="text-lg font-bold text-slate-800 mb-3 mt-8">1.2 核心业务流程</h3>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <ol className="space-y-4 text-slate-600 text-sm list-decimal pl-4 marker:text-slate-400 marker:font-bold">
                    <li><strong className="text-slate-800">需求摄取：</strong>AI 通过追问模式将模糊想法转化为结构化需求。</li>
                    <li><strong className="text-slate-800">原型构建：</strong>基于 Ant Design 规范，自动绘制高仿真 ASCII 原型。</li>
                    <li><strong className="text-slate-800">一键导出：</strong>支持 Word (.docx) 与 Markdown (.md) 专业文档导出。</li>
                  </ol>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-6">2. 用户分析 (User Persona)</h2>
                <div className="p-6 border border-blue-100 rounded-xl bg-blue-50/50 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm">
                      <User size={24} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-lg block">产品经理 (PM)</span>
                      <span className="text-xs text-slate-500 font-medium">主要目标：快速补全逻辑漏洞，减少沟通返工</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    希望通过交互式对话将碎片化想法转化为结构化 PRD 框架，省去低效的手动绘图环节，追求视觉对齐与研发理解。
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-6">3. 功能需求</h2>
                <div className="overflow-hidden border border-slate-200 rounded-xl mb-6 shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-4 w-24">需求 ID</th>
                        <th className="p-4 w-48">功能点</th>
                        <th className="p-4">核心逻辑概要</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-semibold text-slate-900">US-01</td>
                        <td className="p-4 font-medium text-slate-800">交互式引导</td>
                        <td className="p-4">AI 解析核心实体，发起定向追问，实时更新需求树。</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-semibold text-slate-900">US-02</td>
                        <td className="p-4 font-medium text-slate-800">原型自动生成</td>
                        <td className="p-4">基于 AntD 规范，自动弹出 Filter Card, Data Table 等组件。</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-semibold text-slate-900">US-03</td>
                        <td className="p-4 font-medium text-slate-800">多模式导出</td>
                        <td className="p-4">一键转化为 Word (汇报用) 或 Markdown (开发协作用)。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-6">4. 原型预览 (ASCII Wireframe)</h2>
                <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-inner border border-slate-800">
                  <pre className="font-mono text-[13px] text-slate-300 leading-relaxed">
{`+--------------------------------------------------------------------------------------------+
| [AntD Logo]  工作台 / 模块名 / 功能页面                                     [云舒 v] [退出] |
+--------------------------------------------------------------------------------------------+
|        |                                                                                   |
|  Sider |  < 面包屑 / 路径                                         [ 辅助按钮 ] [ 主操作按钮 ] |
|  ----  |  +---------------------------------------------------------------------------+  |
|  Menu1 |  | [ 标准 Card 容器 ]                                                         |  |
|  [M2]  |  +---------------------------------------------------------------------------+  |
|  Menu3 |  | * 标签名: [ 输入框组件...           ]   下拉选择: [ 选项 A v ]             |  |
|        |  |                                                                           |  |
|        |  | +-----------------------------------------------------------------------+ |  |
|        |  | | 标准 Table 组件 (带分页与操作列)                                       | |  |
|        |  | +-----------------------------------------------------------------------+ |  |
|        |  +---------------------------------------------------------------------------+  |
|        |                                                                                   |
+--------------------------------------------------------------------------------------------+`}
                  </pre>
                </div>
              </section>
            </article>
          </div>

          {/* Contextual Export Hint */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-2">
            <div className="bg-white px-5 py-2.5 rounded-full shadow-lg border border-blue-100 text-xs font-bold text-blue-600 animate-bounce flex items-center gap-2">
              <FileDown size={16} />
              点击上方按钮一键导出
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
