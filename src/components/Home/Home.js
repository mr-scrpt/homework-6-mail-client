// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Component } from 'react';
import Style from './Home.module.css';

export default class Home extends Component{
  render() {
    const {match} = this.props;

    return <div>Home!</div>
  }
}