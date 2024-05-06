import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/general/Header";
import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { COLOR_GRAY } from "../../styles";

export default function Komentar({ route }) {
  const navigation = useNavigation();

  const { data } = route.params;
  const { jenis } = route.params;
  return (
    <SafeAreaView>
      <Header title="Komentar Evaluasi" />
      <ScrollView style={{}}>
        <View
          style={{
            paddingBottom: wp(10),
            paddingTop: wp(3),
            alignItems: "center",
            minHeight: hp(100) - wp(13),
          }}
        >
          {data.map((v) => (
            <Card style={{ width: wp(95), marginBottom: wp(3) }}>
              <Card.Content style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: wp(80),
                  }}
                >
                  <Text>{v.komentar == "" ? "-" : v.komentar}</Text>
                </View>
                <View
                  style={{
                    width: wp(7),
                    marginLeft: wp(2),
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
                    onPress={() => {
                      navigation.navigate("EditKomentar", {
                        data: v,
                        jenis: jenis,
                      });
                    }}
                  >
                    <Image
                      style={{
                        width: wp(4),
                        height: wp(4),
                      }}
                      source={require("../../assets/icon/edit.png")}
                    />
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
