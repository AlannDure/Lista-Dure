import React from 'react';
import { Modal } from 'react-native';
import { styles } from "./styles";

const CustomModal = ({children, visible, animationType, onRequestClose}) => {
    return (
        <Modal
            animationType={animationType}
            visible={visible}
            onRequestClose={onRequestClose}
        >
         {children}       
        </Modal>
    )
}
export default CustomModal;