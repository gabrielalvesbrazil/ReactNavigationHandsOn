import React from 'react';
import { Button, View } from 'react-native';


export function ScreenB() {

    function navigsteToPage(){

    }
    return (
        <View style={{backgroundColor:"red",flex:1,justifyContent:"center",alignItems:"center"}}>
            <Button title='go to page A' onPress={navigsteToPage}/>
        </View>
    );
}