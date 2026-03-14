import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { styles } from "./styles";
import ListItem from "../components/ListItem/ListItem";
import Button from "../components/Button/Button";
import { useRouter } from "expo-router";

const Profile = () => {

    const router = useRouter();

    const num = 10;

  const onLogout = () => {
    router.push('/')
  };

  const onSettingsPress = () => {
    router.push('/Settings/Settings')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Header title="Profile" showLogout onLogout={onLogout} />
                <Text style={styles.name}>User name</Text>
                <Text style={styles.email}>User email</Text>

                <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
            </View>
            <Button title="Add New Listing" redirect={'/CreateListing/CreateListing'} />
        </View>
    </SafeAreaView>
  );
};

export default Profile;