import './banner.css';


function Banner() {

  return (
    <section className="banner">
      <div className="skyline">
        {Array.from({ length: 50 }).map((_, i) => {
          const width = 20 + Math.random() * 100; // wider buildings
          const height = 40 + Math.random() * 60; // percentage of banner height
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
        <h1 className="banner-name">ETHAN YOUMANS</h1>
        <h2 className="banner-tagline">Overly Confident Programmer</h2>
        <p className="banner-buzzwords">System Architecture • Applied Algorithms • OOP • Full-Stack Development • ML</p>
      </div>
    </section>
  );
}



export default Banner;
