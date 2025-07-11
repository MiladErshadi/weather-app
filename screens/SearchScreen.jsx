import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../style/commonStyles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import WhiteText from "../components/WhiteText";
import SearchItem from "../components/SearchItem";

export default function SearchScreen() {
    const [text, setText] = useState('');

    const citys = [
        {city:'شیراز', temperature:'-8', weather:'برفی'},
        {city:'تهران', temperature:'12', weather:'ابری'},
        {city:'اصفهان', temperature:'2', weather:'بارونی'},
        {city:'کرمان', temperature:'55', weather:'آفتابی'},
    ];
    
    return(
        <View style={{flex:1,backgroundColor:'#181818'}}>
            <View style={commonStyles.searchContainer}>
                <View style={commonStyles.searchBox}>
                    <TextInput
                        style={commonStyles.SearchInput}
                        placeholder="جستجو"
                        value={text}
                        onChangeText={setText}
                        placeholderTextColor={'#eee'}
                    />
                    <View style={commonStyles.SearchIcon}><Ionicons name="search" size={20} color="#aaa" /></View>
                </View>
            </View>
            <ScrollView contentContainerStyle={commonStyles.ScrollSearch}>
                {citys.length?citys.map((item,index)=>{
                    return <SearchItem key={index} city={item.city} temperature={item.temperature} weather={item.weather}/>
                }):<WhiteText style={{fontSize:16,margin:"auto",marginTop:16}}>چیزی یافت نشد</WhiteText>}
            </ScrollView>
        </View>
    );
};

