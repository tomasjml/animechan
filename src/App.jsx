import reactLogo from './assets/react.svg'
import CardAnime from './components/Card';
import './App.css'
import { Container } from '@nextui-org/react';
import { Col, Row, } from "@nextui-org/react";

function App() {
  return (
    <div className="App">
      <Container fluid>
          {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>AnimeChan</h1>
        <Row>
          <Col>
            <CardAnime 
              imageBg="https://media.kitsu.io/anime/poster_images/1/original.jpg?1591625948"
              imageBgAlt="imageBgAlt"
              avRating="avRating"
              canonicalTitle="canonicalTitle"
              ageRating="ageRating"
              subtype="subtype"
              popularityRank="popularityRank"
            />
          </Col>
          <Col>
           <CardAnime 
              imageBg="https://media.kitsu.io/anime/poster_images/1/original.jpg?1591625948"
              imageBgAlt="imageBgAlt"
              avRating="avRating"
              canonicalTitle="canonicalTitle"
              ageRating="ageRating"
              subtype="subtype"
              popularityRank="popularityRank"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
