import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Platform, ScrollView, Alert, TextInput, PermissionsAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: {
            uri: null,
            base64: null,
        },
        comment: '',
    }

    pickImage = () => {
        launchImageLibrary({
            maxHeight: 600,
            maxWidth: 800,
        }, res => {
            if (!res.didCancel) {
                console.log(res)
                this.setState({ image: { uri: res.assets[0].uri, base64: res.assets[0].base64 } })
            }
        },
        )
    }

    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Permissão da Câmera',
                        message: 'O aplicativo precisa de permissão da Câmera.',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Permissão para gravar dados',
                        message: 'Aplicativo precisa de permissão para gravar dados.',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    takePhoto = async () => {
        let isCameraPermitted = await this.requestCameraPermission();
        console.log('iscamerapermitted', isCameraPermitted)
        let isStoragePermitted = await this.requestExternalWritePermission();
        console.log('isstoragepermitted', isCameraPermitted)
        
            launchCamera({
                saveToPhotos: true,
                maxHeight: 600,
                maxWidth: 800
            }, res => {
                console.log(res)
                if (!res.didCancel) {
                    
                    this.setState({ image: { uri: res?.assets[0].uri, base64: res?.assets[0].base64 } })

                }
            })
        

    }

    save = async () => {
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })
        this.setState({image: null, comment: ''})
        this.props.navigation.navigate('Feed')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem!!</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha uma foto da galeria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePhoto} style={styles.button}>
                        <Text style={styles.buttonText}>Tirar uma foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Adicione um comentário' style={styles.input} value={this.state.comment} onChangeText={comment => this.setState({ comment })}></TextInput>
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

const mapStateToProps  = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)