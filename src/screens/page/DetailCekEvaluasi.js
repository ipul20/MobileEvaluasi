import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import { Button, Card } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";
import { COLOR, COLOR_GRAY } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailCekEvaluasi({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const { form } = route.params;
  console.log("form", form);
  console.log("data", data.evaluasipenyelenggara);
  return (
    <SafeAreaView>
      <Header title="Detail Evaluasi" />
      <View style={{ alignItems: "center", marginTop: wp(2) }}>
        <Card style={{ width: wp(95), marginBottom: wp(5) }}>
          <Card.Content style={{ flexDirection: "row" }}>
            <View style={{ width: wp(90) }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: wp(5),
                    fontWeight: "bold",
                    width: "100%",
                  }}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  Jenis Diklat : {form.namadiklat}
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
                  Angkatan :{form.angkatan}
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
                  Tahun :{form.tahun}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: wp(2) }}></View>
          </Card.Content>
        </Card>
      </View>

      <View style={{ alignItems: "center", marginTop: wp(2) }}>
        <Text
          style={{
            fontSize: wp(4.5),
            fontWeight: "bold",
            marginBottom: wp(5),
          }}
        >
          Daftar Penilaian Evaluasi
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DaftarEvaluasiPengajar", {
              pengajar: data.pengajar,
            })
          }
          keys={1}
        >
          <Card style={{ width: wp(95), marginBottom: wp(5) }}>
            <Card.Content style={{ flexDirection: "row" }}>
              <View style={{ width: wp(60) }}>
                <View style={{}}>
                  <Text style={{ fontSize: wp(4.5), fontWeight: "bold" }}>
                    Evaluasi Pengajar
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: wp(4.5), fontWeight: "bold" }}>
                    Jumlah Instruktur :{data.jumlahinstruktur}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: wp(2) }}></View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <Card style={{ width: wp(95), marginBottom: wp(5) }}>
          <Card.Content style={{ flexDirection: "row" }}>
            <View style={{ width: wp(55) }}>
              <View style={{}}>
                <Text style={{ fontSize: wp(4.5), fontWeight: "bold" }}>
                  Evaluasi Penyelenggara
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: wp(4.5), fontWeight: "bold" }}>
                  Jumlah Responden : {data.penyelenggara}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: wp(35),
                justifyContent: "space-around",
                paddingRight: wp(1),
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: wp(1),
                  borderWidth: wp(0.2),
                  borderRadius: wp(2),
                  borderColor: COLOR_GRAY.LIGHT,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                onPress={() =>
                  navigation.navigate("Komentar", {
                    data: data.evaluasipenyelenggara,
                    jenis: "penyelenggara",
                  })
                }
              >
                <Image
                  style={{
                    width: wp(7),
                    height: wp(7),
                  }}
                  source={require("../../assets/icon/comment.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: wp(1),
                  borderWidth: wp(0.2),
                  borderRadius: wp(2),
                  borderColor: COLOR_GRAY.LIGHT,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                onPress={() =>
                  navigation.navigate("DaftarRespon", {
                    data: data.evaluasipenyelenggara,
                  })
                }
              >
                <Image
                  style={{
                    width: wp(7),
                    height: wp(7),
                  }}
                  source={require("../../assets/icon/info.png")}
                />
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
        <Card style={{ width: wp(95), marginBottom: wp(5) }}>
          <Card.Content style={{ flexDirection: "row" }}>
            <View style={{ width: wp(55) }}>
              <View style={{}}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: "bold",
                  }}
                >
                  Evaluasi Kepuasan Eksternal
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: wp(4.5), fontWeight: "bold" }}>
                  Jumlah Responden : {data.kepuasan}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: wp(35),
                justifyContent: "space-around",
                paddingRight: wp(1),
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: wp(1),
                  borderWidth: wp(0.2),
                  borderRadius: wp(2),
                  borderColor: COLOR_GRAY.LIGHT,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                onPress={() =>
                  navigation.navigate("Komentar", {
                    data: data.evaluasieksternal,
                    jenis: "eksternal",
                  })
                }
              >
                <Image
                  style={{
                    width: wp(7),
                    height: wp(7),
                  }}
                  source={require("../../assets/icon/comment.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: wp(1),
                  borderWidth: wp(0.2),
                  borderRadius: wp(2),
                  borderColor: COLOR_GRAY.LIGHT,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                onPress={() =>
                  navigation.navigate("DaftarRespon", {
                    data: data.evaluasieksternal,
                  })
                }
              >
                <Image
                  style={{
                    width: wp(7),
                    height: wp(7),
                  }}
                  source={require("../../assets/icon/info.png")}
                />
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}
