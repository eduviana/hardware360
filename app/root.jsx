import { Meta, Links, Outlet, Scripts, LiveReload, ScrollRestoration } from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import favicon from "../public/img/favicon.webp";
import { MiProvider } from "./context/miProvider";

export function meta() {
  return {
    charset: "utf-8",
    title: "Hardware 360 - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "icon",
      href: favicon,
      type: "image/webp",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
    },

    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MiProvider>
          <Header />
          {children}
          <Footer />
        </MiProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

// Manejo de errores
// export function CatchBoundary() {
//   const error = useCatch();
//   return (
//     <Document>
//       <p className="error">
//         {error.status} {error.statusText}
//       </p>
//       <Link className="error-enlace" to="/">
//         Volver a la página principal
//       </Link>
//     </Document>
//   );
// }

// export function ErrorBoundary({ error }) {
//   <Document>
//     <p className="error">
//       {error.status} {error.statusText}
//     </p>
//     <Link className="error-enlace" to="/">
//       Volver a la página principal
//     </Link>
//   </Document>;
// }
