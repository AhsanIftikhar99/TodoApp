

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
 FlatList,
  View,
  Text,
  StatusBar,
  ImageBackground,

} from 'react-native';
import Header from './components/header';
import Todoitem from './components/todoitems';
import Addtodo from './components/addTodo';


export default function App()
{
  const [todos, settodos] = useState([
    { text: 'Todo App Developed by Ahsan Rajpoot,Touch me to remove this!', key: '1'},
   
  ]);
  
  const submithandler= (text) =>{
    settodos( (prevtodos) => {
        return [
          {text:text,key: Math.random().toString()},
          ...prevtodos
        ]
    }  )
  }
  const pressHandler = (key)=> {
    settodos((prevtodos)=> {
      return prevtodos.filter(todo => todo.key != key);
    }
    )
  }

  return(
    <View style={styles.container}>
      <ImageBackground source={require('./components/snap.jpg')} style={styles.image} > 
    <Header />

    <View style={styles.content}>
    <Addtodo submithandler={submithandler}/>

        <View style={styles.list}>

          <FlatList 
          data={todos}
           renderItem={({item}) => (
          <Todoitem item={item} pressHandler={pressHandler} />
          )
           }
          />

         </View>
      </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  image: {
    height: '100%',
    width: '100%', 
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
  },
  content : {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
  
});


