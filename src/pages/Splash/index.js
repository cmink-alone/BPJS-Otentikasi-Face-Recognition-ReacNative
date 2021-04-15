import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native'

import logoBpjs from '../../assets/icon/logo-bpjs.png';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View>
                {/* ini cuma view dummy */}
            </View>
            <View style={styles.subContainer} >
                <Image style={styles.logo} source={logoBpjs} />
                <Text style={styles.versi} >Versi 0.5.10 Beta</Text>
                <ActivityIndicator style={styles.loading} size="large" color='#00ff00' />
                <Text style={{ fontSize: 15 , marginTop: 20}}>Memuat</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.copyRight} >Copyright BPJSTK 2021</Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer: {
        marginTop: -10,
        alignItems: 'center',
    },
    logo: {
        width: 275,
        resizeMode: 'contain',
    },
    versi: {
        fontSize: 18,
    },
    loading: {
        marginTop: 30,
    },
    copyRight: {
        bottom: 0,
    },
    footer:{
        marginBottom: 10,
    }
})
