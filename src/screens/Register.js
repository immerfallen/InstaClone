import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native'

class Register extends Component {
    state= {
        name: '',
        emaeil: '',
        password: ''
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome' autoFocus={true} onChangeText={name=> this.setState({name})} value={this.state.name}></TextInput>
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' onChangeText={name=> this.setState({email})} value={this.state.email}></TextInput>
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={password=> this.setState({password})} value={this.state.password}></TextInput>
                <TouchableOpacity onPress={()=> {}} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15,
    }
})

export default Register