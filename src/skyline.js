import "./css/skyline.css"

function Skyline() {
    return(
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
    )
}

export default Skyline