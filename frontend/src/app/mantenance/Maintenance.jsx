"use client";
import "./style-components/maintenance.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//PAGINA DE MANTENIMIENTO PROVISIONAL
const Maintenance = () => {
  // Obfuscar número para evitar scrapers simples
  const phoneSucre = ["301", "847", "33", "95"].join("");
  const phoneCaucasia1 = ["301", "508", "04", "61"].join("");
  const phoneCaucasia2 = ["324", "162", "18", "64"].join("");
  const message =
    "Hola, vengo de la pagina web y estoy interesado en sus servicios.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappSucreUrl = `https://wa.me/${phoneSucre}?text=${encodedMessage}`;
  const whatsappCaucasia1Url = `https://wa.me/${phoneCaucasia1}?text=${encodedMessage}`;
  const whatsappCaucasia2Url = `https://wa.me/${phoneCaucasia2}?text=${encodedMessage}`;

  return (
    <div className="mantenance-style">
      <div className="contenido">
        <h2>Nos encontramos en mantenimiento para mejorar tu experiencia</h2>
        <h3>
          Pero no te preocupes, te podemos asesorar por nuestros canales de
          WhatsApp
        </h3>

        <p>Cordoba y Sucre</p>
        <div className="contact-me1"></div>
        <a
          href={whatsappSucreUrl}
          target="_blank"
          rel="noopener 
          noreferrer"
        >
          <button className="button1">
            <WhatsAppIcon className="whatsapp-icon" />
            Contactar por WhatsApp
          </button>
        </a>

        <p>Caucasia y Antioquia</p>
        <div className="contact-me2">
          <a
            href={whatsappCaucasia1Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <WhatsAppIcon className="whatsapp-icon" />
              Contactar por WhatsApp
            </button>
          </a>

          <a
            href={whatsappCaucasia2Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <WhatsAppIcon className="whatsapp-icon" />
              Contactar por WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
