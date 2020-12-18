import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Todoitem({item , pressHandler})
{
   return(
       <TouchableOpacity onPress={() =>pressHandler(item.key)}>
           <Text style={styles.item}>{item.text}</Text>
       </TouchableOpacity>
   )
}

const styles=StyleSheet.create
({
    item: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        color: 'coral',
        fontFamily: 'sans-serif',
        fontSize:18,
    }
})