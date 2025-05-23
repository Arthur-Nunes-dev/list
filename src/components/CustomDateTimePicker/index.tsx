import React, { useEffect, useState } from "react";
import { Modal, Platform, View } from "react-native";
import { styles } from "./style"
import DateTimePicker from "@react-native-community/datetimepicker";

const CustomDateTimePicker = ({type,onDateChange,show,setShow}:any) => {
    const [date,setDate] = useState(new Date())

    useEffect(() => {
        if(onDateChange) {
            onDateChange(date)
        }
    },[date,onDateChange])

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false); // Oculta o picker após a seleção
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            onRequestClose={()=>setShow(false)}
        >
            <View style={styles.modalOverlay}>
                    <View style={[
                        styles.container,
                        Platform.OS == 'android' && {backgroundColor: 'transparent'}
                    ]}>
                    <DateTimePicker 
                        value={date}
                        mode={type}
                        display={Platform.OS === 'ios'?'inline':'default'}
                        onChange={onChange}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CustomDateTimePicker;
