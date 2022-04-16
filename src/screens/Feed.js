import React, { Component} from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [
            {
            id: Math.random(),
            nickname: "Rafael Pereira",
            email: 'refael@gmail.com',
            image: require('../../assets/imgs/bw.jpg'), 
            comments: 
            [
                {
                nickname: 'John Ray Sheldon',
                comment: 'Stunning'
                }, 
                {
                    nickname: 'Jana Ana Arrunda',
                    comment: 'Foto linda, Onde foi tirada?'
                },
                {
                    nickname: 'Bebel Arturia',
                    comment: 'Loucura Louca'
                }
            ], 
         },
         {
            id: Math.random(),
            nickname: "Rafael Pereira",
            email: 'refael@gmail.com',
            image: require('../../assets/imgs/bw.jpg'), 
            comments: 
            [
                {
                nickname: 'Maro',
                comment: 'Estilo'
                }, 
                {
                    nickname: 'Jana Ana Arrunda',
                    comment: 'Foto linda, Onde foi tirada?'
                },
                {
                    nickname: 'Bebel Arturia',
                    comment: 'Loucura Louca'
                }
            ], 
         },
         {
            id: Math.random(),
            nickname: "Rafael Pereira",
            email: 'refael@gmail.com',
            image: require('../../assets/imgs/boat.jpg'), 
            comments: 
            [
                {
                nickname: 'Maro',
                comment: 'Estilo'
                }, 
                {
                    nickname: 'Jana Ana Arrunda',
                    comment: 'Foto linda, Onde foi tirada?'
                },
                {
                    nickname: 'Bebel Arturia',
                    comment: 'Loucura Louca'
                }
            ], 
         },
         {
            id: Math.random(),
            nickname: "Rafael Pereira",
            email: 'refael@gmail.com',
            image: require('../../assets/imgs/gate.jpg'), 
            comments: 
            [
                {
                nickname: 'Maro',
                comment: 'Estilo'
                }, 
                {
                    nickname: 'Jana Ana Arrunda',
                    comment: 'Foto linda, Onde foi tirada?'
                },
                {
                    nickname: 'Bebel Arturia',
                    comment: 'Loucura Louca'
                }
            ], 
         }]
    }

    render(){
        return [
            <View styles={styles.container}>
                <Header/>
                <FlatList data={this.state.posts}
                keyExtractor={item=> `${item.id}`}
                renderItem={({item})=> 
                <Post key={item.id} {...item}/>} />                
            </View>
            
        ]
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed