import { View, Text } from "react-native";
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
                router.push('/(auth)/Signin/SignIn')
        }
    
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up" />
            <Input label="name" isPassword={false} placeHolder={'Sussy baka'}/>
            <Input label="Email" isPassword={false} placeHolder={'sussy.baka@gmail.com'}/>
            <Input label="Password" isPassword={true} placeHolder={'sussybakasussus'}/>
            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> <Text> & </Text> <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign up" redirect={'/LoggedIn/LoggedIn'} />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>
                Already have an account? <Text onPress={handlePress} style={styles.footerLink}>Sign in</Text>
            </Text>
        </View>
    )
}

export default SignUp