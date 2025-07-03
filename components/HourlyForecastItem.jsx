import { Image, View } from "react-native";
import { commonStyles } from "../style/commonStyles";
import WhiteText from "./WhiteText";
import { icons } from "../assets/image";

export default function HourlyForecastItem({time,temp,icon,day,air}) {
    
    return(
        <View style={commonStyles.HourlyForecastItem}>
            {day?<WhiteText style={{fontSize:12}}>{day}</WhiteText>:''}
            <WhiteText style={{fontSize:10}}>{time}</WhiteText>
            {/* <Image style={commonStyles.HourlyForecastItemImg} source={require('../assets/icon/01d@2x.png')}/> */}
            <Image style={commonStyles.HourlyForecastItemImg} source={icons[icon]}/>
            {air?<WhiteText style={{fontSize:13}}>{air}</WhiteText>:''}
            <WhiteText style={{fontSize:13}}>{temp}</WhiteText>
        </View>
    );
};