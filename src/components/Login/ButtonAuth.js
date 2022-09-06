import axios from 'axios'
import { useState } from 'react'
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ButtonAuth = ({ nameInput, passwordInput, navigation, setIsToken }) => {
  const login = async (name, password) => {
    try {
      const getToken = await axios.post(
        'https://webhooks.multifiber.cl/api/v1/auth/obtain_token/',
        {
          username: name,
          password: password,
        }
      )

      JSON.stringify(getToken)

      await AsyncStorage.setItem('token', getToken.data.token)

      setIsToken(getToken.data.token)
      navigation.navigate('Pedidos')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      title="Iniciar Sesion"
      color="#003785"
      onPress={() => login(nameInput, passwordInput)}
    />
  )
}

export default ButtonAuth
