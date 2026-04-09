import { ChevronRight, Terminal, Figma, CheckCircle2, MessageSquare } from 'lucide-react';

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
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">订单管理系统 - 高仿真 ASCII 原型 (US-02)</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition-colors shadow-sm">
              <Terminal size={16} />
              导出为 ASCII
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

          {/* ASCII Content Rendering */}
          <div className="flex-grow p-8 bg-slate-50/30 flex justify-center overflow-auto">
            <div className="font-mono text-[13px] text-slate-800 bg-white p-8 shadow-lg rounded-lg border border-slate-200 whitespace-pre leading-tight">
{`+-------------------------------------------------------------------------------------------------------------------------------------+
| [AntD Logo]  工作台 / 订单中心 / 订单列表                                                   [消息] [全屏] [设置] | [云舒 v] [退出] |
+-------------------------------------------------------------------------------------------------------------------------------------+
| [ 首页 ] | [ 订单列表 x ] | [ 用户管理 x ] | [ 权限设置 x ]                                                                           |
+-------------------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                                     |
|  < 首页 / 订单管理 / 订单列表                                                                                                         |
|                                                                                                                                     |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|  | [ 筛选查询 ]                                                                                                                   |  |
|  |                                                                                                                               |  |
|  |  订单编号: [ 输入订单号...      ]   客户名称: [ 输入名称...      ]   订单状态: [ 全部 v ]   日期范围: [ 开始日期 ~ 结束日期 ]      |  |
|  |                                                                                                                               |  |
|  |                                                                                  [ 重置 ]  [ 查询 ]  [ 更多筛选 v ]            |  |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|                                                                                                                                     |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|  | [ 操作栏 ]                                                                                                                     |  |
|  |                                                                                                                               |  |
|  |  [ 新增订单 v ]  [ 订单导入 ]  [ 批量审核 ]  [ 批量导出 ]                                                                        |  |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|                                                                                                                                     |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|  | [ 数据表格 ]                                                                                                                   |  |
|  |                                                                                                                               |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 序号 | 订单编号           | 客户名称           | 状态        | 订单金额       | 下单时间         | 操作                  | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 1    | #ORD-2023-9910     | Alice Hamilton     | (o) 已支付  | $1,240.00      | 2023-10-24 10:20 | [详情] [编辑] [更多v] | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 2    | #ORD-2023-9911     | Bob Robertson      | (!) 待支付  | $450.25        | 2023-10-24 11:45 | [详情] [编辑] [更多v] | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 3    | #ORD-2023-9912     | Charlie Davis      | (>) 已发货  | $89.99         | 2023-10-25 09:12 | [详情] [编辑] [更多v] | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 4    | #ORD-2023-9913     | Diana Prince       | (x) 已取消  | $2,100.50      | 2023-10-25 14:30 | [详情] [编辑] [更多v] | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |  | 5    | #ORD-2023-9914     | Edward Norton      | (o) 已支付  | $675.00        | 2023-10-26 16:55 | [详情] [编辑] [更多v] | |  |
|  |  +------+--------------------+--------------------+-------------+----------------+------------------+-----------------------+ |  |
|  |                                                                                                                               |  |
|  |                                                                             共 142 条  [ < ] [ 1 ] [ 2 ] [ 3 ] ... [ 15 ] [ > ]  |  |
|  +-------------------------------------------------------------------------------------------------------------------------------+  |
|                                                                                                                                     |
+-------------------------------------------------------------------------------------------------------------------------------------+`}
            </div>
          </div>

          {/* Footer Status */}
          <div className="h-10 border-t border-slate-100 bg-slate-50 flex items-center px-6 justify-between text-[11px] text-slate-500 rounded-b-xl">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-green-600 font-medium">
                <CheckCircle2 size={14} /> 
                规范检查通过 (Ant Design V5)
              </span>
              <span>渲染模式: 高仿真 ASCII (Consolas)</span>
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
