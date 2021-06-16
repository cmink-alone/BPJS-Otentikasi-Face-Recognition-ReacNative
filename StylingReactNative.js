import React, { Component } from 'react';

import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import macbook from './macbook.jpg';
import SampleComponent from './SampleComponent.js';
const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style={{ width: 100, height: 100, backgroundColor: 'cyan' }} />
  
        <View style={{padding: 12, backgroundColor: '#E3E3E3', width: 212, borderRadius: 8 }}>
          <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}} />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 14}}>New Macbook Pro 2019</Text>
          <Text style={{fontSize:12, fontWeight: 'bold', marginTop: 16, color: '#f2994a'}}>Rp 25.000.000</Text>
        </View>
      </View>
    )
  }
  
  
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red'
    }
  })

  export default StylingReactNativeComponent;