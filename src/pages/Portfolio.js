import React, { Component } from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import projects from "../projects.json";
import Row from "../components/Row";
import Col from "../components/Col";


class Portfolio extends Component {
  state = {
    projects
  };


  // Mapping over this.state.project and rendering a Card component for each project object
  render() {
    return (
      <Wrapper>
        <Row>
        <Col size="md-12 text-align: center">
        <h1>Project List</h1>
        </Col>
        </Row>
        {this.state.projects.map(project => (
          <Card
            
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;
