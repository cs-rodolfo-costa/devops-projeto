import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview">
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link>
        <h2>Overview <small>Por que DevOps sao profissionais de alta performance?</small></h2>
        <Jumbotron>
          <h1>Bem Vindo!</h1> Aqui nosso portal DevOps!
          <br /><br />
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Saiba mais</a> </p>
        </Jumbotron>
      </div>

    );
  }

});

export default Blank;
