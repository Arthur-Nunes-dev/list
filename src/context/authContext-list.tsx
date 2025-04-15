import { Flag } from "../components/Flag";
import { themas } from "../global/themes";
import { Input } from "../components/input";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomDateTimePicker from "../components/CustomDateTimePicker";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

export const AuthContextList:any = createContext({});

const flags = [
  {caption: 'urgente', color: themas.colors.red},
  {caption: 'opcional', color: themas.colors.blueLigth}
]

export const AuthProviderList = (props:any):any => {
  const modalizeRef = useRef<Modalize>(null);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [selectedFlag,setSelectedFlag] = useState('urgente');
  const [selectedDate,setSelectedDate] = useState(new Date());
  const [selectedTime,setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [item, setItem] = useState(0);

  const onOpen = () => {
    modalizeRef?.current?.open()
  };

  const onClose = () => {
    modalizeRef?.current?.close()
  }

  useEffect(() =>{
    // onOpen()
  },[])

  const _renderFlags = () => {
    return (
      flags.map((item,index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedFlag(item.caption)
          }}
        >
          <Flag
            caption={item.caption}
            color={item.color}
            selected={item.caption == selectedFlag}
          />
        </TouchableOpacity>
      )))
  }

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (date:any) => {
    setSelectedTime(date);
  };

  // salva as informações localmente em um JSON
  const handleSave = () => {
    
    try {
      const newItem = {
        item: Date.now(),
        title,
        description,
        flags: selectedFlag,
        timeLimite: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          selectedTime.getHours(),
          selectedTime.getMinutes(),
        ).toISOString(),
      }
      
    } catch (error) {
      console.log("Erro ao salvar o item:",error)
    }
  };

  const _container = () => {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios'?'padding':'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons 
              name="close"
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Criar tarefa</Text>
          <TouchableOpacity onPress={() => handleSave()}>
            <AntDesign 
              name="check"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Input
            title="Titulo:"
            labelStyle={styles.label}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            title="Descrição:"
            labelStyle={styles.label}
            heigth={100}
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />

          <View style={{width: '40%'}}>
            <View style={{flexDirection: 'row',gap: 10,width: '100%'}}>
              <TouchableOpacity
                onPress={()=>setShowDatePicker(true)}
                style={{width: 200}}
              >
                <Input
                  title="Data Limite"
                  labelStyle={styles.label}
                  editable={false}
                  value={selectedDate.toLocaleDateString()}
                  onPress={()=>setShowDatePicker(true)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>setShowTimePicker(true)}
                style={{width: 110}}
              >
                <Input
                  title="Hora Limite"
                  labelStyle={styles.label}
                  editable={false}
                  value={selectedTime.toLocaleTimeString()}
                  onPress={()=>setShowTimePicker(true)}
                />
              </TouchableOpacity>
            </View>
            <CustomDateTimePicker
              onDateChange={handleDateChange}
              setShow={setShowDatePicker}
              show={showDatePicker}
              type={'date'}
            />
            <CustomDateTimePicker
              onDateChange={handleTimeChange}
              setShow={setShowTimePicker}
              show={showTimePicker}
              type={'time'}
            />
          </View>
          <View style={styles.containerFlag}>
            <Text style={styles.label}>Flags:</Text>
            <View style={styles.rowFlags}>
              {_renderFlags()}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView> 
    )
  }

  return (
    <AuthContextList.Provider value={{onOpen}}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{height: Dimensions.get('window').height/1.3}}
        adjustToContentHeight={true}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  )
}
export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    marginTop:20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
  },
  containerFlag: {
    width: '100%',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
  rowFlags: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
})