import React, { Component } from 'react';

import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet } from '../index';
import { addUserMessage } from '..';

const avatar = require("../assets/avatar.jpg");

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this team chat!');
    addResponseMessage('Hi, Team!');    
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();      
        addResponseMessage(newMessage);      
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  handleSubmit = (msgText: string) => {
    return true;
  }

  render() {
    return (
      <div>
        <Widget
          titleAvatar={avatar}
          title="Alex"
          subtitle=""
          profileAvatar={avatar}
          senderPlaceHolder="Type a message..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
