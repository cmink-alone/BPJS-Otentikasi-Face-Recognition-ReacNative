import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native'

import logoSuccess from '../../assets/icon/success.png';

const Success = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* view dummy */}
            <View></View>

            <View style={styles.subContainer}>
                <Image source={logoSuccess} style={styles.ceklis}/>
                <Text style={styles.teksNotifikasi}>Proses Otentikasi Berhasil</Text>
                <Text style={styles.teksPesan}>Terima kasih Muhamad Rizky Fajar Febrian telah melakukan Otentikasi pada Bulan April 2021. Lakukan Otentikasi pada bulan berikutnya.</Text>
            </View>

            <Text>Versi 0.5.10 Beta</Text>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer: {
        alignItems: 'center',
        width: 270,
    },
    ceklis: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    teksNotifikasi: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    teksPesan: {
        textAlign: 'center',
        marginTop: 10,
    }
})
