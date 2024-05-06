import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Button,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { API_BASE_URL, BASE_URL } from "../../../env";
import Header from "../../components/general/Header";
import { COLOR, COLOR_GRAY } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DataPengajar({ navigation }) {
  const [loading, setLoading] = useState(0);
  const [instruktur, setInstruktur] = useState([]);
  const getInstruktur = async () => {
    setLoading(1);
    try {
      const response = await fetch(
        "https://evaluasi.bdimakassar.id/api.php?daftar_instruktur"
      );
      const json = await response.json();
      console.log("tes", json.data);
      setInstruktur(json.data);
      setLoading(0);
      // setTable(json.data);
    } catch (error) {
      setLoading(3);
      console.error(error);
    }
  };
  useEffect(() => {
    getInstruktur();
  }, [navigation]);
  return (
    <SafeAreaView>
      <Header title="Daftar Pengajars" />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          padding: wp(2),
          minHeight: "95%",
          paddingBottom: wp(10),
        }}
      >
        <Button
          mode="contained"
          compact={false}
          style={{
            width: "80%",
            paddingVertical: 5,
            marginBottom: 10,
            borderRadius: 7,
            backgroundColor: "#0095DA",
            borderWidth: 2,
          }}
          onPress={() => navigation.navigate("TambahPengajar")}
        >
          <View></View>
          <Text>Tambah Data Pengajars</Text>
        </Button>

        {loading == 1 ? (
          <View
            style={{
              justifyContent: "center",
              justifyContent: "space-around",
              paddingBottom: 10,
              alignItems: "center",
              // flex: 1,
              marginTop: hp(25),
            }}
          >
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: hp(2) }}>Loading...</Text>
          </View>
        ) : loading == 0 ? (
          <>
            {instruktur.map((v) => (
              <View
                keys={v.id}
                onPress={() => navigation.navigate("DetailPengajar")}
                style={{
                  flexDirection: "row",
                  paddingVertical: wp(2),
                  paddingHorizontal: wp(4),
                  borderBottomColor: COLOR_GRAY.LIGHT,
                  borderBottomWidth: 1,
                  width: " 100%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      marginTop: wp(2),
                      marginRight: wp(3),
                      padding: wp(1),
                      width: wp(22),
                    }}
                  >
                    <Image
                      source={require("../../assets/image/user.png")}
                      style={{
                        width: wp(20),
                        height: wp(20),
                        borderRadius: wp(1),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      width: wp(43),
                      marginRight: wp(2),
                    }}
                  >
                    <View
                      style={{
                        marginRight: wp(2),
                      }}
                    >
                      <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
                        {v.nama}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: wp(30),
                      flexDirection: "row",
                    }}
                  >
                    <IconButton
                      mode="contained"
                      icon={require("../../assets/icon/edit.png")}
                      iconColor={MD3Colors.error50}
                      size={wp(5)}
                      onPress={() => navigation.navigate("EditMenu", v)}
                    />
                    <IconButton
                      mode="contained"
                      icon={require("../../assets/icon/delete.png")}
                      iconColor={MD3Colors.error50}
                      size={wp(5)}
                      onPress={() => showAlert(v.nama, v.id)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    width: wp(31),
                    alignSelf: "center",
                    flexDirection: "row",
                  }}
                ></View>
              </View>
            ))}
          </>
        ) : (
          <View
            style={{
              justifyContent: "center",
              justifyContent: "space-around",
              paddingBottom: 10,
              alignItems: "center",
              // flex: 1,
              marginTop: hp(25),
            }}
          >
            <Button
              mode="contained"
              textColor="white"
              buttonColor={COLOR.PRIMARY}
              style={{ borderColor: "black", color: "black" }}
              onPress={getInstruktur}
            >
              Reload
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
