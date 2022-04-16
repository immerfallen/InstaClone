import React, {Component} from 'react'
import {View, Text, PermissionsAndroid, StyleSheet, TouchableOpacity, Image, Dimensions, Platform, ScrollView, Alert, TextInput} from 'react-native'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

class AddPhoto extends Component {
    state ={
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
            if(!res.didCancel){
                console.log(res)
                this.setState({image: {uri: res.assets[0].uri, base64: res.assets[0].base64}})
            }
        }, 
        )           
    }

    takePhoto = async () => {       
            launchCamera({
                saveToPhotos: true, 
                maxHeight: 600,
                maxWidth: 800           
            }, res => {
                if(!res.didCancel){
                    console.log(res.assets.uri)
                    this.setState({image: {uri: res.assets[0].uri, base64: res.assets[0].base64}})
                   
                }
            })        
           
    }

    save = async () => {
        Alert.alert('Imagem foi adicionada!', this.state.comment)
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem!!</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha uma foto da galeria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePhoto} style={styles.button}>
                        <Text style={styles.buttonText}>Tirar uma foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Adicione um comentário' style={styles.input} value={this.state.comment} onChangeText={comment=> this.setState({comment})}></TextInput>
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
        height: Dimensions.get('window').width*3/4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width*3/4,
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
    input:{
        marginTop: 20,
        width: '90%'
    }
})

export default AddPhoto