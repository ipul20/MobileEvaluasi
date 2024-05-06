import React, { useEffect, useState } from "react";
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
// import {launchImageLibrary} from 'react-native-image-picker';
import Header from "../../components/general/Header";
import SelectDropdown from "react-native-select-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CekEvaluasi({ route }) {
  const [jenis, setJenis] = useState([
    { name: "Aneka Olahan Ikan", value: "1720006" },
    { name: "2", value: "1720008" },
  ]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    diklat: "",
    angkatan: "",
    tahun: "2024",
    namadiklat: "",
  });

  // const Submit = async () => {
  //   setLoading(true);
  //   try {
  //     const data = new FormData();
  //     data.append("cek_evaluasi", 1);
  //     data.append("diklat", form.diklat);
  //     data.append("tahun", form.tahun);
  //     data.append("angkatan", form.angkatan);
  //     console.log(data);
  //     let res = await fetch("https://evaluasi.bdimakassar.id/api.php", {
  //       method: "post",
  //       body: data,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     let result = await res.json();
  //     console.log(result);
  //     setLoading(false);
  // navigation.navigate("DetailCekEvaluasi");
  //   } catch (error) {
  //     console.log("error upload", error);
  //     alert("Gagal cek", error);
  //     setLoading(false);
  //   }
  // };
  const isEmpty = (text) => {
    return text === null ? true : text.length === 0;
  };
  const Submit = async () => {
    setLoading(true);
    if (isEmpty(form.diklat)) {
      Alert.alert("Jenis diklat tidak boleh kosong!");
      setLoading(false);
    } else if (isEmpty(form.angkatan)) {
      Alert.alert("Angkatan tidak boleh kosong!");
      setLoading(false);
    } else if (isEmpty(form.tahun)) {
      Alert.alert("Tahun diklat tidak boleh kosong!");
      setLoading(false);
    } else {
      try {
        const data = new FormData();
        data.append("cek_evaluasi", 1);
        data.append("diklat", form.diklat);
        data.append("tahun", form.tahun);
        data.append("angkatan", form.angkatan);
        const res = await fetch("https://evaluasi.bdimakassar.id/api.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },

          body: data,
        });
        const json = await res.json();
        setLoading(false);
        navigation.navigate("DetailCekEvaluasi", {
          data: json.data,
          form: form,
        });
        console.log(json);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://evaluasi.bdimakassar.id/api.php?jenis_diklat"
      );
      const json = await response.json();
      console.log(json.data);
      setJenis(json.data);
      // setTable(json.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMenu();
  }, [navigation]);
  return (
    <SafeAreaView>
      <Header title="Cek Evaluasi" />
      <View style={styles.container}>
        <View style={styles.groupinput}>
          <SelectDropdown
            buttonStyle={styles.input2}
            data={jenis}
            defaultButtonText="Pilih Jenis Diklat"
            // onFocus={() => getMenu()}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.name;
            }}
            onSelect={(selectedItem, index) => {
              setForm({
                ...form,
                diklat: selectedItem.value,
                namadiklat: selectedItem.name,
              });
            }}
          />

          <TextInput
            label="Angkatan"
            style={styles.input}
            onChangeText={(v) =>
              setForm({
                ...form,
                angkatan: v,
              })
            }
            keyboardType="numeric"
            value={form.angkatan}
          />

          <TextInput
            label="Tahun Diklat"
            style={styles.input}
            onChangeText={(v) =>
              setForm({
                ...form,
                tahun: v,
              })
            }
            keyboardType="numeric"
            value={form.tahun}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    backgroundColor: "#fff",
    //     alignItems: 'flex-start',
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
    marginTop: wp(20),
  },
  input: {
    backgroundColor: "white",
    width: wp(80),
    marginBottom: wp(5),
    borderWidth: 1,
    borderBottomColor: "black",
  },
  input2: {
    backgroundColor: "white",
    width: wp(80),
    marginBottom: wp(5),
    borderWidth: 1,
    borderBottomColor: "black",
    borderRadius: wp(1),
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
