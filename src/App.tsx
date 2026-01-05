import React, { useState } from 'react';
import { LayoutDashboard, Anchor, PackageSearch, ArrowLeft, Phone, ShieldCheck, Ship, BoxSelect } from 'lucide-react';

// Types
type ViewMode = 'dashboard' | 'advertising';

// Components
const AdvertisementPage = ({ onBack }: { onBack: () => void }) => (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
        {/* Navigation Overlay */}
        <nav className="fixed top-0 w-full p-4 z-50 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center backdrop-blur-sm">
            <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-md"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Quay lại Dashboard</span>
            </button>
            <div className="text-2xl font-black tracking-wider text-blue-500">
                STEEL<span className="text-white">PRO</span>
            </div>
        </nav>

        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
            {/* Background Image Placeholder or Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                    src="https://images.unsplash.com/photo-1517429676767-73d74c0b561c?q=80&w=2070&auto=format&fit=crop"
                    alt="Ship Steel Wire"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col gap-6 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/90 text-blue-50 text-sm font-bold w-fit uppercase tracking-widest shadow-lg shadow-blue-500/20">
                    <Ship className="w-4 h-4" />
                    Giải pháp hàng hải
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    Dây Thép Tàu <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        Siêu Bền Bỉ
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                    Chinh phục mọi hải trình với công nghệ mạ kẽm nhúng nóng tiên tiến.
                    Chống ăn mòn tuyệt đối, chịu tải trọng cực đại.
                </p>
                <button className="w-fit px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-blue-50 shadow-xl shadow-white/10 transition-transform active:scale-95 flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    Liên hệ báo giá ngay
                </button>
            </div>
        </div>

        {/* Features */}
        <div className="py-20 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
                icon={<Anchor className="w-8 h-8 text-blue-400" />}
                title="Chịu Tải Siêu Hạng"
                desc="Cấu trúc lõi thép đặc biệt giúp chịu được lực kéo lớn hơn 30% so với dây thép thông thường."
            />
            <FeatureCard
                icon={<ShieldCheck className="w-8 h-8 text-blue-400" />}
                title="Chống Ăn Mòn Kép"
                desc="Lớp bảo vệ kép chống lại sự xâm nhập của nước biển và sương muối trong thời gian dài."
            />
            <FeatureCard
                icon={<BoxSelect className="w-8 h-8 text-blue-400" />}
                title="Đa Dạng Kích Thước"
                desc="Cung cấp đầy đủ các quy cách từ phi 6 đến phi 60, phù hợp cho mọi loại tàu biển."
            />
        </div>
    </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors group">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

// Main Application
function App() {
    const [view, setView] = useState<ViewMode>('dashboard');

    if (view === 'advertising') {
        return <AdvertisementPage onBack={() => setView('dashboard')} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans">
            {/* Header */}
            <header className="bg-white px-6 py-4 sticky top-0 z-30 flex justify-between items-center border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
                <div>
                    <h1 className="text-xl font-extrabold text-blue-600 tracking-tight">STEEL<span className="text-slate-900">TRACKER</span></h1>
                    <p className="text-xs text-slate-500 font-medium">Hệ thống quản lý kho thép</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <span className="font-bold text-slate-600">AD</span>
                </div>
            </header>

            <main className="p-6 space-y-6">
                {/* Welcome */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Tổng quan</h2>
                        <p className="text-slate-500">Cập nhật lúc 12:30 hôm nay</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <StatCard title="Tồn kho" value="1,240" unit="Tấn" trend="+2.5%" color="bg-blue-50 text-blue-700" />
                    <StatCard title="Doanh thu" value="$45.2k" unit="" trend="+12%" color="bg-emerald-50 text-emerald-700" />
                    <StatCard title="Đơn hàng" value="85" unit="" trend="-0.4%" color="bg-orange-50 text-orange-700" />
                    <StatCard title="Khách hàng" value="320" unit="" trend="+5%" color="bg-purple-50 text-purple-700" />
                </div>

                {/* Quick Actions */}
                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Thao tác nhanh</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <PackageSearch className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-700">Kiểm kho</span>
                        </button>
                        <button className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-700">Xuất báo cáo</span>
                        </button>
                    </div>
                </div>

                {/* Recent Inventory List */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800">Kho Thép Tàu</h3>
                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-600">Mới nhất</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                                        <Anchor className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-slate-800">Thép dây D{item * 10}</p>
                                        <p className="text-xs text-slate-500">Mã: SP-00{item}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm text-slate-800">{150 + item * 20} Tấn</p>
                                    <p className="text-xs text-green-600">Sẵn sàng</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 safe-area-pb">
                <div className="flex justify-around items-center">
                    <NavButton icon={<LayoutDashboard />} label="Dashboard" active />
                    <NavButton icon={<PackageSearch />} label="Kho hàng" />

                    <div className="relative -top-6">
                        <button
                            onClick={() => setView('advertising')}
                            className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center border-4 border-slate-50 transform hover:-translate-y-1 transition-transform"
                        >
                            <Ship className="w-7 h-7" />
                        </button>
                    </div>

                    <NavButton icon={<Anchor />} label="Sản phẩm" />
                    <NavButton icon={<BoxSelect />} label="Khác" />
                </div>
            </nav>
        </div>
    )
}

const StatCard = ({ title, value, unit, trend, color }: any) => (
    <div className={`p-4 rounded-2xl ${color} bg-opacity-20`}>
        <p className="text-xs font-semibold opacity-70 mb-1 uppercase tracking-wide">{title}</p>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-xs font-medium opacity-80">{unit}</span>
        </div>
        <p className="text-xs font-bold mt-2 opacity-80">{trend} so với tháng trước</p>
    </div>
)

const NavButton = ({ icon, label, active = false }: any) => (
    <button className={`flex flex-col items-center gap-1 p-3 flex-1 ${active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
        <span className="text-[10px] font-bold">{label}</span>
    </button>
)

export default App
