import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
      <StatusBar backgroundColor="#212121" barStyle="dark-content" />
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Icon name="home" size={22} color="#212121" />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#212121' }}>
            Home
          </Text>
        </View>
        <Icon name="shopping-cart" size={22} color="#212121" />
      </View>

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 2,
            borderRadius: 15,
            padding: 8,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1647529077611-cfed43c1ca12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
              }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Ashley</Text>
              <Text>@ashley</Text>
            </View>

            <TouchableOpacity style={{ marginRight: 10, marginTop: 10 }}>
              <Icon name="ellipsis-h" size={22} color="#878787" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Image
              style={{ width: 300, height: 300, borderRadius: 15 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginBottom: 20,
            }}>
            <TouchableOpacity>
              <Icon name="heart" size={22} color="#878787" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 20 }}>
              <Icon name="comment" size={22} color="#878787" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="paper-plane" size={22} color="#878787" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Icon name="bookmark" size={22} color="#878787" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
