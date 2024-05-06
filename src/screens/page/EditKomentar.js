import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Header from "../../components/general/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_BASE_URL, DEFAULT_PROFILE_PICTURE } from "../../../env";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Button } from "react-native-paper";
import { COLOR_GRAY } from "../../styles";
export default function EditKomentar({ route }) {
  const { data } = route.params;
  const { jenis } = route.params;
  console.log(jenis);
  const [komentar, setKomentar] = useState(data.komentar);
  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: hp(100) }}>
      <Header title="Edit Komentar" />
      <View
        style={{
          padding: wp(5),
        }}
      >
        <Text
          style={{
            fontSize: wp(4),
            fontWeight: "600",
            marginBottom: wp(3),
          }}
        >
          Komentar
        </Text>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={(v) => {
            setKomentar(v);
          }}
          value={komentar}
        />
        <Button
          //   loading={loading}
          //   disabled={loading}
          mode="contained"
          style={styles.button}
          compact={false}
          //   onPress={() => Submit()}
        >
          <Text style={{ color: "#F4F9F9" }}>Update</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    minHeight: wp(10),
    maxHeight: wp(30),
    borderWidth: 1,
    padding: 10,
    borderColor: COLOR_GRAY.LIGHT,
    borderRadius: wp(1),
  },
  button: {
    width: wp(90),
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: "#0095DA",
    borderWidth: 2,
    marginTop: 20,
    alignSelf: "center",
  },
});
