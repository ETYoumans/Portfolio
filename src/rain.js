import './css/rain.css';

function Rain() {
  const drops = Array.from({ length: 60 }).map((_, i) => {
    const left = Math.random() * 100;
    const height = 20 + Math.random() * 40;
    const duration = 0.5 + Math.random() * 1.5;
    const delay = Math.random() * -5;
    const opacity = 0.1 + Math.random() * 0.2; 

    return (
      <div
        key={i}
        className="drop"
        style={{
          left: `${left}%`,
          height: `${height}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          background: `rgba(255,255,255,${opacity})`
        }}
      />
    );
  });

  return <div className="rain">{drops}</div>;
}

export default Rain;