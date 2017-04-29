// index.android.js - place code for android

// Import a library to help create a component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Some Text Here</Text>
);
  
// Render it to device

AppRegistry.registerComponent('albums', () => App);
