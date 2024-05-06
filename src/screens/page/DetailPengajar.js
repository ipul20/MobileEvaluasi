import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Button, IconButton, MD3Colors} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR_GRAY} from '../../styles';
export default function DetailPengajar() {
  return (
    <View>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content
          title="Daftar Materi Pengajar"
          style={{textAlign: 'center'}}
        />
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'red',
            paddingVertical: wp(5),
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/image/user.png')}
            style={{
              width: wp(20),
              height: wp(20),
              borderRadius: wp(1),
              marginBottom: wp(2),
            }}
          />
          <Text>ipul</Text>
        </View>
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
            marginTop: wp(3),
            alignSelf: 'center',
          }}
          onPress={() =>
            navigation.navigate('TambahMenu', {
              role: role.toLowerCase(),
            })
          }>
          <View></View>
          <Text>Tambah Materi Pengajar</Text>
        </Button>
        <View
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
                width: wp(22),
              }}>
              <Image
                source={require('../../assets/icon/list.png')}
                style={{
                  width: wp(15),
                  height: wp(15),
                  borderRadius: wp(1),
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: wp(60),
                marginRight: wp(2),
              }}>
              <View
                style={{
                  marginRight: wp(2),
                }}>
                <Text style={{fontSize: wp(5), fontWeight: 'bold'}}>
                  ddddd dsdsd dsadas dddd dd dd
                </Text>
              </View>
            </View>
            <View
              style={{
                width: wp(25),
                flexDirection: 'row',
              }}>
              <IconButton
                mode="contained"
                icon={require('../../assets/icon/delete.png')}
                iconColor={MD3Colors.error50}
                size={wp(5)}
                onPress={() => showAlert(v.nama, v.id)}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: wp(31),
              alignSelf: 'center',
              flexDirection: 'row',
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
}
