import { getSomeNotebooks } from "~/models/notebooks.server";
import { getSomePcsEscritorio } from "~/models/pcsEscritorio.server";
import { getSomeDiscosDuros } from "~/models/discosDuros.server";
import { Link, useLoaderData } from "@remix-run/react";
import { getSomeOfertasGaming } from "~/models/ofertasGaming.server";
import { getSomeImpresoras } from "~/models/impresoras.server";

import Carousel from "~/components/carousel";
import ListadoProductos from "~/components/listadoProductos";
import CarouselMarcas from "~/components/carouselMarcas";

import banner1 from "../../public/img/armadorpclargo.jpg";
import banner2 from "../../public/img/banner-empresas-home.webp";
import placas from "../../public/img/placas.jpg";
import perifericos from "../../public/img/perifericos.jpg";
import mothers from "../../public/img/mothers1.jpg";

export function meta() {
  return {
    title: "Hardware 360 - Tienda de hardware",
    descripcion: "Tienda de componentes de pc, notebooks y periféricos",
  };
}

export async function loader() {
  const [notebooks, pcsEscritorio, discosDuros, ofertasGaming, impresoras] =
    await Promise.all([
      getSomeNotebooks(),
      getSomePcsEscritorio(),
      getSomeDiscosDuros(),
      getSomeOfertasGaming(),
      getSomeImpresoras(),
    ]);

  const listadoNotebooks = notebooks.data;
  const listadoPcsEscritorio = pcsEscritorio.data;
  const listadoDiscosDuros = discosDuros.data;
  const listadoOfertasGaming = ofertasGaming.data;
  const listadoImpresoras = impresoras.data;

  return {
    listadoNotebooks,
    listadoPcsEscritorio,
    listadoDiscosDuros,
    listadoOfertasGaming,
    listadoImpresoras,
  };
}

const Index = () => {
  const {
    listadoNotebooks,
    listadoPcsEscritorio,
    listadoDiscosDuros,
    listadoOfertasGaming,
    listadoImpresoras,
  } = useLoaderData();

  return (
    <main style={{ backgroundColor: "#faf9f9" }}>
      <Carousel />

      <div className="container mt-5">
        <section className="my-5">
          <h3 className="fs-2 mb-5">
            <span className="text-dark">Encontrá tu</span>
            {""} <span className="fw-semibold">notebook ideal</span>
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4 rounded notebooks-bg">
            <ListadoProductos
              productos={listadoNotebooks}
              direccion="notebook"
            />
          </div>
        </section>

         <section className="my-5">
          <h3 className="fs-2 mb-5">
            <span className="text-dark">Aprovechá y renová tu</span>
            {""} <span className="fw-semibold">Pc completa</span>
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4 rounded notebooks-bg">
            <ListadoProductos
              productos={listadoPcsEscritorio}
              direccion="pcEscritorio"
            />
          </div>
        </section>

        <article className="my-5">
          <img src={banner1} alt="banner" />
        </article>

        <section className="my-5">
          <h3 className="fs-2 mb-5">
            <span className="text-dark">Potenciá tu PC con el </span>
            {""} <span className="fw-semibold">mejor almacenamiento</span>
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4 notebooks-bg">
            <ListadoProductos
              productos={listadoDiscosDuros}
              direccion="discoDuro"
            />
          </div>
        </section>
      </div>

       <section className="my-5" style={{ backgroundColor: "#1c2331" }}>
        <div className="container py-5">
          <h3 className="fs-2 mb-5 text-white">
            <span className="">LLevá tus juegos al</span>
            {""} <span className="fw-semibold">siguiente nivel</span>
          </h3>
          <div className="row mx-auto justify-content-between gap-2">
            <Link
              to="/placasDeVideo"
              className="col-sm-12 col-md-3 p-0 border-primary"
            >
              <div className="card text-bg-dark">
                <img src={placas} className="card-img" alt="..." />
              </div>
            </Link>

            <Link to="/" className="col-sm-12 col-md-5 p-0">
              <div className="card text-bg-dark h-100">
                <img src={perifericos} className="card-img h-100" alt="..." />
              </div>
            </Link>

            <Link to="/" className="col-sm-12 col-md-3 p-0 border-primary">
              <div className="card text-bg-dark ">
                <img src={mothers} className="card-img" alt="..." />
              </div>
            </Link>
          </div>
          <div className="mt-5 mx-auto">
            <h3 className="fs-2 mb-5 text-white">
              <span className="">Productos gaming</span>
              {""} <span className="fw-semibold">en oferta</span>
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4 notebooks-bg">
              <ListadoProductos
                productos={listadoOfertasGaming}
                direccion="ofertaGaming"
              />
            </div>
          </div>
          <CarouselMarcas />
        </div>
      </section>

      <article className="my-5">
        <div className="container">
          <img src={banner2} alt="banner" />
        </div>
      </article>

      <section className="my-5">
        <div className="container">
          <h3 className="fs-2 mb-5">
            <span className="text-dark">Potenciá tu experiencia con las</span>
            {""} <span className="fw-semibold">mejores impresoras</span>
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4 rounded notebooks-bg">
            <ListadoProductos
              productos={listadoImpresoras}
              direccion="impresora"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
