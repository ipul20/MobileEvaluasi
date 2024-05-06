import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native";
import { widthPercentageToDP as w } from "react-native-responsive-screen";
import { COLOR_GRAY } from "../../styles";
import { COLOR } from "../../styles/index";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLOR_GRAY.LIGHTEST,
        height: wp(15),
        padding: wp(2),
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "grey",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ zIndex: 1 }}
      >
        <Image
          source={require("./../../assets/icon/back.png")}
          style={{ height: w(6), width: w(6), marginLeft: w(2) }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: wp(100),
          paddingHorizontal: wp(13),
          alignItems: "center",
          position: "absolute",
        }}
      >
        <View style={{}}>
          <Text
            style={{ fontSize: wp(5), fontWeight: "bold", color: COLOR.BLACK }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
}
