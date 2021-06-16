import React, { Component } from 'react';

import { Image, Text, TextInput, View } from 'react-native';
const SampleComponent = () => {
    return (
      <View>
        <View style={{ width: 80, height: 80, backgroundColor: 'red' }} />
        <Text>Halo World!</Text>
        <Text>Selamat Malam</Text>
        <Text>14 April 2021</Text>
        <Ian />
        <Photo />
        <TextInput style={{ borderWidth: 1 }} />
        <BoxGreen />
        <Profile />
      </View>
    )
  }
  
  const Ian = () => {
    return <Text>Halo Ian Mangku Negara!</Text>
  }
  
  const Photo = () => {
    return <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://placeimg.com/100/100/tech' }} />
  }
  
  class BoxGreen extends Component {
    render() {
      return (
        <Text>Class Component</Text>
      )
    }
  }
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://placeimg.com/100/100/animals' }} />
          <Text>Ini Foto Hewan</Text>
        </View>
      )
    }
  }

export default SampleComponent;