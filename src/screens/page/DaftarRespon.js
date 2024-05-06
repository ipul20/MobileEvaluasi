import { View, Text } from "react-native";
import React from "react";
import Home from "./Home";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../../components/general/Header";
import BelumIsi from "./BelumIsi";
import SudahIsi from "./SudahIsi";
const Tab = createMaterialTopTabNavigator();
export default function DaftarRespon({ route }) {
  const { data } = route.params;
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Header title="Daftar Responden Peserta" />
        <Tab.Navigator>
          <Tab.Screen
            name="Belum Mengisi"
            children={() => <BelumIsi daftar={data} />}
          />
          <Tab.Screen
            name="Sudah Mengisi"
            children={() => <SudahIsi daftar={data} />}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
}
