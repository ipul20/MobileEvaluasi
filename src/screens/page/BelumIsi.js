import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/general/Header";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLOR_GRAY } from "../../styles";

export default function BelumIsi({ daftar }) {
  const data = daftar;
  console.log("user", data);
  const peserta = [];
  console.log("peserta sebelum", peserta);
  for (i = 1; i <= 75; i++) {
    if (data.findIndex((item) => item.user == "peserta" + i) == -1) {
      peserta.push("peserta" + i);
    }
  }

  console.log("peserta setlah", peserta);

  return (
    <View>
      <ScrollView>
        <View
          style={{
            paddingTop: wp(2),
            marginBottom: wp(5),
            alignItems: "center",
            minHeight: hp(100),
            backgroundColor: "white",
          }}
        >
          {peserta.map((v) => (
            <View
              style={{
                width: wp(95),
                borderWidth: 0.3,
                padding: wp(1.5),
                borderRadius: wp(1),
                marginBottom: wp(2),
                borderColor: COLOR_GRAY.LIGHT,
                shadowColor: "#000",
                shadowOffset: {
                  width: 1,
                  height: 6,
                },
                shadowOpacity: 0.5,
                shadowRadius: 16.0,

                elevation: 2,
              }}
            >
              <Text>{v}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
