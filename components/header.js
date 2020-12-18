
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Header(){
    return(

        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>


    )
}
 
const styles=StyleSheet.create({
    header: {
        height: 30,
        paddingTop: 15,
        marginBottom:50,
        
    },
    title: {
        textAlign: 'center' ,
        fontSize: 35,
        fontFamily: 'sans-serif',
        color:'coral',
        fontWeight: 'bold',
    }

})
  
  