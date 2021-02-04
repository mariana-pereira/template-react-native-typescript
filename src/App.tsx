import React from 'react';
import { StatusBar, View } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <View style={{ flex: 1, backgroundColor: '#333' }} />
    </>
  );
};

export default App;
