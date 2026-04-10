import { ChevronRight, Terminal, Figma, CheckCircle2, MessageSquare, Search, Bell, Maximize, User, LayoutDashboard, ListOrdered, Users, Shield, Plus, Upload, CheckSquare, Download, Code } from 'lucide-react';

export default function PrototypePreview() {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
      <div className="px-8 py-6 flex-shrink-0">
        <nav className="flex items-center space-x-2 text-slate-500 text-sm mb-4 font-medium">
          <span>需求列表</span>
          <ChevronRight size={14} />
          <span>订单管理系统</span>
          <ChevronRight size={14} />
          <span className="text-blue-700">原型预览</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">订单管理系统 - 高保真 Ant Design 原型 (US-02)</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition-colors shadow-sm">
              <Code size={16} />
              导出 React 代码
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all">
              <Figma size={16} />
              导出为 Figma
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-8 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col min-h-[700px] max-w-6xl mx-auto">
          {/* Browser-like Top Bar */}
          <div className="h-12 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 gap-4 rounded-t-xl">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-grow flex justify-center">
              <div className="bg-white px-4 py-1 rounded-md text-xs text-slate-400 w-1/2 text-center border border-slate-200 shadow-sm">
                order-management.ant.design/orders
              </div>
            </div>
            <div className="w-16"></div> {/* Spacer for balance */}
          </div>

          {/* Ant Design Pro Mockup */}
          <div className="flex-grow p-0 bg-slate-100 flex justify-center overflow-hidden">
            <div className="w-full h-full flex text-[13px] text-slate-700 font-sans">
              {/* Sider */}
              <div className="w-56 bg-[#001529] flex flex-col flex-shrink-0">
                <div className="h-12 flex items-center px-4 gap-3 text-white">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">A</div>
                  <span className="font-semibold text-sm tracking-wide">Ant Design Pro</span>
                </div>
                <div className="flex-1 py-4 space-y-1">
                  <div className="px-4 py-2.5 text-white/65 hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
                    <LayoutDashboard size={16} /> 首页
                  </div>
                  <div className="px-4 py-2.5 bg-blue-600 text-white cursor-pointer flex items-center gap-2">
                    <ListOrdered size={16} /> 订单列表
                  </div>
                  <div className="px-4 py-2.5 text-white/65 hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
                    <Users size={16} /> 用户管理
                  </div>
                  <div className="px-4 py-2.5 text-white/65 hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
                    <Shield size={16} /> 权限设置
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col min-w-0 bg-[#f0f2f5]">
                {/* Header */}
                <div className="h-12 bg-white flex items-center justify-end px-6 gap-5 shadow-sm z-10">
                  <Search size={16} className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                  <Bell size={16} className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                  <Maximize size={16} className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded transition-colors">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <User size={14} />
                    </div>
                    <span className="text-sm">云舒</span>
                  </div>
                </div>

                {/* Page Content */}
                <div className="p-6 flex-1 overflow-auto">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-2 text-slate-400 mb-4 text-xs">
                    <span className="hover:text-slate-600 cursor-pointer transition-colors">首页</span>
                    <ChevronRight size={12} />
                    <span className="hover:text-slate-600 cursor-pointer transition-colors">订单管理</span>
                    <ChevronRight size={12} />
                    <span className="text-slate-600">订单列表</span>
                  </div>

                  {/* Filter Section */}
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 whitespace-nowrap">订单编号:</span>
                        <input type="text" placeholder="请输入订单号" className="flex-1 border border-slate-300 rounded px-3 py-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 whitespace-nowrap">客户名称:</span>
                        <input type="text" placeholder="请输入客户名称" className="flex-1 border border-slate-300 rounded px-3 py-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 whitespace-nowrap">订单状态:</span>
                        <select className="flex-1 border border-slate-300 rounded px-3 py-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white">
                          <option>全部</option>
                          <option>已支付</option>
                          <option>待支付</option>
                          <option>已发货</option>
                          <option>已取消</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button className="px-4 py-1.5 border border-slate-300 rounded hover:text-blue-600 hover:border-blue-600 transition-colors bg-white">重置</button>
                      <button className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-sm">查询</button>
                      <button className="px-2 py-1.5 text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">展开 <ChevronRight size={14} className="rotate-90" /></button>
                    </div>
                  </div>

                  {/* Table Section */}
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    {/* Toolbar */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-base font-medium text-slate-800">查询表格</div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5">
                          <Plus size={14} /> 新建
                        </button>
                        <button className="px-3 py-1.5 border border-slate-300 rounded hover:text-blue-600 hover:border-blue-600 transition-colors flex items-center gap-1.5 bg-white">
                          <Upload size={14} /> 导入
                        </button>
                        <button className="px-3 py-1.5 border border-slate-300 rounded hover:text-blue-600 hover:border-blue-600 transition-colors flex items-center gap-1.5 bg-white">
                          <CheckSquare size={14} /> 批量审核
                        </button>
                        <button className="px-3 py-1.5 border border-slate-300 rounded hover:text-blue-600 hover:border-blue-600 transition-colors flex items-center gap-1.5 bg-white">
                          <Download size={14} /> 导出
                        </button>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#fafafa] border-b border-slate-200">
                            <th className="py-3 px-4 font-medium text-slate-800">序号</th>
                            <th className="py-3 px-4 font-medium text-slate-800">订单编号</th>
                            <th className="py-3 px-4 font-medium text-slate-800">客户名称</th>
                            <th className="py-3 px-4 font-medium text-slate-800">状态</th>
                            <th className="py-3 px-4 font-medium text-slate-800 text-right">订单金额</th>
                            <th className="py-3 px-4 font-medium text-slate-800">下单时间</th>
                            <th className="py-3 px-4 font-medium text-slate-800">操作</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50 transition-colors group">
                            <td className="py-3 px-4">1</td>
                            <td className="py-3 px-4 text-blue-600 cursor-pointer">#ORD-2023-9910</td>
                            <td className="py-3 px-4">Alice Hamilton</td>
                            <td className="py-3 px-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>已支付</span></td>
                            <td className="py-3 px-4 font-mono text-right">¥ 1,240.00</td>
                            <td className="py-3 px-4 text-slate-500">2023-10-24 10:20:00</td>
                            <td className="py-3 px-4 text-blue-600 space-x-3">
                              <span className="cursor-pointer hover:text-blue-700">详情</span>
                              <span className="cursor-pointer hover:text-blue-700">编辑</span>
                              <span className="cursor-pointer hover:text-blue-700">更多</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors group">
                            <td className="py-3 px-4">2</td>
                            <td className="py-3 px-4 text-blue-600 cursor-pointer">#ORD-2023-9911</td>
                            <td className="py-3 px-4">Bob Robertson</td>
                            <td className="py-3 px-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>待支付</span></td>
                            <td className="py-3 px-4 font-mono text-right">¥ 450.25</td>
                            <td className="py-3 px-4 text-slate-500">2023-10-24 11:45:12</td>
                            <td className="py-3 px-4 text-blue-600 space-x-3">
                              <span className="cursor-pointer hover:text-blue-700">详情</span>
                              <span className="cursor-pointer hover:text-blue-700">编辑</span>
                              <span className="cursor-pointer hover:text-blue-700">更多</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors group">
                            <td className="py-3 px-4">3</td>
                            <td className="py-3 px-4 text-blue-600 cursor-pointer">#ORD-2023-9912</td>
                            <td className="py-3 px-4">Charlie Davis</td>
                            <td className="py-3 px-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>已发货</span></td>
                            <td className="py-3 px-4 font-mono text-right">¥ 89.99</td>
                            <td className="py-3 px-4 text-slate-500">2023-10-25 09:12:45</td>
                            <td className="py-3 px-4 text-blue-600 space-x-3">
                              <span className="cursor-pointer hover:text-blue-700">详情</span>
                              <span className="cursor-pointer hover:text-blue-700">编辑</span>
                              <span className="cursor-pointer hover:text-blue-700">更多</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors group">
                            <td className="py-3 px-4">4</td>
                            <td className="py-3 px-4 text-blue-600 cursor-pointer">#ORD-2023-9913</td>
                            <td className="py-3 px-4">Diana Prince</td>
                            <td className="py-3 px-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>已取消</span></td>
                            <td className="py-3 px-4 font-mono text-right">¥ 2,100.50</td>
                            <td className="py-3 px-4 text-slate-500">2023-10-25 14:30:00</td>
                            <td className="py-3 px-4 text-blue-600 space-x-3">
                              <span className="cursor-pointer hover:text-blue-700">详情</span>
                              <span className="cursor-pointer hover:text-blue-700">编辑</span>
                              <span className="cursor-pointer hover:text-blue-700">更多</span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors group">
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4 text-blue-600 cursor-pointer">#ORD-2023-9914</td>
                            <td className="py-3 px-4">Edward Norton</td>
                            <td className="py-3 px-4"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>已支付</span></td>
                            <td className="py-3 px-4 font-mono text-right">¥ 675.00</td>
                            <td className="py-3 px-4 text-slate-500">2023-10-26 16:55:22</td>
                            <td className="py-3 px-4 text-blue-600 space-x-3">
                              <span className="cursor-pointer hover:text-blue-700">详情</span>
                              <span className="cursor-pointer hover:text-blue-700">编辑</span>
                              <span className="cursor-pointer hover:text-blue-700">更多</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end items-center gap-4 mt-4 text-slate-600">
                      <span>共 142 条</span>
                      <div className="flex gap-1">
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white"><ChevronRight size={14} className="rotate-180" /></button>
                        <button className="w-7 h-7 flex items-center justify-center border border-blue-600 bg-blue-600 text-white rounded">1</button>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">2</button>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">3</button>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">4</button>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">5</button>
                        <span className="w-7 h-7 flex items-center justify-center">...</span>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">15</button>
                        <button className="w-7 h-7 flex items-center justify-center border border-slate-300 rounded hover:border-blue-500 hover:text-blue-500 transition-colors bg-white"><ChevronRight size={14} /></button>
                      </div>
                      <select className="border border-slate-300 rounded px-2 py-1 outline-none focus:border-blue-500 bg-white">
                        <option>10 条/页</option>
                        <option>20 条/页</option>
                        <option>50 条/页</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Status */}
          <div className="h-10 border-t border-slate-100 bg-slate-50 flex items-center px-6 justify-between text-[11px] text-slate-500 rounded-b-xl">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-green-600 font-medium">
                <CheckCircle2 size={14} /> 
                规范检查通过 (Ant Design V5)
              </span>
              <span>渲染模式: React 组件 (Ant Design 风格)</span>
            </div>
            <div>最后同步时间: 2023-10-27 15:30:22</div>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform group z-50">
        <MessageSquare size={24} />
        <div className="absolute right-16 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          优化此原型逻辑
        </div>
      </button>
    </div>
  );
}
