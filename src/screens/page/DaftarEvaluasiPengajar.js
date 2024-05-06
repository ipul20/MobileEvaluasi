import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import { Card } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import { COLOR } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
// import DaftarEvaluasiPengajar from './DaftarEvaluasiPengajar';

export default function DaftarEvaluasiPengajar({ route }) {
  const navigation = useNavigation();
  const { pengajar } = route.params;
  // console.log("data", data.kepuasan);
  return (
    <SafeAreaView>
      <Header title="Daftar Evaluasi Pengajar" />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          marginTop: wp(2),
          paddingBottom: wp(15),
        }}
      >
        <>
          {pengajar.map((v) => (
            <Card style={{ width: wp(95), marginBottom: wp(5) }} keys={v}>
              <Card.Content style={{ flexDirection: "row" }}>
                <View style={{ width: wp(60) }}>
                  <View style={{}}>
                    <Text
                      style={{ fontSize: wp(5), fontWeight: "bold" }}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                    >
                      {v.nama_dosen}
                    </Text>
                  </View>
                  <View style={{}}>
                    <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
                      Jumlah Responden :{v.jumlah}
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: wp(2) }}>
                  <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
                    asd
                  </Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </>
      </ScrollView>
    </SafeAreaView>
  );
}
