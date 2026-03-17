function ContadorTareas({ total, completadas, pendientes }) {
  return (
    <div className="contador-tareas">
      <p>Total: {total}</p>
      <p>Completadas: {completadas}</p>
      <p>Pendientes: {pendientes}</p>
    </div>
  );
}

export default ContadorTareas;