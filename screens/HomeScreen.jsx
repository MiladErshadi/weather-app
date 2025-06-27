import { Text, View } from "react-native";
import Header from "../components/header";
import { commonStyles } from '../style/commonStyles';

export default function HomeScreen() {
    return(
        <View style={commonStyles.home}>
            <Header/>
        </View>
    );
};

