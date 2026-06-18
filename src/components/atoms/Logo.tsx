const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${light ? 'bg-white/20' : 'bg-primary-900'}`}>
          <span className={`font-display font-bold text-lg ${light ? 'text-white' : 'text-gold-400'}`}>AC</span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold font-display tracking-tight ${light ? 'text-white' : 'text-primary-950'}`}>
          Anderson Carl
        </span>
        <span className={`text-xs font-medium tracking-wider mt-0.5 ${light ? 'text-white/70' : 'text-gold-600'}`}>
          UK Documents Specialist
        </span>
      </div>
    </div>
  </div>
);

export default Logo;
