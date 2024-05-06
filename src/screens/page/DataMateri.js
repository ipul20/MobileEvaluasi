import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
// import {SelectList} from 'react-native-dropdown-select-list';
// import SelectDropdown from 'react-native-select-dropdown';
import {Appbar, Button, IconButton, MD3Colors} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';

import {API_BASE_URL, BASE_URL} from '../../../env';
import {COLOR, COLOR_GRAY} from '../../styles';

export default function DataMateri({navigation}) {
  const [materi, setMateri] = useState([]);
  const [jenis, setJenis] = useState([
    {name: '1', value: 'aoc'},
    {name: '2', value: 'aoi'},
  ]);
  return (
    <View>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title="Daftar Materi" style={{textAlign: 'center'}} />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          padding: wp(2),
          minHeight: '100%',
        }}>
        <Button
          mode="contained"
          compact={false}
          style={{
            width: '80%',
            paddingVertical: 5,
            marginBottom: 10,
            borderRadius: 7,
            backgroundColor: '#0095DA',
            borderWidth: 2,
          }}
          onPress={() =>
            navigation.navigate('TambahMenu', {
              role: role.toLowerCase(),
            })
          }>
          <View></View>
          <Text>Tambah Data Materi</Text>
        </Button>
        <SelectDropdown
          data={jenis}
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
            console.log(selectedItem.value);
          }}
        />
        {/* <SelectList
          setSelected={val => setSelected(val)}
          data={jenis}
          save="value"
        /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailMateri')}
          style={{
            flexDirection: 'row',
            paddingVertical: wp(2),
            paddingHorizontal: wp(4),
            borderBottomColor: COLOR_GRAY.LIGHT,
            borderBottomWidth: 1,
            width: ' 100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: wp(2),
                marginRight: wp(3),
                padding: wp(1),
                width: wp(15),
              }}>
              <Image
                source={require('../../assets/icon/list.png')}
                style={{
                  width: wp(13),
                  height: wp(13),
                  borderRadius: wp(1),
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: wp(50),
                marginRight: wp(1),
              }}>
              <View
                style={{
                  marginRight: wp(1),
                }}>
                <Text
                  style={{fontSize: wp(5), fontWeight: 'bold'}}
                  adjustsFontSizeToFit
                  numberOfLines={3}>
                  Mengikuti Prosedur Menjaga Kesehatan dan Keselamatan di Tempat
                  Kerja
                </Text>
              </View>
            </View>
            <View
              style={{
                width: wp(30),
                flexDirection: 'row',
              }}>
              <IconButton
                mode="contained"
                icon={require('../../assets/icon/edit.png')}
                iconColor={MD3Colors.error50}
                size={wp(5)}
                onPress={() => navigation.navigate('EditMenu', v)}
              />
              <IconButton
                mode="contained"
                icon={require('../../assets/icon/delete.png')}
                iconColor={MD3Colors.error50}
                size={wp(5)}
                onPress={() => showAlert(v.nama, v.id)}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
