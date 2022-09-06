import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const Chat = () => {
  const [isMessage, setIsMessage] = useState([])
  const [message, setMessage] = useState('')
  const [arrayMessages, setArrayMessages] = useState([])

  const sendMessage = () => {
    if (message) {
      setIsMessage([message])

      arrayMessages.forEach(async (message, index) => {
        await AsyncStorage.setItem(`message_${index}`, message)
        const saveMessage = await AsyncStorage.getItem(`message_${index}`)
        arrayMessages.push(saveMessage)
      })
    }
  }
  useEffect(() => {
    async function getMessages() {
      const getKeyMessages = await AsyncStorage.getAllKeys()
      const getValueMessages = await AsyncStorage.multiGet(getKeyMessages)

      getValueMessages.flat(1).forEach((messages, index) => {
        if (messages === 'token') {
          return
        }

        if (index % 2 != 0) {
          arrayMessages.push(messages)
        }
      })

      arrayMessages.pop()
    }
    getMessages()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17, fontWeight: '700' }}>
        Interactua con el chat
      </Text>
      <View style={styles.chat}>
        {arrayMessages
          ? arrayMessages.map((message, index) => (
              <Text key={index}>{message}</Text>
            ))
          : null}
        <TextInput
          onChangeText={setMessage}
          value={message}
          style={styles.inputs}
          multiline={true}
          numberOfLines={4}
        />
        <Button onPress={sendMessage} title="Enviar mensaje" color="#003785" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  chat: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#96d1fb',
    borderRadius: 10,
  },
  inputs: {
    height: '25%',
    width: '100%',
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
})

export default Chat
