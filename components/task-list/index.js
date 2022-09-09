import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const TaskList = ({data, onPressButton, showsVerticalScrollIndicator}) => {
    return (
        <FlatList
            style={styles.itemList}
            data={data}
            renderItem={(data) =>(
            <View style={styles.itemContainer}>
            <Text style={styles.item}>{data.item.value}</Text>
            <TouchableOpacity style={styles.buttonTouch} onPress={() => onPressButton(data.item.id)}>
                <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
            </View>    
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        />
        
    )
}
export default TaskList;