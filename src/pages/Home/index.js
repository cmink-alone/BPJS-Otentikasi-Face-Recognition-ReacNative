import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Ini Halaman Beranda!!</Text>
            <Button title="Masuk Ke Splash" onPress={() => navigation.navigate('Splash')} />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
