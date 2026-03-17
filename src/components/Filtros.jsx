function Filtros({ setFiltro }) {
  return (
    <div className="filtros">
      <button onClick={() => setFiltro('todas')}>Todas</button>
      <button onClick={() => setFiltro('completadas')}>Completadas</button>
      <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
    </div>
  );
}

export default Filtros;