const CarouselProducto = ({ imagen }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark "
      data-bs-ride="false"
    >
      {imagen.data.length === undefined && (
        <>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label={`Slide ${0}`}
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imagen.data.attributes.url}
                className="d-block w-75 mx-auto"
                alt="..."
              />
            </div>
          </div>
        </>
      )}

      {imagen.data.length > 0 && imagen.data.map((img, i) => (
        
          <div key={img.id} className="carousel-inner">
            <div className={`carousel-item ${i == 0 ? "active" : ""}`}>
              <img
                src={img.attributes.url}
                className="d-block w-75 mx-auto"
                alt="..."
              />
            </div>
          </div>
      
      ))}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselProducto;

// {imagen.data.length === undefined && (
//   <>
//     <div className="carousel-indicators">
//       <button
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide-to={0}
//         className="active"
//         aria-current="true"
//         aria-label={`Slide ${0}`}
//       />
//     </div>
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         <img
//           src={imagen.data.attributes.url}
//           className="d-block w-75 mx-auto"
//           alt="..."
//         />
//       </div>
//     </div>
//   </>
// )}

// const CarouselProducto = ({ imagen }) => {
//   return (
//     <div
//       id="carouselExampleIndicators"
//       className="carousel carousel-dark slide"
//       data-bs-ride="false"
//     >
//       {imagen.data.length === undefined && (
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//         </div>
//       )}

//       {imagen.data.length === 2 && (
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={1}
//             aria-label="Slide 2"
//           />
//         </div>
//       )}

//       {imagen.data.length === 3 && (
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={1}
//             aria-label="Slide 2"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={2}
//             aria-label="Slide 2"
//           />
//         </div>
//       )}

//       {imagen.data.length === 4 && (
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={1}
//             aria-label="Slide 2"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={2}
//             aria-label="Slide 2"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={3}
//             aria-label="Slide 3"
//           />
//         </div>
//       )}

//       {imagen.data.length === 5 && (
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={0}
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           />
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={1}
//             aria-label="Slide 2"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={2}
//             aria-label="Slide 2"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={3}
//             aria-label="Slide 3"
//           />

//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={4}
//             aria-label="Slide 4"
//           />
//         </div>
//       )}

//       {imagen.data.length === undefined && (
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={imagen.data.attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//         </div>
//       )}

//       {imagen.data.length === 2 && (
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={imagen.data[0].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[1].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//         </div>
//       )}

//       {imagen.data.length === 3 && (
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={imagen.data[0].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[1].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[2].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//         </div>
//       )}

//       {imagen.data.length === 4 && (
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={imagen.data[0].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[1].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[2].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[3].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//         </div>
//       )}

//       {imagen.data.length === 5 && (
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={imagen.data[0].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[1].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[2].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[3].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={imagen.data[4].attributes.url}
//               className="d-block w-75 mx-auto"
//               alt="..."
//             />
//           </div>
//         </div>
//       )}

//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselProducto;
