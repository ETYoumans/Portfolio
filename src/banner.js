import './css/banner.css'
import Info from "./info.json"

function Banner() {
  return (
    <section className="banner">
      

      <div className="banner-content">
        <h1 className="banner-name">{Info.basics.name}</h1>
        <h2 className="banner-tagline">{Info.basics.title}</h2>
        <p className="banner-buzzwords">{Info.basics.subtitle}</p>
      </div>
    </section>
  );
}



export default Banner;
