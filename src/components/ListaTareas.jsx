import TareaItem from './TareaItem';

function ListaTareas({
  tareasFiltradas,
  idEnEdicion,
  textoEditado,
  setTextoEditado,
  onEditar,
  onGuardar,
  onCancelar,
  onEliminar,
  onCompletar
}) {
  return (
    <ul className="lista-tareas">
      {tareasFiltradas.length > 0 ? (
        tareasFiltradas.map((tarea) => (
          <TareaItem
            key={tarea.id}
            tarea={tarea}
            idEnEdicion={idEnEdicion}
            textoEditado={textoEditado}
            setTextoEditado={setTextoEditado}
            onEditar={onEditar}
            onGuardar={onGuardar}
            onCancelar={onCancelar}
            onEliminar={onEliminar}
            onCompletar={onCompletar}
          />
        ))
      ) : (
        <p className="mensaje-vacio">No hay tareas para mostrar.</p>
      )}
    </ul>
  );
}

export default ListaTareas;