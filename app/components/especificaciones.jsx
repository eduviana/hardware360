

const Especificaciones = ({ children }) => {
  return (
    <div className="px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Características</h2>
      <div className="row row-gap py-5 row-cols-1 row-cols-lg-3 bg-light bg-opacity-50 bg-gradient">
        {children}
      </div>
    </div>
  );
};

export default Especificaciones;
