import amd from "../../public/img/carousel-marcas/amd.webp";
import aorus from "../../public/img/carousel-marcas/aorus.webp";
import apple from "../../public/img/carousel-marcas/apple.webp";
import asus from "../../public/img/carousel-marcas/asus.webp";
import corsair from "../../public/img/carousel-marcas/corsair.webp";
import dell from "../../public/img/carousel-marcas/dell.webp";
import gigabyte from "../../public/img/carousel-marcas/gigabyte.webp";
import hyperx from "../../public/img/carousel-marcas/hyperx.webp";
import intel from "../../public/img/carousel-marcas/intel.webp";
import kingstone from "../../public/img/carousel-marcas/kingston.webp";
import lenovo from "../../public/img/carousel-marcas/lenovo.webp";
import logitech from "../../public/img/carousel-marcas/logitech.webp";
import msi from "../../public/img/carousel-marcas/msi.webp";
import nvidia from "../../public/img/carousel-marcas/nvidia.webp";
import palit from "../../public/img/carousel-marcas/palit.webp";

const CarouselMarcas = () => {
  return (
    <>
      <div
        className="my-5 p-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-xs-3 row-cols-md-6 justify-content-center align-items-center gap-5">
            <div className="col p-2">
              <img src={amd} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={aorus} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={apple} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={asus} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={corsair} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={dell} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={msi} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={palit} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={gigabyte} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={hyperx} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={intel} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={kingstone} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={lenovo} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={logitech} className="" alt="..." />
            </div>
            <div className="col p-2">
              <img src={nvidia} className="" alt="..." />
            </div>
          </div>
        </div>
        {/* <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap align-items-center g-5">
          <img src={amd} className="" alt="..." />
          <img src={aorus} className="" alt="..." />
          <img src={apple} className="" alt="..." />
          <img src={asus} className="" alt="..." />
          <img src={corsair} className="" alt="..." />
          <img src={dell} className="" alt="..." />
          <img src={msi} className="" alt="..." />
          <img src={palit} className="" alt="..." />
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap align-items-center g-5">
          <img src={gigabyte} className="" alt="..." />
          <img src={hyperx} className="" alt="..." />
          <img src={intel} className="" alt="..." />
          <img src={kingstone} className="" alt="..." />
          <img src={lenovo} className="" alt="..." />
          <img src={logitech} className="" alt="..." />
          <img src={nvidia} className="" alt="..." />
        </div>
      </div> */}
      </div>
    </>
  );
};

export default CarouselMarcas;
