import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Input from "../Input/Input";

type headerProps = {
    title: string;
    onBackPress?: () => void;
    onLogout?: () => void;
    showBack?: boolean;
    showSearch?: boolean;
    showLogout?: boolean;
    onSearchKeyword?: (keyword: string) => void;
    keyword?: string;
}

const Header = ({ title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword }: headerProps) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    
    const onSearch = () => {
        setShowSearchInput( search => !search);
    }
    
    return (
    <View>
        <View style={styles.container}>
        {showBack ? (
            <Pressable hitSlop={20} onPress={onBackPress}>
            <Image style={styles.icon} source={require("../../assets/back.png")} />
            </Pressable>
        ) :  showSearch ? (
            <Pressable hitSlop={20} onPress={onSearch}>
            <Image style={styles.icon} source={require("../../assets/search.png")} />
            </Pressable>
        ) : <View style={styles.space} />}

        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
            <Pressable hitSlop={20} onPress={onLogout}>
            <Image style={styles.icon} source={require("../../assets/logout.png")} />
            </Pressable>
        ) : <View style={styles.space} />}
        </View>
        {showSearchInput ? (
            <Input onChangeText={onSearchKeyword} value={keyword} placeHolder="Type your keyword" />
        ) : null}
    </View>
  );
};

export default Header;
