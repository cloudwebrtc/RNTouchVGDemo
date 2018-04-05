const React = require('react-native');
const { StyleSheet } = React;

export default {
  container:{
    backgroundColor: '#fff',
  },
  tools: {
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(20,20,20,0.75)',//#e8e8e8
  },
  tool_button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sub_tools: {
    position: 'absolute',
    height: 0,
    left: 0,
    right: 0,
    bottom: 51,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(20,20,20,0.75)',//#e8e8e8
  },
};
