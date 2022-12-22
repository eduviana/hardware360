import image from "../../public/img/asset_1.webp";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: 'Hardware 360 - Nosotros',
    description: 'Tienda de hardware'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={image} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Morbi placerat neque in augue cursus, sed finibus nisi efficitur. In
            ultricies mollis nibh et ultricies. Phasellus quis neque dolor. In
            sodales gravida tincidunt. Proin vulputate consequat nisi, ac varius
            est ornare quis. Aliquam tincidunt eros quis massa interdum, eu
            tincidunt purus fringilla. Praesent faucibus dignissim massa, ac
            dictum dolor convallis nec. Maecenas eget tellus accumsan, semper
            nunc ut, ornare sapien. Maecenas commodo sagittis odio vel mollis.
            Nullam faucibus scelerisque velit et aliquam. Nullam venenatis
            pulvinar justo. Mauris et interdum lorem.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
