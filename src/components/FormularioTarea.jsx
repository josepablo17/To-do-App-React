function FormularioTarea({ tarea, onChange, onAgregar }) {
  return (
    <div className="form-tarea">
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={tarea}
        onChange={onChange}
      />
      <button onClick={onAgregar}>Agregar</button>
    </div>
  );
}

export default FormularioTarea;