import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useRouter } from "expo-router";


import Input from "../../components/Input/Input"
import AuthHeader from "../../components/auth/AuthHeader";
import CheckBox from "../../components/Checkbox/CheckBox";
import Button from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";
import GoogleLogin from "../../components/googleLogin/GoogleLogin";

const SignUp = () => {
        const [checked, setChecked] = useState(false)
        const router = useRouter(); 

        const handlePress = () => {
                router.push('/(auth)/Signup/SignUp')
        }
    
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign in" />
            <Input label="Email" isPassword={false} placeHolder={'sussy.baka@gmail.com'}/>
            <Input label="Password" isPassword={true} placeHolder={'sussybakasussus'}/>
            <Button style={styles.button} title="Sign in" redirect={'/LoggedIn/LoggedIn'} />
            <Separator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>
                Don't have an account? <Text onPress={handlePress} style={styles.footerLink}>Sign Up</Text>
            </Text>
        </View>
    )
}

export default SignUp