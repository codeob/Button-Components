import { RxModulzLogo } from "react-icons/rx";

export default function Logo() {
  return (
    <div className="relative">
      {/* Spinning shadow layers */}
      <div className="absolute inset-0 animate-spin">
        <div className="w-full h-full rounded-full shadow-[0_0_30px_10px_rgba(59,130,246,0.4)]"></div>
      </div>
      <div className="absolute inset-0 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
        <div className="w-full h-full rounded-full shadow-[0_0_20px_5px_rgba(147,197,253,0.3)]"></div>
      </div>
      
      {/* Static shadow base */}
      <div className="absolute inset-0">
        <div className="w-full h-full rounded-full shadow-[0_0_40px_15px_rgba(59,130,246,0.2)]"></div>
      </div>
      
      {/* Main icon */}
      <div className="relative z-10">
        <RxModulzLogo className="text-5xl text-blue-500 drop-shadow-lg" />
      </div>
    </div>
  );
}