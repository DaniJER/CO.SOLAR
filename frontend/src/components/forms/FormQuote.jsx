"use client";
import "@/style-components/form.css";
import React, { useState } from "react";
import data from "../../data/departamentos_ciudades_colombia.json";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";

const Form = () => {
  // Funcionalidad para el select de departamentos y ciudades
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
    if (e.target.value === "no") {
      setResNumAire(0);
      setAiresData([]);
      setErrorNumAire("");
    }
  };

  const [electrodomesticosData, setElectrodomesticosData] = useState([]);
  const [resNumElectro, setResNumElectro] = useState(0);
  const [errorNumElectro, setErrorNumElectro] = useState("");

  const handleNumElectroChange = (e) => {
    const valor = e.target.value;
    const num = parseInt(valor, 10);

    if (valor === "" || num >= 0) {
      setResNumElectro(valor);
      setErrorNumElectro("");

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
      setElectrodomesticosData([]);
    }
  };

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

  const renderElectrodomesticosInputs = () => {
    const numberOfElectros = parseInt(resNumElectro, 10);
    if (isNaN(numberOfElectros) || numberOfElectros <= 0) {
      return null;
    }

    return Array.from({ length: numberOfElectros }).map((_, index) => (
      <Box
        key={`electro-${index}`}
        sx={{
          mb: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" component="h4" gutterBottom>
          Datos del Electrodoméstico #{index + 1}
        </Typography>

        <FormControl fullWidth sx={{ mt: 3, mb: 2 }}>
          <InputLabel id={`type-electro-${index}-label`}>
            Tipo de Electrodoméstico
          </InputLabel>
          <Select
            labelId={`type-electro-${index}-label`}
            id={`type-electro-${index}`}
            value={electrodomesticosData[index]?.tipo || ""}
            label="Tipo de Electrodoméstico"
            onChange={(e) => handleElectroTypeChange(index, e)}
          >
            <MenuItem value="">Seleccione el tipo</MenuItem>
            <MenuItem value="nevera">Nevera</MenuItem>
            <MenuItem value="lavadora">Lavadora</MenuItem>
            <MenuItem value="televisor">Televisor</MenuItem>
            <MenuItem value="horno">Horno Microondas</MenuItem>
            <MenuItem value="computador">Computador</MenuItem>
            <MenuItem value="secador">Secador de pelo</MenuItem>
            <MenuItem value="plancha">Plancha</MenuItem>
            <MenuItem value="cafetera">Cafetera</MenuItem>
            <MenuItem value="licuadora">Licuadora</MenuItem>
            <MenuItem value="otros">Otros</MenuItem>
          </Select>
        </FormControl>
      </Box>
    ));
  };

  const [resNumAire, setResNumAire] = useState(0);
  const [errorNumAire, setErrorNumAire] = useState("");
  const [airesData, setAiresData] = useState([]); // Asegúrate de que airesData esté definido aquí

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

  const renderAiresInputs = () => {
    const numberOfAires = parseInt(resNumAire, 10);
    if (isNaN(numberOfAires) || numberOfAires <= 0) {
      return null;
    }

    return Array.from({ length: numberOfAires }).map((_, index) => (
      <Box
        key={`aire-${index}`}
        sx={{
          mb: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" component="h4" gutterBottom>
          Datos del Aire Acondicionado #{index + 1}
        </Typography>

        <FormControl fullWidth sx={{ mt: 3, mb: 2 }}>
          <InputLabel id={`type-aire-${index}-label`}>Tipo de aire</InputLabel>
          <Select
            labelId={`type-aire-${index}-label`}
            id={`type-aire-${index}`}
            value={airesData[index]?.tipo || ""}
            label="Tipo de aire"
            onChange={(e) => handleAireTypeChange(index, e)}
          >
            <MenuItem value="">Seleccione el tipo</MenuItem>
            <MenuItem value="convencional">Convencional</MenuItem>
            <MenuItem value="inverter">Inverter</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id={`voltage-aire-${index}-label`}>Voltaje</InputLabel>
          <Select
            labelId={`voltage-aire-${index}-label`}
            id={`voltage-aire-${index}`}
            value={airesData[index]?.voltaje || ""}
            label="Voltaje"
            onChange={(e) => handleAireVoltageChange(index, e)}
          >
            <MenuItem value="">Seleccione el voltaje</MenuItem>
            <MenuItem value="110W">110W</MenuItem>
            <MenuItem value="220W">220W</MenuItem>
            <MenuItem value="trifasico">Trifásico</MenuItem>
          </Select>
        </FormControl>
      </Box>
    ));
  };

  // SECCION DE FORMULARIO
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        mt: 4,
        border: "1px solid #eee",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <h1>Ingresa tus datos para realizar la consulta</h1>
      <form>
        <TextField
          fullWidth
          label="Nombres"
          id="nameInput"
          placeholder="Escribe tu nombre"
          variant="outlined" // 'outlined', 'filled', 'standard'
          margin="normal" // Agrega margen superior e inferior
        />

        <TextField
          fullWidth
          label="Apellidos"
          id="lastNameInput"
          placeholder="Escribe tus apellidos"
          variant="outlined"
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="departamento-label">Departamento</InputLabel>
          <Select
            labelId="departamento-label"
            id="departamento"
            value={departamento}
            label="Departamento"
            onChange={handleDepartamentoChange}
          >
            <MenuItem value="">Seleccione su departamento</MenuItem>
            {Object.keys(data).map((dep) => (
              <MenuItem key={dep} value={dep}>
                {dep}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="ciudad-label">Ciudad</InputLabel>
          <Select
            labelId="ciudad-label"
            id="ciudad"
            value={ciudad}
            label="Ciudad"
            onChange={(e) => setCiudad(e.target.value)}
            disabled={!departamento}
          >
            <MenuItem value="">Seleccione una ciudad</MenuItem>
            {ciudades.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="vivienda-label">Vivienda</InputLabel>
          <Select
            labelId="vivienda-label"
            id="vivienda"
            defaultValue="" // Usa defaultValue si no manejas estado para esto
            label="Vivienda"
            aria-label="Default select example"
          >
            <MenuItem value="">Seleccione el tipo de vivienda</MenuItem>
            <MenuItem value="Residencial">Residencial</MenuItem>
            <MenuItem value="Comercial">Comercial</MenuItem>
            <MenuItem value="Industrial">Industrial</MenuItem>
          </Select>
        </FormControl>

        {/* --- SECCIÓN DEL NÚMERO DE ELECTRODOMÉSTICOS Y SUS DETALLES --- */}
        <TextField
          fullWidth
          type="number"
          label="Número de electrodomésticos"
          id="numElectrosInput"
          placeholder="Número de electrodomésticos"
          value={resNumElectro}
          onChange={handleNumElectroChange}
          inputProps={{ min: "0" }}
          error={!!errorNumElectro} // true si errorNumElectro no está vacío
          helperText={errorNumElectro} // Muestra el mensaje de error
          margin="normal"
        />

        {/* Renderiza los inputs de los electrodomésticos dinámicamente */}
        {renderElectrodomesticosInputs()}

        {/* --- FIN SECCIÓN ELECTRODOMÉSTICOS --- */}

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">
            ¿Tiene aires acondicionados en su vivienda?
          </FormLabel>
          <RadioGroup
            row
            aria-label="aires"
            name="radio1"
            value={resAire}
            onChange={handleAireChange}
          >
            <FormControlLabel value="si" control={<Radio />} label="Sí" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {resAire === "si" && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                type="number"
                label="Número de aires"
                id="numAiresInput"
                placeholder="Número de aires"
                value={resNumAire}
                onChange={handleNumAireChange}
                inputProps={{ min: "0" }}
                error={!!errorNumAire}
                helperText={errorNumAire}
                margin="normal"
              />
              {renderAiresInputs()}
            </Box>
          )}
        </FormControl>
        <br></br>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Necesita energía solar para</FormLabel>
          <RadioGroup row aria-label="energia-solar-para" name="radio2">
            <FormControlLabel
              value="dia_noche"
              control={<Radio />}
              label="Día y noche"
            />
            <FormControlLabel
              value="solo_dia"
              control={<Radio />}
              label="Solo día"
            />
          </RadioGroup>
        </FormControl>

        {/* Para la carga de archivos, MUI no tiene un componente directo como input type="file".
            Se suele combinar un Button con un input type="file" oculto. */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Suba su servicio de energía más reciente</FormLabel>
          <input
            accept="image/*,.pdf" // Tipos de archivo aceptados
            style={{ display: "none" }} // Oculta el input file nativo
            id="upload-bill-button"
            type="file"
          />
          <label htmlFor="upload-bill-button">
            <Button variant="contained" component="span">
              Subir Archivo
            </Button>
          </label>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1.9rem",
          }}
        >
          <Button variant="contained" color="primary">
            Enviar formulario
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
