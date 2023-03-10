import React from 'react';
import { Button, View } from 'react-native';

export function ScreenA() {
  return (
    <View style={{backgroundColor:"blue",flex:1,justifyContent:"center",alignItems:"center"}}>
        <Button title='go to page B'/>
    </View>
  );
}