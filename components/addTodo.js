import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Addtodo({submithandler}){

    const [text,setText]=useState(' ');

    const changehandler= (val) => {
        setText(val);
    }

    return(

       <View>
           <TextInput style={styles.input} placeholder='new todo...' onChangeText={changehandler}/>

            <Button onPress={()=> submithandler(text)} title='Add Todo' color='coral' />

       </View>

    )

}
const styles=StyleSheet.create({
    main:
    {   
        flex:1,
    },
    input:
    {
        marginBottom:10,
        paddingHorizontal: 9,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        color:'coral', 
        fontFamily:'sans-serif'
    }
});
