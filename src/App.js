import React, { Component } from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import { TouchVGView } from 'react-native-touchvg';
import Tools from './Tools';
import styles from './styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      command: 'splines',
    }
  }

  onCommand(command) {
    this.setState({ command });
  }

  onEraseView() {
    this.refs.touchvg.eraseView();
  }

  onRedo() {
    this.refs.touchvg.redo();
  }

  onUndo() {
    this.refs.touchvg.undo();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchVGView
          ref={'touchvg'}
          command={this.state.command}
          style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
        <Tools
          onCommand={this.onCommand.bind(this)}
          onEraseView={this.onEraseView.bind(this)}
          onRedo={this.onRedo.bind(this)}
          onUndo={this.onUndo.bind(this)} />
      </View>
    );
  }
}

export default App;
