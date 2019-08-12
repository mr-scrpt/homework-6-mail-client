// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';

import MailList from "../MailList"

export default class InboxList extends Component{

  render() {
    const { data: {inbox}, match } = this.props;
    return <MailList styles="t-inbox-list" list={inbox} match={match}/>
  }
}