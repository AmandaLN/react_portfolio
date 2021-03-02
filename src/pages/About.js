import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero style={{ marginTop: 100 }}backgroundImage="https://lh3.googleusercontent.com/19Q0FRV9xBqcFCZpqeplf-4MVwnGVaEZKZ4qZwim8cKeMF13v0eZebXLNQsSuxHT54DGoICjUQB_7W5gmPekUckyKAIVBF4dzH8BPOQ9SXTyFj_6xmG77piooGymI7601TZtTw1qthq4gWAdPHsBkUS6jt7sUX9A0iKuZEKGedKzAp_gM3kXbRL2Bb4aAWrMFgMo5yi_P-TbM43IijzrsH4crfGzG83b4AxF4qk_pBAXKwaStlYIgxD_A11cIt8w_YMz2PUMiMC5y-7JHuHKlFlQA-gzBFj9Z6qorRX5h6AcfH0bS-hIZ0h_Xcmd1u2_9_6YQhG2198MbNEDgiiMErTM_9S7FQbfkciEnF_zteECUwbo6hgfjO0AVfsPG1WWcRucIF3brgEwHrpHOa_xXI3RRzgNV-kq2rGKrhdP-nyv0R8dC3X5sDo56WfcGMtE3DbtSpTBrNElbB4BROthg51MkQSNAiR3_KhZhw2LVfgGoLTYFSaBMZpZqDLt4e2eHaZ9JVXOM2RkkwwajWOiJB0SBY4CIpaviDbs06EoEg9bMoHyAhaanQkPIsuGg-mby-js2fhHGnuw_EAb3oKhJBtGwDWBlzkM-iLoqj738W7Rpfwwm2ct7XZ1iAHAr7TAFQ55V8Cq9oUfIExSHXrHRxN2t4CIzLOIEw-0NVduSPA6hBoWDoyKbNEwYU4P=w583-h943-no?authuser=0">
        <h2>Amanda Nelson</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h2>Welcome</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p> Hello there! Let's dive into getting to know a little more about me. One of the most important
          things is that I love learning. Be it picking up a guitar, learning to tattoo, or jumping into the world of
          coding! Think of me as a Jane of all trades, trying to master some. I have always been artistic, and I am a
          published writer. I fancy myself a traveler, getting out to see what the world has to offer has always excited me.
        </p>
        <p>Reading and writting are two of my favorite things to do. Combinding all of these things into one career was tough. 
          Until I came upon Web development! So far I love it all. I pride myself on working hard and I push myself to complete everything I
          start. </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
