"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/style-components/form.css";
import React, { useState } from "react";
import data from "../data/departamentos_ciudades_colombia.json";
import { div } from "@tensorflow/tfjs";

const Form = () => {
  //Funcionalidad para el select de departamentos y ciudades
  const [departamento, setDepartamento] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [ciudad, setCiudad] = useState("");

  const handleDepartamentoChange = (e) => {
    const selected = e.target.value;
    setDepartamento(selected);
    setCiudades(data[selected] || []);
    setCiudad("");
  };

  const [resAire, setResAire] = useState("");
  const handleAireChange = (e) => {
    setResAire(e.target.value);
    // Cuando se cambia la respuesta a "no", resetear el número y los datos de aires
    if (e.target.value === "no") {
      setResNumAire(0); // Resetea el número de aires
      setAiresData([]); // Resetea los datos de los aires
      setErrorNumAire(""); // Limpia cualquier error previo
    }
  };

  // --- NUEVO ESTADO PARA LOS DATOS DE CADA ELECTRODOMÉSTICO ---
  // Almacenará un array de objetos, donde cada objeto tendrá { tipo: '', cantidad: '' }
  const [electrodomesticosData, setElectrodomesticosData] = useState([]);

  // Estado para almacenar el número de electrodomésticos
  const [resNumElectro, setResNumElectro] = useState(0); // Inicializar en 0

  // Estado para manejar el mensaje de error
  const [errorNumElectro, setErrorNumElectro] = useState("");

  // Manejador del input de número de electrodomésticos
  const handleNumElectroChange = (e) => {
    const valor = e.target.value;
    const num = parseInt(valor, 10);

    if (valor === "" || num >= 0) {
      setResNumElectro(valor);
      setErrorNumElectro("");

      // --- AJUSTAR EL ARRAY electrodomesticosData CUANDO CAMBIA EL NÚMERO ---
      setElectrodomesticosData((prevElectroData) => {
        const newElectroData = Array(num > 0 ? num : 0)
          .fill(null)
          .map((_, index) => {
            return prevElectroData[index] || { tipo: "", cantidad: "" };
          });
        return newElectroData;
      });
    } else {
      setResNumElectro(valor);
      setErrorNumElectro(
        "El número de electrodomésticos no puede ser negativo."
      );
      setElectrodomesticosData([]); // Si es negativo, no hay electrodomésticos válidos
    }
  };

  // --- MANEJADORES PARA LOS INPUTS DE ELECTRODOMÉSTICOS DINÁMICOS ---
  const handleElectroTypeChange = (index, e) => {
    const { value } = e.target;
    setElectrodomesticosData((prevElectroData) => {
      const updatedElectroData = [...prevElectroData];
      updatedElectroData[index] = { ...updatedElectroData[index], tipo: value };
      return updatedElectroData;
    });
  };

  const handleElectroQuantityChange = (index, e) => {
    const { value } = e.target;
    setElectrodomesticosData((prevElectroData) => {
      const updatedElectroData = [...prevElectroData];
      updatedElectroData[index] = {
        ...updatedElectroData[index],
        cantidad: value,
      };
      return updatedElectroData;
    });
  };

  // --- FUNCIÓN PARA RENDERIZAR LOS BLOQUES DE ELECTRODOMÉSTICOS ---
  const renderElectrodomesticosInputs = () => {
    const numberOfElectros = parseInt(resNumElectro, 10);
    if (isNaN(numberOfElectros) || numberOfElectros <= 0) {
      return null;
    }

    return Array.from({ length: numberOfElectros }).map((_, index) => (
      <div
        key={`electro-${index}`}
        className="mb-4 p-3 border rounded shadow-sm"
      >
        <p>Datos del Electrodoméstico #{index + 1}</p>
        <div className="form-floating mt-3">
          <select
            className="form-select"
            aria-label={`Tipo de electrodoméstico ${index + 1}`}
            value={electrodomesticosData[index]?.tipo || ""}
            onChange={(e) => handleElectroTypeChange(index, e)}
          >
            <option value="">Seleccione el tipo</option>
            <option value="nevera">Nevera</option>
            <option value="lavadora">Lavadora</option>
            <option value="televisor">Televisor</option>
            <option value="horno">Horno Microondas</option>
            <option value="computador">Computador</option>
            <option value="secador">Secador de pelo</option>
            <option value="plancha">Plancha</option>
            <option value="cafetera">Cafetera</option>
            <option value="licuadora">Licuadora</option>
            <option value="otros">Otros</option>
            {/* Puedes añadir más opciones aquí */}
          </select>
          <label htmlFor={`type-electro-${index}`}>
            Tipo de Electrodoméstico
          </label>
        </div>
      </div>
    ));
  };

  // Estado para almacenar el número de aires
  const [resNumAire, setResNumAire] = useState(0);

  // Estado para manejar el mensaje de error
  const [errorNumAire, setErrorNumAire] = useState("");

  // Manejador del input
  const handleNumAireChange = (e) => {
    const valor = e.target.value;
    const num = parseInt(valor, 10);

    if (valor === "" || num >= 0) {
      setResNumAire(valor);
      setErrorNumAire("");

      setAiresData((prevAiresData) => {
        const newAiresData = Array(num > 0 ? num : 0)
          .fill(null)
          .map((_, index) => {
            return prevAiresData[index] || { tipo: "", voltaje: "" };
          });
        return newAiresData;
      });
    } else {
      setResNumAire(valor);
      setErrorNumAire("El número de aires no puede ser negativo.");
      setAiresData([]);
    }
  };

  // --- MANEJADORES PARA LOS INPUTS DE AIRES DINÁMICOS ---
  const [airesData, setAiresData] = useState([]); // Moved up for clarity

  const handleAireTypeChange = (index, e) => {
    const { value } = e.target;
    setAiresData((prevAiresData) => {
      const updatedAiresData = [...prevAiresData];
      updatedAiresData[index] = { ...updatedAiresData[index], tipo: value };
      return updatedAiresData;
    });
  };

  const handleAireVoltageChange = (index, e) => {
    const { value } = e.target;
    setAiresData((prevAiresData) => {
      const updatedAiresData = [...prevAiresData];
      updatedAiresData[index] = { ...updatedAiresData[index], voltaje: value };
      return updatedAiresData;
    });
  };

  // --- FUNCIÓN PARA RENDERIZAR LOS BLOQUES DE AIRE ---
  const renderAiresInputs = () => {
    const numberOfAires = parseInt(resNumAire, 10);
    if (isNaN(numberOfAires) || numberOfAires <= 0) {
      return null;
    }

    return Array.from({ length: numberOfAires }).map((_, index) => (
      <div key={`aire-${index}`} className="mb-4 p-3 border rounded shadow-sm">
        <h4>Datos del Aire Acondicionado #{index + 1}</h4>
        <div className="form-floating mt-3">
          <select
            className="form-select"
            aria-label={`Tipo de aire ${index + 1}`}
            value={airesData[index]?.tipo || ""}
            onChange={(e) => handleAireTypeChange(index, e)}
          >
            <option value="">Seleccione el tipo</option>
            <option value="convencional">Convencional</option>
            <option value="inverter">Inverter</option>
          </select>
          <label htmlFor={`type-aire-${index}`}>Tipo de aire</label>
        </div>

        <div className="form-floating mt-3">
          <select
            className="form-select"
            aria-label={`Voltaje de aire ${index + 1}`}
            value={airesData[index]?.voltaje || ""}
            onChange={(e) => handleAireVoltageChange(index, e)}
          >
            <option value="">Seleccione el voltaje</option>
            <option value="110W">110W</option>
            <option value="220W">220W</option>
            <option value="trifasico">Trifásico</option>
          </select>
          <label htmlFor={`voltage-aire-${index}`}>Voltaje</label>
        </div>
      </div>
    ));
  };

  //SECCION DE FORMULARIO
  return (
    <div className="form-style-container">
      <form action="">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Escribe tu nombre"
          />
          <label htmlFor="floatingInput">Nombres</label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Escribe tus apellidos"
          />
          <label className="form-label" htmlFor="lastName">
            Apellidos
          </label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="departamento"
            value={departamento}
            onChange={handleDepartamentoChange}
          >
            <option value="">Seleccione su departamento</option>
            {Object.keys(data).map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Departamento</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            disabled={!departamento}
          >
            <option value="">Seleccione una ciudad</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Ciudad</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Default select example"
          >
            <option defaultValue>Seleccione el tipo de vivienda</option>
            <option value="1">Residencial</option>
            <option value="2">Comercial</option>
            <option value="3">Industrial</option>
          </select>
          <label htmlFor="floatingSelect">Vivienda</label>
        </div>

        {/* --- SECCIÓN DEL NÚMERO DE ELECTRODOMÉSTICOS Y SUS DETALLES --- */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className={`form-control ${errorNumElectro ? "is-invalid" : ""}`}
            id="numElectrosInput" // Cambiado id para ser más específico
            placeholder="Número de electrodomésticos"
            value={resNumElectro}
            onChange={handleNumElectroChange}
            min="0" // Asegurarse de que no se puedan ingresar negativos
          />
          <label htmlFor="numElectrosInput">Número de electrodomésticos</label>

          {/* Mensaje de error visible si hay error */}
          {errorNumElectro && (
            <div className="invalid-feedback" style={{ display: "block" }}>
              {errorNumElectro}
            </div>
          )}
        </div>

        {/* Renderiza los inputs de los electrodomésticos dinámicamente */}
        {renderElectrodomesticosInputs()}

        {/* --- FIN SECCIÓN ELECTRODOMÉSTICOS --- */}

        <label htmlFor="">¿Tiene aires acondicionados en su vivienda?</label>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio1"
              id="radioSi"
              value="si"
              onChange={handleAireChange}
              checked={resAire === "si"}
            />
            <label className="form-check-label" htmlFor="radioSi">
              Si
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio1"
              id="radioNo"
              value="no"
              onChange={handleAireChange}
              checked={resAire === "no"}
            />
            <label className="form-check-label" htmlFor="radioNo">
              No
            </label>
          </div>
          {resAire === "si" && (
            <>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className={`form-control ${errorNumAire ? "is-invalid" : ""}`}
                  id="numAiresInput"
                  placeholder="Número de aires"
                  value={resNumAire}
                  onChange={handleNumAireChange}
                  min="0"
                />
                <label htmlFor="numAiresInput">Número de aires</label>

                {errorNumAire && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {errorNumAire}
                  </div>
                )}
              </div>

              {renderAiresInputs()}
            </>
          )}
        </div>
        <label htmlFor="">Necesita energía solar para</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio2"
            id="radioNoche"
          />
          <label className="form-check-label" htmlFor="radioNoche">
            Día y noche
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio2"
            id="radioDia"
          />
          <label className="form-check-label" htmlFor="radioDia">
            Solo día
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Suba su servicio de energía más reciente
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
      </form>
    </div>
  );
};

export default Form;
