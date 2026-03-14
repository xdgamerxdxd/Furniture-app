import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/Header/Header"
import { Linking, Text, View } from "react-native"
import ListItem from "../components/ListItem/ListItem"
import { styles } from "./styles"
import EditBox from "../EditableBox/EditBox"
import { useState } from "react"
import Button from "../components/Button/Button"
import { Ionicons } from "@expo/vector-icons"
import colors from "../utils/colors"
import { router } from "expo-router"

const Settings = () => {
    const [isEditing, setEditing] = useState(false);
    const [values, setValues] = useState({
      name: 'User Name',
      email: 'User Email',
    });
  
    const onChangeText = (key: string, value: string) => {
      setValues({ ...values, [key]: value });
    }
  
    const onEditPress = () => {
      setEditing(true);
    }
  
    const onSavePress = () => {
      setEditing(false);
    }
  
    const onItemPress = () => {
      console.log('item pressed');
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Settings" showBack  onBackPress={() => router.push('/LoggedIn/LoggedIn')}/>
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle} >Personal Information</Text>
            <Ionicons name="pencil-outline" size={32} color={colors.grey} onPress={onEditPress} />
          </View>
          <EditBox label="Name" value={values.name} onChangeText={(value) => onChangeText('name', value)} editable={isEditing} />
          <EditBox label="Email" value={values.email} onChangeText={(value) => onChangeText('email', value)} editable={isEditing} />
          {isEditing ? (<Button style={styles.saveButton} title="Save" onPress={onSavePress} />) : null}
          <Text style={styles.sectionTitle}>Help Center</Text>
          <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
          <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
          <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
        </View>
      </SafeAreaView>
      )
};

export default Settings;