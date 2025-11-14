import React from "react"
import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap"
import { FaHome, FaPhoneAlt, FaBook, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import "./App.css"

// Imágenes locales
import iesaerea from './assets/img/aerea.jpg'
import tdirector from './assets/img/TrofeoDirector.jpg'
import erasmus from './assets/img/erasmus.jpg'
import bullying from './assets/img/bullying.jpg'
import festlenguas from './assets/img/Festival-lenguas.jpg'
import pterror from './assets/img/Pasaje-del-terror.jpg'
import medio from './assets/img/medio-ambiente.jpg'


const galleryImages = [
  { src: bullying, title: "Campaña contra el Bullying" },
  { src: festlenguas, title: "Festival de las Lenguas" },
  { src: pterror, title: "Pasaje del Terror" },
  { src: medio, title: "Día del Medio Ambiente" },
];


/* ===============================
   DATOS PARA LAS CARDS
================================ */
type CardInfo = {
  id: number
  title: string
  text: string
  img: string
  accent: string
}

const cardsData: CardInfo[] = [
  {
    id: 1,
    title: "Curso 2025-2026",
    text: "Bienvenidos al nuevo curso escolar.",
    img: iesaerea,
    accent: "#38b1e1ff",
  },
  {
    id: 2,
    title: "Trofeo Director",
    text: "Competencia amistosa entre profesores y alumnos.",
    img: tdirector,
    accent: "#cfc60eff",
  },
  {
    id: 3,
    title: "Erasmus +",
    text: "Vive una experiencia única en Europa.",
    img: erasmus,
    accent: "#581b64ff",
  },
]

/* ===============================
   DATOS DEL AUTOCOMPLETE
================================ */
const marvelHeroes = [
  "Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye",
  "Spider-Man","Black Panther","Doctor Strange","Scarlet Witch","Vision",
  "Ant-Man","Wasp","Captain Marvel","Star-Lord","Gamora","Drax",
  "Rocket Raccoon","Groot","Falcon","Winter Soldier",
]

/* ===============================
   COMPONENTES
================================ */

// Header con imagen de fondo
const Header: React.FC = () => (
  <header className="hero">
    <div className="hero-box">
      <h1>IES Cura Valera</h1>
      <p>Instituto de Educación Secundaria</p>
    </div>
  </header>
)

// Barra de navegación superior
const TopNav: React.FC = () => (
  <Navbar bg="light" expand="md" className="mb-3">
    <Container>
      <Navbar.Brand href="#inicio">Bienvenidos a la web del IES Cura Valera</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="ms-auto">
          <Nav.Link href="#inicio"><FaHome /> Inicio</Nav.Link>
          <Nav.Link href="#contacto"><FaPhoneAlt /> Contacto</Nav.Link>
          <Nav.Link href="#programas"><FaBook /> Programas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

// Card individual (recibe props)
const InfoCard: React.FC<CardInfo> = ({ title, text, img, accent }) => {

  const cardStyle = ({ ['--accent']: accent } as unknown) as React.CSSProperties;

  return (
    <Card className="h-100 info-card" style={cardStyle}>
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Galería de imágenes locales
import { Carousel } from "react-bootstrap";

const Gallery: React.FC = () => (
  <div className="gallery-container mt-3">
    <Carousel>
      {galleryImages.map((img, i) => (
        <Carousel.Item key={i}>
          <img
            className="gallery-carousel-img d-block w-100"
            src={img.src}
            alt={img.title}
          />
          <Carousel.Caption className="gallery-caption">
            <p>{img.title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);


// Aside con Autocomplete y vídeo
const Aside: React.FC = () => (
  <aside className="aside-box">
    <h6>Héroes de Marvel</h6>
    <Autocomplete
      disablePortal
      options={marvelHeroes}
      renderInput={(params) => <TextField {...params} label="Buscar héroe" />}
    />
    <div className="mt-3">
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/hQOMyamdPfk?rel=0"
        title="Vídeo de YouTube"
        allowFullScreen
      />
    </div>
  </aside>
)

// Footer con iconos de redes sociales
const Footer: React.FC = () => (
  <footer className="footer">
    <div className="icons">
      <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
      <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
      <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
    </div>
  </footer>
)

/* ===============================
   APP PRINCIPAL
================================ */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <TopNav />
      <Container>
        <Row className="g-3">
          {/* SECTION principal */}
          <Col md={8} as="section">
            <Row xs={1} md={3} className="g-3">
              {cardsData.map((c) => (
                <Col key={c.id}>
                  <InfoCard {...c} />
                </Col>
              ))}
            </Row>
            <Gallery />
          </Col>

          {/* ASIDE */}
          <Col md={4}>
            <Aside />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
