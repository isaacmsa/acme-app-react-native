import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Button } from 'react-native'

const ButtonLogout = ({ navigation, setIsToken }) => {
  const logout = async () => {
    await AsyncStorage.removeItem('token')
    setIsToken('')

    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000)
  }
  return (
    <Button title="Cerrar sesion" color="#003785" onPress={() => logout()} />
  )
}

export default ButtonLogout
