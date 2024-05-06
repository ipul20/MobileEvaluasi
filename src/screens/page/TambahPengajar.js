import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { API_BASE_URL, DEFAULT_PROFILE_PICTURE } from "../../../env";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLOR } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TambahPengajar() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nama: "",
  });

  const Submit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append("tambah_pengajar", 1);
      data.append("nama", form.nama);
      const res = await fetch("https://evaluasi.bdimakassar.id/api.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },

        body: data,
      });
      const json = await res.json();
      if (json.status == 200) {
        Alert.alert("Tambah Pengajar Berhasil");
        navigation.navigate("DataPengajar");
      }
      console.log(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000000",
          marginTop: hp(2),
          marginBottom: hp(2),
          alignSelf: "center",
        }}
      >
        Tambah Pengajar
      </Text>
      <View style={styles.groupinput}>
        <TextInput
          label="Nama"
          style={styles.input}
          onChangeText={(v) =>
            setForm({
              ...form,
              nama: v,
            })
          }
          value={form.name}
        />

        <Button
          loading={loading}
          disabled={loading}
          mode="contained"
          style={styles.buttonMasuk}
          compact={false}
          onPress={() => Submit()}
        >
          <Text style={{ color: "#F4F9F9" }}>Submit</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0095DA",
    top: 12,
    alignSelf: "center",
    top: 38,
  },
  logo: {
    marginTop: hp(7),
    height: hp(15),
    width: wp(60),
    borderRadius: wp(20),
    alignSelf: "center",
    justifyContent: "center",
  },
  groupinput: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: wp(80),
    marginBottom: wp(5),
    borderWidth: 1,
    borderBottomColor: "black",
  },
  buttonDaftar: {
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 7,
    borderColor: "#0095DA",
    borderWidth: 1,
  },

  buttonMasuk: {
    width: "80%",
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: "#0095DA",
    borderWidth: 2,
    marginTop: 20,
  },
});
