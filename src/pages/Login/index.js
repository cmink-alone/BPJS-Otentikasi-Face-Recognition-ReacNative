import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import logoBpjs from '../../assets/icon/logo-bpjs.png';


const Login = ({ navigation }) => {
    const [text, setText] = useState("");

    const loginUser = (user) => {
        fetch('http://192.168.8.105:5000/api/v1/nasabah', {
        method: 'get',
      })
        .then(a => a.text())
        .then(res => console.log(res));
    }

    return (
        <View style={styles.container} >
            <View style={styles.subContainer}>
                <Image style={styles.logo} source={logoBpjs} />
                <Text style={styles.otentikasi}>Aplikasi E-Otentikasi</Text>
                <Text style={styles.otentikasi}>BPJS Ketenagakerjaan</Text>
                <TextInput style={styles.noIdentitas} onChangeText={setText} value={text} placeholder="Nomor ID BPJSTK" autoFocus={true} underlineColorAndroid='gray' />
                <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate("FaceRecognition")}>
                    <Text style={styles.proses}>Proses Otentikasi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        marginTop: -50,
        alignItems: 'center',
        // backgroundColor: 'lightgray',
    }, 
    logo: {
        width: 275,
        resizeMode: 'contain',
    },
    otentikasi: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    noIdentitas: {
        marginTop: 30,
        height: 40,
        paddingRight: 80,
        fontSize: 17,
        color: 'black'
    },
    tombol: {
        backgroundColor: '#00AB66',
        paddingVertical: 7,
        // paddingHorizontal: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    proses: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
})
