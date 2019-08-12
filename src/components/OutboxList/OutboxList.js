// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';

import MailList from "../MailList"

export default class OutboxList extends Component{
  render() {
    const { data: {outbox}, match } = this.props;
    console.log(outbox);
    return <MailList styles="t-outbox-list" list={outbox} url={match}/>
  }
}