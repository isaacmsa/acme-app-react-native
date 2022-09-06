import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'
import Title from './TitleAuth'
import ButtonAuth from './ButtonAuth'

const Auth = ({ navigation, setIsToken }) => {
  const [name, setName] = useState('')
  const [password, setpassWord] = useState('')
  return (
    <View style={styles.container}>
      <Title>Acme</Title>
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Nombre"
        style={styles.inputs}
      />
      <TextInput
        onChangeText={setpassWord}
        value={password}
        placeholder="Contraseña"
        style={styles.inputs}
      />
      <ButtonAuth
        nameInput={name}
        passwordInput={password}
        navigation={navigation}
        setIsToken={setIsToken}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
  },
  inputs: {
    height: 50,
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#81c9fa',
  },
})

export default Auth
