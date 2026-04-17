export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.035]"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.4), transparent 60%)',
          left: '50%',
          top: '10%',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.025]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.4), transparent 60%)',
          left: '10%',
          top: '55%',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}
