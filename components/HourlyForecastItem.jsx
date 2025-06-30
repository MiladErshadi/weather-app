import { Image, Text, View } from "react-native";
import { commonStyles } from "../style/commonStyles";

export default function HourlyForecastItem({time,temp,img,day,air}) {
    return(
        <View style={commonStyles.HourlyForecastItem}>
            {day?<Text style={{fontSize:12}}>{day}</Text>:''}
            <Text style={{fontSize:10}}>{time}</Text>
            <Image style={commonStyles.HourlyForecastItemImg} src={img}/>
            {air?<Text style={{fontSize:13}}>{air}</Text>:''}
            <Text style={{fontSize:13}}>{temp}</Text>
        </View>
    );
};
