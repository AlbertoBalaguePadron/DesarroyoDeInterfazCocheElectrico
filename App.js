import { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  const [liscaConfiguracion, setLiscaConfiguracion] = useState([
    {
      id: 1,
      text: "Asistente frenado activado",
    },

    {
      id: 2,
      text: "Asistenten de atención",
    },
    {
      id: 3,
      text: "Vista de semáforo",
    },
    {
      id: 4,
      text: "Det. obj. áng muerto",
    },
    {
      id: 5,
      text: "Ventilador",
    },
    {
      id: 6,
      text: "Luces",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={liscaConfiguracion}
          renderItem={(prodata) => {
            const { key, text } = prodata.item;
            return <ListItem key={key} texto={text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    color: "red",
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
