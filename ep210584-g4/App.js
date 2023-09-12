import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, View } from 'react-native';
import { Card, Text } from "@rneui/themed"

const comidasSalvadorenas = [
     {
          id: '1',
          nombre: 'Pupusa',
          img: require('./src/imgs/Pupusas.jpg'),
          calorias: 150
     },
     {
          id: '2',
          nombre: 'Casamiento',
          img: require('./src/imgs/Casamiento.jpg'),
          calorias: 200
     },
     {
          id: '3',
          nombre: 'Yuca Frita',
          img: require('./src/imgs/YucaFrita.jpg'),
          calorias: 250
     },
     {
          id: '4',
          nombre: 'Tamales',
          img: require('./src/imgs/Tamales.jpg'),
          calorias: 300
     },
     {
          id: '5',
          nombre: 'Sopa de Pata',
          img: require('./src/imgs/SopaDePata.jpg'),
          calorias: 350
     },
     {
          id: '6',
          nombre: 'Enchiladas Salvadoreñas',
          img: require('./src/imgs/EnchiladasSalvadorenas.jpg'),
          calorias: 400
     },
     {
          id: '7',
          nombre: 'Tamal de Elote',
          img: require('./src/imgs/TamalDeElote.jpg'),
          calorias: 200
     },
     {
          id: '8',
          nombre: 'Plátanos Fritos',
          img: require('./src/imgs/PlatanosFritos.jpg'),
          calorias: 180
     },
     {
          id: '9',
          nombre: 'Quesadilla Salvadoreña',
          img: require('./src/imgs/QuesadillaSalvadorena.jpg'),
          calorias: 300
     },
     {
          id: '10',
          nombre: 'Tortillas de Maíz',
          img: require('./src/imgs/TortillasDeMaiz.jpg'),
          calorias: 50
     }
];

const Item = ({ nombre, img, calorias }) => (
     <Card containerStyle={{ backgroundColor: "#67CBFC" }}>
          <View style={styles.cardContainer}>
               <View style={styles.imgContainer}>
                    <Card.Image style={styles.img} source={img} />
               </View>
               <View style={styles.dataContainer}>
                    <Card.Title style={styles.cardTitle}>{nombre}</Card.Title>
                    <Text style={styles.text}>Calorías: {calorias}</Text>
               </View>
          </View>
     </Card>
);

export default function App() {
     const renderItem = ({ item }) => (<Item nombre={item.nombre} img={item.img} calorias={item.calorias} />);

     return (
          <SafeAreaView style={styles.container}>
               <FlatList
                    data={comidasSalvadorenas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}>
               </FlatList>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
     },
     card: {
          backgroundColor: "#67CBFC",
     },
     cardContainer: {
          display: "flex",
          flexDirection: "row",
     },
     imgContainer: {
          width: "25%",
          height: 75
     },
     img: {
          padding: 0,
          borderRadius: 50,
          height: "100%",
          width: "100%"
     },
     dataContainer: {
          width: "75%",
          padding: 15
     },
     cardTitle: {
          textAlign: "left",
          fontSize: 24,
     },
     text: {
          fontSize: 15,
     }
});
