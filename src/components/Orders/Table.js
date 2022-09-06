import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Details from '../Details/Details'

const orders = [
  {
    id: 1,
    date: '03-09-2022 5:00pm',
    comment: 'comentario',
    state: 'CONFIRMADO',
    details: 'Audifonos para producciones audiovisuales profesionales',
  },
  {
    id: 2,
    date: '03-09-2022 5:00pm',
    comment: 'comentario',
    state: 'CONFIRMADO',
    details: 'Microfono con autotune incluido',
  },
  {
    id: 3,
    date: '03-09-2022 5:00pm',
    comment: 'comentario',
    state: 'CONFIRMADO',
    details: 'Mezclador de pistas profesional',
  },
  {
    id: 4,
    date: '03-09-2022 5:00pm',
    comment: 'comentario',
    state: 'CONFIRMADO',
    details: 'Camara profesional',
  },
]

const Table = () => {
  const [isDetails, setIsDetails] = useState(false)
  const [order, setOrder] = useState({})

  const openDetails = (value, order) => {
    setIsDetails(value)
    setOrder(order)
  }

  return (
    <View style={styles.container}>
      {isDetails ? (
        <Details setIsDetails={setIsDetails} orders={order} />
      ) : null}

      <View style={styles.table.header}>
        <Text style={styles.table.tableId}>ID</Text>
        <Text style={styles.table.tableDate}>FECHA/HORA</Text>
        <Text style={styles.table.tableComment}>COMENTARIO</Text>
        <Text style={styles.table.tableState}>ESTADO</Text>
      </View>
      {orders.map((order) => (
        <TouchableOpacity
          key={order.id}
          onPress={() => openDetails(true, order)}
        >
          <View style={styles.table.rows}>
            <Text style={styles.table.tableId}>{order.id}</Text>
            <Text style={styles.table.tableDate}>{order.date}</Text>
            <Text style={styles.table.tableComment}>{order.comment}</Text>
            <Text style={styles.table.tableState}>{order.state}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'space-between',
    justifyContent: 'flex-start',
  },
  table: {
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // borderWidth: 1,
    },
    tableId: {
      textAlign: 'center',
      textAlignVertical: 'center',
      width: '10%',
      borderWidth: 2,
    },
    tableDate: {
      textAlign: 'center',
      textAlignVertical: 'center',
      width: '25%',
      borderTopWidth: 3,
      borderBottomWidth: 2,
    },
    tableComment: {
      textAlign: 'center',
      textAlignVertical: 'center',
      width: '35%',
      borderWidth: 2,
      borderTopWidth: 3,
    },
    tableState: {
      textAlign: 'center',
      textAlignVertical: 'center',
      width: '25%',
      borderTopWidth: 3,
      borderBottomWidth: 2,
      borderRightWidth: 2,
    },
    rows: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      width: '35%',
      borderWidth: 1,
      //   borderColor: 'red',
      //   borderStyle: 'solid',
    },
  },
})

export default Table
