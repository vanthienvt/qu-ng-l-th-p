import React from 'react';
import { ViewMode } from '../types';
// Note: In a real Vite app, we would import the image like this:
// import heroImage from '../assets/ship-steel-wire.png';
// However, since we might not have the build system fully set up to handle asset imports in this environment, 
// I will assume the image is served from /assets/ship-steel-wire.png or I will use a relative path if supported.
// For likely stability in this specific setup, I'll use the relative path assuming public dir or similar, 
// but since I put it in assets inside src, I'll try to use a relative path for now.
// If this were a public asset, it would be /assets/... 
// Let's assume standard Vite handling where assets can be imported.
// But to be safe and "visual" without build errors if types aren't set up for png, I might just use the path string.

interface AdvertisementPageProps {
    onBack: () => void;
}

const AdvertisementPage: React.FC<AdvertisementPageProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white overflow-y-auto pb-20">
            {/* Navbar Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors backdrop-blur-md px-3 py-1.5 rounded-full bg-white/10"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="text-sm font-medium">Quay lại</span>
                </button>
                <div className="text-xl font-bold tracking-wider text-blue-400">STEEL<span className="text-white">PRO</span></div>
            </div>

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                {/* We use a direct path or relative path. Since I suspect I can't easily configure vite assets here, 
            I'll rely on the fact that I copied it to assets. 
            If the dev server doesn't serve it, it might be broken 
            but this is the best attempt without full control of the bundler.
            I will use a placeholder fallback if needed but let's try the relative path.
        */}
                <img
                    src="./assets/ship-steel-wire.png"
                    alt="Dây Thép Tàu Cao Cấp"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-xs font-bold tracking-wider uppercase w-fit backdrop-blur-sm">
                        Sản phẩm mới
                    </span>
                    <h1 className="text-4xl font-extrabold leading-tight text-white mb-2 shadow-sm">
                        Dây Thép Tàu <br />
                        <span className="text-blue-400">Siêu Bền</span>
                    </h1>
                    <p className="text-slate-200 text-lg max-w-md text-shadow-sm">
                        Chịu lực vượt trội, chống ăn mòn tối đa cho mọi hành trình biển cả.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="px-6 py-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-6">
                    <FeatureCard
                        icon="anchor"
                        title="Chịu Tải Trọng Lớn"
                        desc="Được chế tạo từ thép cacbon cao cấp, chịu được lực kéo cực đại trong môi trường khắc nghiệt."
                    />
                    <FeatureCard
                        icon="water_drop"
                        title="Chống Ăn Mòn"
                        desc="Lớp mạ kẽm nhúng nóng đặc biệt giúp bảo vệ lõi thép khỏi nước biển và sương muối."
                    />
                    <FeatureCard
                        icon="verified"
                        title="Đạt Chuẩn Quốc Tế"
                        desc="Sản phẩm đạt chứng nhận đăng kiểm quốc tế, đảm bảo an toàn tuyệt đối cho tàu biển."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-auto px-6 pb-8 pt-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl shadow-blue-900/40 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-950/20 rounded-full blur-xl"></div>

                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Liên hệ đặt hàng ngay</h3>
                    <p className="text-blue-100 mb-6 relative z-10">Nhận báo giá ưu đãi cho đơn hàng số lượng lớn trong tháng này.</p>

                    <button className="w-full py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2 relative z-10">
                        <span className="material-symbols-outlined">call</span>
                        Gọi Hotline: 1900 1234
                    </button>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
    <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default AdvertisementPage;
