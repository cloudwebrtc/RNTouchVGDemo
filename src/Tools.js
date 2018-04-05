import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'cursor',
        };
      }

    static propTypes = {
        onCommand: PropTypes.func,
        onEraseView: PropTypes.func,
        onRedo: PropTypes.func,
        onUndo: PropTypes.func,
    }

    render() {
        return (
            <View>
                {/*主工具条*/}
                <View style={styles.tools}>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'select')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"cursor-default-outline"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'splines')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"pencil"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'line')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"vector-line"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'ellipse')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"circle-outline"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'rect')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"crop-square"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'triangle')}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"triangle-outline"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onCommand.bind(this, 'erase')}
                        style={[styles.tool_button] /*, { backgroundColor:"#D8D8D8" }*/}>
                        <MaterialCommunityIcons name={"eraser"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onEraseView.bind(this)}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"delete"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onUndo.bind(this)}
                        style={[styles.tool_button] /*, { backgroundColor:"#D8D8D8" }*/}>
                        <MaterialCommunityIcons name={"reply"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D8D8D8"
                        onPress={this.props.onRedo.bind(this)}
                        style={styles.tool_button}>
                        <MaterialCommunityIcons name={"share"} size={26} color={"#fff"} />
                    </TouchableHighlight>
                </View>
                {/** 子工具条, 线粗，颜色，透明度等 */}
                <View style={styles.sub_tools}></View>
            </View>
        );
    }
}
