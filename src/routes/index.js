import * as React from "react";
import { Image, Platform } from "react-native";
import { StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {heightPercentageToDP as h} from 'react-native-responsive-screen';
import { widthPercentageToDP as w } from "react-native-responsive-screen";
import { COLOR } from "../styles";

// AUTH SCREEN

// MAIN SCREEN
import Home from "../screens/page/Home";
import DataPengajar from "../screens/page/DataPengajar";
import DetailPengajar from "../screens/page/DetailPengajar";
import DataMateri from "../screens/page/DataMateri";
import CekEvaluasi from "../screens/page/CekEvaluasi";
import DetailCekEvaluasi from "../screens/page/DetailCekEvaluasi";
import DetailPenyelenggara from "../screens/page/DetailPenyelenggara";
import DetailKepuasan from "../screens/page/DetailKepuasan";
import DaftarEvaluasiPengajar from "../screens/page/DaftarEvaluasiPengajar";
import TambahPengajar from "../screens/page/TambahPengajar";
import Komentar from "../screens/page/Komentar";
import DaftarRespon from "../screens/page/DaftarRespon";
import EditKomentar from "../screens/page/EditKomentar";

const Stack = createStackNavigator();
export default function RoutesContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DataPengajar" component={DataPengajar} />
        <Stack.Screen name="DetailPengajar" component={DetailPengajar} />
        <Stack.Screen name="DataMateri" component={DataMateri} />
        <Stack.Screen name="CekEvaluasi" component={CekEvaluasi} />
        <Stack.Screen name="DetailCekEvaluasi" component={DetailCekEvaluasi} />
        <Stack.Screen name="TambahPengajar" component={TambahPengajar} />
        <Stack.Screen name="Komentar" component={Komentar} />
        <Stack.Screen name="DaftarRespon" component={DaftarRespon} />
        <Stack.Screen name="EditKomentar" component={EditKomentar} />
        <Stack.Screen
          name="DaftarEvaluasiPengajar"
          component={DaftarEvaluasiPengajar}
        />
        <Stack.Screen
          name="DetailPenyelenggara"
          component={DetailPenyelenggara}
        />
        <Stack.Screen name="DetailKepuasan" component={DetailKepuasan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const tabBarOptions = {
  height: w(20),
  borderTopWidth: 1,
  borderTopColor: "#d3d3d3",
  backgroundColor: "#fff",
};
const styles = StyleSheet.create({
  tabBarIcon: {
    height: w(4),
    width: w(4),
  },
});
