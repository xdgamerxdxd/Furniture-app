import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./styles";
import Button from "./components/Button/Button";

const Splash = () => {
  return (
    <View style={styles.container}>
    <Image resizeMode="contain" style={styles.image} source={require("./assets/sus.png")} />
    <View style={styles.titleContainer}>
         <Text style={styles.title}>You'll Find </Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
          <Text style={styles.title}>Here!</Text>
        </View>

        <Button title="Sign Up" redirect={'(auth)/Signup/SignUp'} style={styles.button1} />

        <Pressable hitSlop={20}>
            <Button textStyle={styles.buttonText} style={styles.button} title="Sign In" redirect={'(auth)/Signin/SignIn'} />
        </Pressable>
    </View>
  );
}

export default Splash;
