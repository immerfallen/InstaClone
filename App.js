import React, {Component } from 'react';
import Header from './src/components/Header';
import {View, Text} from 'react-native'
import Post from './src/components/Post'

  
export default class App extends Component {
  render(){
    const comments = [{
      nickname: 'Maro de Melo',
      comment: 'Excelente foto'
    },
    { 
      nickname: 'Joyci Santos',
      comment: 'Irado'
    },
    { 
      nickname: 'Gustavo Ricardo',
      comment: 'Muito feio. Cerca sem noção '
    }
  ]


    return (
      <View style={{flex:1}}>
      <Header/>
      <Post image={require('./assets/imgs/fence.jpg')}
      comments={comments}/>
      </View>
    );
  }
};
