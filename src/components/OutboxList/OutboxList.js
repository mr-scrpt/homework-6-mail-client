// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';


export default class Home extends Component{
  render() {
    const {match} = this.props;

    return <div>Outbox!</div>
  }
}