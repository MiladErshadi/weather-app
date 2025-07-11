import { View } from "react-native";
import { commonStyles } from "../style/commonStyles";
import WhiteText from "./WhiteText";

export default function SearchItem({city,temperature,weather}) {
    return(
        <View style={commonStyles.SearchItem}>
        <WhiteText style={{fontSize:24,}}>{city?city:'...'}</WhiteText>
        <View style={{alignItems:'center',gap:4}}>
            <WhiteText style={{fontSize:24}}>{temperature?temperature:'00'}</WhiteText>
            <WhiteText style={{fontSize:10}}>{weather?weather:'...'}</WhiteText>
        </View>
    </View>
    );
};
