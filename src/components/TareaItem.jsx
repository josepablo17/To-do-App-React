function TareaItem({
  tarea,
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
    <li className="tarea-item">
      {idEnEdicion === tarea.id ? (
        <>
          <input
            type="text"
            className="input-editar"
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
          />

          <div className="acciones">
            <button
              className="btn-editar"
              onClick={() => onGuardar(tarea.id)}
            >
              Guardar
            </button>

            <button
              className="btn-cancelar"
              onClick={onCancelar}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            className={`tarea-texto ${tarea.completada ? 'completada' : ''}`}
          >
            {tarea.texto}
          </span>

          <div className="acciones">
            <button
              className="btn-editar"
              onClick={() => onEditar(tarea.id, tarea.texto)}
            >
              Editar
            </button>

            <button
              className="btn-eliminar"
              onClick={() => onEliminar(tarea.id)}
            >
              Eliminar
            </button>

            <button
              className="btn-completar"
              onClick={() => onCompletar(tarea.id)}
            >
              {tarea.completada ? 'Descompletar' : 'Completar'}
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TareaItem;