import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import logoBpjs from '../../assets/icon/logo-bpjs.png';


const Login = ({ navigation }) => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container} >
            <View style={styles.subContainer}>
                <Image style={styles.logo} source={logoBpjs} />
                <Text style={styles.otentikasi}>Aplikasi E-Otentikasi</Text>
                <Text style={styles.otentikasi}>BPJS Ketenagakerjaan</Text>
                <TextInput style={styles.noIdentitas} onChangeText={setText} value={text} placeholder="Nomor Induk BPJSTK" />
                <TouchableOpacity style={styles.tombol}>
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
        marginTop: 20,
        height: 40,
        borderWidth: 1,
    },
    tombol: {
        backgroundColor: '#00AB66',
        paddingVertical: 7,
        // paddingHorizontal: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    proses: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})
