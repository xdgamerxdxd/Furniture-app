import { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator, Button, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker'
import styles from "./styles";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import colors from "../utils/colors";
import { categories } from "../Data/categories";


const CreateListing = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
      title: "",
      category: "",
      price: "",
      description: "",
    });

    const router = useRouter();
    
    const goBack = () => {
      router.back();
    }
  
    const handleImagePick = async () => {
      setLoading(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsMultipleSelection: true,
        quality: 1,
      });
  
      if (!result.canceled && result.assets) {
        const newImages = result.assets.map((asset: ImagePicker.ImagePickerAsset) => asset.uri);
        setImages([...images, ...newImages]);
      }
      setLoading(false);
    };
  
    const onDeleteImage = (index: number) => {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
    }
  
    const handleInputChange = (key: string, value: string) => {
      setValues({ ...values, [key]: value });
    }
  
    const handleSubmit = () => {
      console.log(values);
    }
  
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Header title="Create Listing" showBack onBackPress={goBack} />
          <View style={styles.content}>
          <Text style={styles.sectionTitle}>Upload photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.uploadContainer} onPress={handleImagePick}>
              <View style={styles.uploadCircle}>
                <Ionicons style={styles.uploadPlus} name="add" size={28} color={colors.grey} />
              </View>
            </TouchableOpacity>
            {images.map((uri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image key={index} source={{ uri }} style={styles.image} />
                <Ionicons style={styles.delete} name="close" size={24} color={colors.grey} onPress={() => onDeleteImage(index)} />
              </View>
            ))}
            {loading && (
              <ActivityIndicator />
            )}
          </View>
          <Input label="Title" placeHolder="Title" value={values.title} onChangeText={(text) => handleInputChange("title", text)} />
          <Input 
            label="Category" 
            placeHolder="Select Category" 
            value={values.category || ''} 
            onChangeText={(text) => handleInputChange("category", text)} 
            type="picker" 
            options={categories.map(cat => cat.title)} 
          />
          <Input label="Price" placeHolder="Price" value={values.price} onChangeText={(text) => handleInputChange("price", text)} keyboardType="numeric" />
          <Input style={styles.textarea} label="Description" placeHolder="Description" value={values.description} onChangeText={(text) => handleInputChange("description", text)} multiline />
          <Button title="Submit" onPress={handleSubmit} />
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
  
  export default CreateListing;