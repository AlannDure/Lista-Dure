import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from "./styles";

const AddTask = ({item, onChangeText, placeholder, onPressButton}) => {

    return(
    <View style={styles.inputContainer}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          //selectionColor='#4A306D'
          placeholderTextColor='#4A306D' 
          onChangeText={onChangeText}
          value={item}
        />
        <Button
         title='Add ➕' 
         onPress={onPressButton} 
         color='#4A306D'/>
      </View>   
    )
}

export default AddTask;