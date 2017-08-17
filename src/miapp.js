import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'App': {
    'textAlign': 'center'
  },
  'App-logo': {
    'animation': 'App-logo-spin infinite 20s linear',
    'height': [{ 'unit': 'px', 'value': 80 }]
  },
  'App-header': {
    'backgroundColor': '#222',
    'height': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'color': 'white'
  },
  'App-intro': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }]
  },
  'Todo-App': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline-block',
    'textAlign': 'left'
  },
  'input': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyleType': 'none'
  },
  'message': {
    'backgroundColor': '#61DAFB',
    'color': 'white',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#61DAFB' }],
    'position': 'absolute',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -100 }],
    'top': [{ 'unit': 'px', 'value': 189 }]
  },
  'li spandelete-item': {
    'visibility': 'hidden'
  },
  'spandelete-item button': {
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'fontWeight': 'bold',
    'textDecoration': 'none',
    'color': 'red'
  },
  'li:hover spandelete-item': {
    'visibility': 'visible'
  },
  'a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 2 }],
    'paddingRight': [{ 'unit': 'px', 'value': 2 }]
  }
});
