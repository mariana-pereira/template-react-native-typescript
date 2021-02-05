import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
