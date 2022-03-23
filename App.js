import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
      <StatusBar backgroundColor="#212121" barStyle='dark-content' />
      <View style={{flexDirection: 'row', margin: 20}}>
        <Icon name="home" size={22} color="#212121" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#212121'}}>
            Home
          </Text>
        </View>
        <Icon name="shopping-cart" size={22} color="#212121" />
      </View>
    </View>
  );
}

export default App;
