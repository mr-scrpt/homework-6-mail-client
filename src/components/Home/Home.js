// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Component } from 'react';


export default class Home extends Component{
  render() {
    const {match} = this.props;
    console.log(match);
    return <div>Home!</div>
  }
}