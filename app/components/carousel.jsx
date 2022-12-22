import carousel_1 from "../../public/img/carousel_1.jpg";
import carousel_2 from "../../public/img/carousel_2.jpg";
import carousel_3 from "../../public/img/carousel_3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-height"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner h-100">
        <div
          className="carousel-item active h-100"
          style={{
            backgroundImage: `url(${carousel_1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="carousel-item h-100"
          style={{
            backgroundImage: `url(${carousel_2})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="carousel-item h-100"
          style={{
            backgroundImage: `url(${carousel_3})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
