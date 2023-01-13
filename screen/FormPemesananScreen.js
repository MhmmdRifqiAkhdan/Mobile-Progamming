import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { Appbar, TextInput, Button, RadioButton } from "react-native-paper";
import supabase from '../supabase';

function FormPemesananScreen({ navigation, route }) {
    const [nama, setNama] = useState("");
    const [nomor, setNomor] = useState("");
    const [kelamin, setKelamin] = React.useState('');
    // let filter= route.params
    // console.log(route)
    const onSimpan = async () => {
        let pelanggan = await supabase
            .from('pelanggan')
            .insert({
                nama: nama,
                nomor: nomor,
                jenis_kelamin: kelamin
            })
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_pelanggan = pelanggan.data[0].id_pelanggan;

        let tiket_kereta = await supabase
            .from('tiket')
            .insert({
                id_kereta: route.params.id_kereta,
                id_pelanggan: id_pelanggan,
                id_rute_kereta: route.params.id_rute_kereta,
                id_kota: route.params.id_kota,
                id_kota2: route.params.id_kota2
            })
        // console.log({ tiket: tiket_kereta.error, id: tiket_kereta.data[0].id })


        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('TiketTab');
    }



    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack("")} />
                <Appbar.Content title="Data Pemesanan" color="white" />
                <Appbar.Action icon="dots-vertical" color="white" />
            </Appbar.Header>

            <View>
                <TextInput
                    label="Nama Lengkap"
                    value={nama}
                    onChangeText={text => setNama(text)}
                />

                <TextInput
                    label="No.Handphone"
                    value={nomor}
                    onChangeText={text => setNomor(text)}
                />

                <RadioButton.Group onValueChange={kelamin => setKelamin(kelamin)} value={kelamin}>
                    <RadioButton.Item label="Laki-Laki" value="laki-laki" color="#0f1112" style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }} />
                    <RadioButton.Item label="Perempuan" value="perempuan" color="#0f1112" style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }} />
                </RadioButton.Group>

                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    color="#ed4f1a"
                    onPress={() => onSimpan()}
                >
                    Simpan
                </Button>
            </View>
        </>
    );
}
export default FormPemesananScreen;