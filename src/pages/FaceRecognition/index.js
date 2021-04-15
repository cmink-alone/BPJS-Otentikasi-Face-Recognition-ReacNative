/* eslint-disable no-console */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';


const landmarkSize = 2;

export default class FaceRecognition extends React.Component {
  state = {
    type: 'front',
    canDetectFaces: 1,
    faces: [],
    jmlIterasi: 0,
    isFace: false,
  };

  componentDidMount() {
    console.log('-->>componen did mount')
    setTimeout(() => {
      this.setState({ isFace: true })
    }, 2000);
  }

  // componentDidUpdate(){
  //   // kalau ada perubahan
  //   setTimeout(() => {
  //     this.setState({
  //       jmlIterasi: this.state.jmlIterasi+1
  //     })
  //   },1000)
  //   if (this.state.jmlIterasi == 20){
  //     // console.log(this.state.jmlIterasi);
  //     this.takePicture()

  //     // nanti disini diisi sama loading waktu nge capture
  //   }
  //   else if (this.state.jmlIterasi < 20){
  //     console.log(this.state.faces);
  //   }
  // }


  takePicture = async function () {
    if (this.camera) {
      const options = {
        quality: 1,
        orientation: 0,
        base64: true,
        pauseAfterCapture: true,
        fixOrientation: true,
      }
      const img = await this.camera.takePictureAsync(options);
      this.setState({ img })
      console.warn('takePicture ', img);
      // membuat formdata
      const body = new FormData();

      // mengambil img yang disimpan di state
      body.append('img', { uri: img.uri, name: 'img.jpg', type: 'image/jpeg' });

      // fetch ke api untuk upload gambar
      fetch('http://192.168.8.104:5000/uploader', {
        method: 'post',
        // headers: {
        //   'Content-Type': 'undefined'
        // },
        body,
      })
        .then(a => a.text())
        .then(res => console.log(res));
      console.log(img.uri)
    }
  };

  toggle = value => () => this.setState(prevState => ({ [value]: !prevState[value] }));

  facesDetected = ({ faces }) => this.setState({ faces });

  renderFace = ({ bounds, faceID, rollAngle, yawAngle }) => (
    <View
      key={faceID}
      transform={[
        { perspective: 600 },
        { rotateZ: `${rollAngle.toFixed(0)}deg` },
        { rotateY: `${yawAngle.toFixed(0)}deg` },
      ]}
      style={[
        styles.face,
        {
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        },
      ]}
    >
      <Text style={styles.faceText}>ID: {faceID}</Text>
      <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
      <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
    </View>
  );

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }

  renderFaces = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>
  );

  renderLandmarks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>
  );


  renderCamera() {
    const { canDetectFaces, canDetectText, canDetectBarcode } = this.state;
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
        }}
        type={this.state.type}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : undefined
        }
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications
            ? RNCamera.Constants.FaceDetection.Classifications.all
            : undefined
        }
        onFacesDetected={canDetectFaces ? this.facesDetected : null}
      >
        <View style={styles.myContainer}>
          <View></View>
          <View></View>
          <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate("FaceRecognition")}>
            <Text style={styles.proses}>Posisikan Wajah anda di Tengah</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isFace}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!this.state.isFace);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ActivityIndicator style={styles.loading} size="large" color='#00ff00' />
                <Text>Memproses</Text>
              </View>
            </View>
          </Modal>
        </View>

        {!!canDetectFaces && this.renderFaces()}
        {!!canDetectFaces && this.renderLandmarks()}
      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  myContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // paddingTop: 10,
    backgroundColor: '#000',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  zoomText: {
    position: 'absolute',
    bottom: 70,
    zIndex: 2,
    left: 2,
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 300,
    position: 'absolute',
    borderColor: '#00AB66',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#F00',
    justifyContent: 'center',
  },
  textBlock: {
    color: '#F00',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  tombol: {
    backgroundColor: '#00AB66',
    paddingVertical: 12,
    paddingHorizontal: 25,
    // alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  proses: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});