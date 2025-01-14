import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { comprobarCantidadImagenes } from "~/helpers/comprobarCantidadImagenes";

useOutletContext;

export function meta() {
  return {
    title: "Hardware360 - Carrito",
    description: "Carrito de compras, productos, hardware",
  };
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarProducto } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);



  return (
    <ClientOnly fallback={"cargando..."}>
      {() => (
        <section className="h-100 h-custom">
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="h5">
                          Productos que agregaste al carrito
                        </th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrito?.length === 0
                        ? <tr><td>"Carrito Vacio"</td></tr>
                        : carrito?.map((producto) => (
                            <tr key={producto.id}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={comprobarCantidadImagenes(
                                      producto.imagen
                                    )}
                                    className="img-fluid rounded-3"
                                    style={{ width: 120 }}
                                    alt={`Imagen del producto ${producto.modelo}`}
                                  />
                                  <div className="flex-column ms-4">
                                    <p className="mb-2">{producto.marca}</p>
                                    <p className="mb-0">{producto.modelo}</p>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <div className="d-flex flex-row">
                                  <button className="btn btn-link px-2">
                                    <i className="fas fa-minus" />
                                  </button>
                                  <select
                                    className="w-50"
                                    value={producto.cantidad}
                                    onChange={(e) =>
                                      actualizarCantidad({
                                        cantidad: +e.target.value,
                                        id: producto.id,
                                      })
                                    }
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>

                                  <button className="btn btn-link px-2">
                                    <i className="fas fa-plus" />
                                  </button>
                                </div>
                              </td>

                              <td className="align-middle">
                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.precio)}
                                 
                                </p>
                              </td>
                              <td className="align-middle">
                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(producto.cantidad * producto.precio)}
                                  ${}
                                </p>
                              </td>

                              <td className="align-middle">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => eliminarProducto(producto.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="card shadow-2-strong mb-5 mb-lg-0"
                  style={{ borderRadius: 16 }}
                >
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                        <form>
                          <div className="d-flex flex-row pb-3">
                            <div className="d-flex align-items-center pe-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="radioNoLabel"
                                id="radioNoLabel1v"
                                defaultValue=""
                                aria-label="..."
                                defaultChecked=""
                              />
                            </div>
                            <div className="rounded border w-100 p-3">
                              <p className="d-flex align-items-center mb-0">
                                <i className="fab fa-cc-mastercard fa-2x text-dark pe-2" />
                                Credit Card
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row pb-3">
                            <div className="d-flex align-items-center pe-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="radioNoLabel"
                                id="radioNoLabel2v"
                                defaultValue=""
                                aria-label="..."
                              />
                            </div>
                            <div className="rounded border w-100 p-3">
                              <p className="d-flex align-items-center mb-0">
                                <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2" />
                                Debit Card
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row">
                            <div className="d-flex align-items-center pe-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="radioNoLabel"
                                id="radioNoLabel3v"
                                defaultValue=""
                                aria-label="..."
                              />
                            </div>
                            <div className="rounded border w-100 p-3">
                              <p className="d-flex align-items-center mb-0">
                                <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2" />
                                PayPal
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-6">
                        <div className="row">
                          <div className="col-12 col-xl-6">
                            <div className="form-outline mb-4 mb-xl-5">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="John Smith"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Name on card
                              </label>
                            </div>
                            <div className="form-outline mb-4 mb-xl-5">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                placeholder="MM/YY"
                                size={7}
                                minLength={7}
                                maxLength={7}
                              />
                              <label className="form-label" htmlFor="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6">
                            <div className="form-outline mb-4 mb-xl-5">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="1111 2222 3333 4444"
                                minLength={19}
                                maxLength={19}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Card Number
                              </label>
                            </div>
                            <div className="form-outline mb-4 mb-xl-5">
                              <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg"
                                placeholder="●●●"
                                size={1}
                                minLength={3}
                                maxLength={3}
                              />
                              <label className="form-label" htmlFor="password">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-xl-3">
                        <div
                          className="d-flex justify-content-between"
                          style={{ fontWeight: 500 }}
                        >
                          <p className="mb-2">Total</p>
                          <p className="mb-2">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total)}</p>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ fontWeight: 500 }}
                        >
                          <p className="mb-0">Shipping</p>
                          <p className="mb-0">$2.99</p>
                        </div>
                        <hr className="my-4" />
                        <div
                          className="d-flex justify-content-between mb-4"
                          style={{ fontWeight: 500 }}
                        >
                          <p className="mb-2">Total (tax included)</p>
                          <p className="mb-2">$26.48</p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>Checkout</span>
                            <span>$26.48</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </ClientOnly>
  );
};

export default Carrito;

// <tr>
// <th scope="row">
//   <div className="d-flex align-items-center">
//     <img
//       src="https://i.imgur.com/2DsA49b.webp"
//       className="img-fluid rounded-3"
//       style={{ width: 120 }}
//       alt="Book"
//     />
//     <div className="flex-column ms-4">
//       <p className="mb-2">Thinking, Fast and Slow</p>
//       <p className="mb-0">Daniel Kahneman</p>
//     </div>
//   </div>
// </th>
// <td className="align-middle">
//   <p className="mb-0" style={{ fontWeight: 500 }}>
//     Digital
//   </p>
// </td>
// <td className="align-middle">
//   <div className="d-flex flex-row">
//     <button
//       className="btn btn-link px-2"
//     >
//       <i className="fas fa-minus" />
//     </button>
//     <input
//       id="form1"
//       min={0}
//       name="quantity"
//       defaultValue={2}
//       type="number"
//       className="form-control form-control-sm"
//       style={{ width: 50 }}
//     />
//     <button
//       className="btn btn-link px-2"

//     >
//       <i className="fas fa-plus" />
//     </button>
//   </div>
// </td>
// <td className="align-middle">
//   <p className="mb-0" style={{ fontWeight: 500 }}>
//     $9.99
//   </p>
// </td>
// </tr>
// <tr>
// <th scope="row" className="border-bottom-0">
//   <div className="d-flex align-items-center">
//     <img
//       src="https://i.imgur.com/Oj1iQUX.webp"
//       className="img-fluid rounded-3"
//       style={{ width: 120 }}
//       alt="Book"
//     />
//     <div className="flex-column ms-4">
//       <p className="mb-2">
//         Homo Deus: A Brief History of Tomorrow
//       </p>
//       <p className="mb-0">Yuval Noah Harari</p>
//     </div>
//   </div>
// </th>
// <td className="align-middle border-bottom-0">
//   <p className="mb-0" style={{ fontWeight: 500 }}>
//     Paperback
//   </p>
// </td>
// <td className="align-middle border-bottom-0">
//   <div className="d-flex flex-row">
//     <button
//       className="btn btn-link px-2"

//     >
//       <i className="fas fa-minus" />
//     </button>
//     <input
//       id="form2"
//       min={0}
//       name="quantity"
//       defaultValue={1}
//       type="number"
//       className="form-control form-control-sm"
//       style={{ width: 50 }}
//     />
//     <button
//       className="btn btn-link px-2"

//     >
//       <i className="fas fa-plus" />
//     </button>
//   </div>
// </td>
// <td className="align-middle border-bottom-0">
//   <p className="mb-0" style={{ fontWeight: 500 }}>
//     $13.50
//   </p>
// </td>
// </tr>
