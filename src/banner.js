import './css/banner.css'
import Info from "./info.json"

function Banner() {
  return (
    <section className="banner">
      <div className="skyline">
        {Array.from({ length: 50 }).map((_, i) => {
          const width = 20 + Math.random() * 100;
          const height = 40 + Math.random() * 60;
          return (
            <div
              key={i}
              className="building"
              style={{
                width: `${width}px`,
                height: `${height}%`
              }}
            />
          );
        })}
      </div>

      <div className="banner-content">
        <h1 className="banner-name">{Info.basics.name}</h1>
        <h2 className="banner-tagline">{Info.basics.title}</h2>
        <p className="banner-buzzwords">{Info.basics.subtitle}</p>
      </div>
    </section>
  );
}



export default Banner;
