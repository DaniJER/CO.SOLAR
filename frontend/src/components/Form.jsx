"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import data from "../data/departamentos_ciudades_colombia.json";

const Form = () => {
  //Funciónalidad para el select de departamentos y ciudades
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
  };

  // Estado para almacenar el número de electrodomésticos
  const [resNumElectro, setResNumElectro] = useState("");

  // Estado para manejar el mensaje de error
  const [errorNumElectro, setErrorNumElectro] = useState("");

  // Manejador del input
  const handleNumElectroChange = (e) => {
    const valor = e.target.value;

    // Validar que no sea número negativo
    if (valor === "" || parseInt(valor) >= 0) {
      setResNumElectro(valor);
      setErrorNumElectro(""); // Limpiar el error si es válido
    } else {
      setResNumElectro(valor); // Aún actualizamos el valor para que el usuario vea lo que escribió
      setErrorNumElectro(
        "El número de electrodomésticos no puede ser negativo."
      );
    }
  };

  // Estado para almacenar el número de aires
  const [resNumAire, setResNumAire] = useState("");

  // Estado para manejar el mensaje de error
  const [errorNumAire, setErrorNumAire] = useState("");

  // Manejador del input
  const handleNumAireChange = (e) => {
    const valor = e.target.value;

    // Validar que no sea número negativo
    if (valor === "" || parseInt(valor) >= 0) {
      setResNumAire(valor);
      setErrorNumAire(""); // Limpiar el error si es válido
    } else {
      setResNumAire(valor); // Aún actualizamos el valor para que el usuario vea lo que escribió
      setErrorNumAire("El número de aires no puede ser negativo.");
    }
  };

  return (
    <form action="" className="form-style">
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

      <div class="form-floating">
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

      <div className="form-floating mb-3">
        <input
          type="number"
          className={`form-control ${errorNumElectro ? "is-invalid" : ""}`}
          id="floatingInput"
          placeholder="Número de electrodomésticos"
          value={resNumElectro}
          onChange={handleNumElectroChange}
        />
        <label htmlFor="floatingInput">Número de electrodomésticos</label>

        {/*Mensaje de error visible si hay error */}
        {errorNumElectro && (
          <div className="invalid-feedback" style={{ display: "block" }}>
            {errorNumElectro}
          </div>
        )}
      </div>

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
                id="floatingInput"
                placeholder="Número de aires"
                value={resNumAire}
                onChange={handleNumAireChange}
              />
              <label htmlFor="floatingInput">Número de aires</label>

              {/*Mensaje de error visible si hay error */}
              {errorNumAire && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errorNumAire}
                </div>
              )}
              <p>Datos de aire 1</p>
            </div>
            {/* SECCIÓN PARA ESCRIBIR QUE TIPO DE AIRES SON Y CUANTO CONSUMEN CADA UNO */}
            <div className="form-floating mt-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Convencional</option>
                <option value="2">Inverter</option>
              </select>
              <label for="floatingSelect">Tipo de aire</label>
            </div>

            <div className="form-floating mt-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">110W</option>
                <option value="2">220W</option>
                <option value="3">Trifasico</option>
              </select>
              <label for="floatingSelect">Voltaje</label>
            </div>
          </>
        )}
      </div>
      <label htmlFor="">Necesita energia solar para</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="radio2"
          id="radioNoche"
        />
        <label className="form-check-label" for="radioNoche">
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
        <label className="form-check-label" for="radioDia">
          Solo día
        </label>
      </div>

      <div class="mb-3">
        <label for="formFile" class="form-label">
          Suba su servicio de energia más reciente
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
    </form>
  );
};

export default Form;
