import { useState, useEffect } from 'react';
import './App.css';
import FormularioTarea from './components/FormularioTarea';
import Filtros from './components/Filtros';
import ContadorTareas from './components/ContadorTareas';
import ListaTareas from './components/ListaTareas';

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [idEnEdicion, setIdEnEdicion] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]); 

  const manejarCambioInput = (evento) => {
    setTarea(evento.target.value);
  };

  const manejarAgregarTarea = () => {
    if (tarea.trim() === '') {
      console.log('No pueden haber campos vacíos');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea('');
  };

  const manejarEliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const manejarCompletarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const manejarEditarTarea = (id, textoActual) => {
    setIdEnEdicion(id);
    setTextoEditado(textoActual);
  };

  const manejarGuardarEdicion = (id) => {
    if (textoEditado.trim() === '') {
      console.log('La tarea editada no puede quedar vacía');
      return;
    }

    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, texto: textoEditado }
          : tarea
      )
    );

    setIdEnEdicion(null);
    setTextoEditado('');
  };

  const manejarCancelarEdicion = () => {
    setIdEnEdicion(null);
    setTextoEditado('');
  };

  let tareasFiltradas = tareas;

  if (filtro === 'completadas') {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  } else if (filtro === 'pendientes') {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  }

  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;
  const tareasPendientes = tareas.filter((tarea) => !tarea.completada).length;

  return (
    <div className="container">
      <h1>To-Do App</h1>

      <FormularioTarea
        tarea={tarea}
        onChange={manejarCambioInput}
        onAgregar={manejarAgregarTarea}
      />

      <Filtros setFiltro={setFiltro} />

      <ContadorTareas
        total={totalTareas}
        completadas={tareasCompletadas}
        pendientes={tareasPendientes}
      />

      <ListaTareas
        tareasFiltradas={tareasFiltradas}
        idEnEdicion={idEnEdicion}
        textoEditado={textoEditado}
        setTextoEditado={setTextoEditado}
        onEditar={manejarEditarTarea}
        onGuardar={manejarGuardarEdicion}
        onCancelar={manejarCancelarEdicion}
        onEliminar={manejarEliminarTarea}
        onCompletar={manejarCompletarTarea}
      />
    </div>
  );
}

export default App;