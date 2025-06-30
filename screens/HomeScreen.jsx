import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ImageBackground, Text, View } from "react-native";
import Header from "../components/header";
import { commonStyles } from '../style/commonStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import HourlyForecastItem from '../components/HourlyForecastItem';

export default function HomeScreen() {
    return(
    <ImageBackground
    // source={require('../assets/bg.png')} // آدرس عکس
    style={commonStyles.background}
    resizeMode="cover"
    >
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={commonStyles.home}>
                <Header/>
                <View style={{marginTop: 24, marginBottom: 60}}>
                    <View style={{alignItems:'center'}} >
                        <Text style={{fontSize: 100,marginBottom: 4}}>16</Text>
                        <View style={{flexDirection:'row', gap:10, marginBottom:8}}>
                            <Text><AntDesign name="arrowup" size={12} color="black" />17</Text>
                            <Text><AntDesign name="arrowdown" size={12} color="black" />10</Text>
                        </View>
                        <Text>آفتابی</Text>
                    </View>
                </View>

                <View>
                    <View style={commonStyles.HourlyForecast}>
                        <View style={commonStyles.borderView}></View>
                        {/* <Text style={{marginRight:24}}>پیشبینی ساعتی</Text> */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentOffset={{ x: 1000 }} contentContainerStyle={{ flexDirection: 'row', gap: 24, paddingHorizontal: 24 }}>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                            <HourlyForecastItem time={'07:56'} temp={'16'} img={''} day={''} air={''}/>
                        </ScrollView>
                    </View>

                    <View style={commonStyles.HourlyForecast}>
                        <View style={commonStyles.borderView}></View>
                        {/* <Text style={{marginRight:24}}>پیشبینی پنج روز اینده</Text> */}
                        <View style={{flexDirection:'row', gap:16, paddingInline: 24}}>
                            <HourlyForecastItem time={'07/01'} temp={'16'} img={''} day={'یکشنبه'} air={'ابری'}/>
                            <HourlyForecastItem time={'07/02'} temp={'16'} img={''} day={'دوشنبه'} air={'آفتابی'}/>
                            <HourlyForecastItem time={'07/03'} temp={'16'} img={''} day={'سه شنبه'} air={'بارونی'}/>
                            <HourlyForecastItem time={'07/04'} temp={'16'} img={''} day={'چهارشنبه'} air={'ابری'}/>
                            <HourlyForecastItem time={'07/05'} temp={'16'} img={''} day={'پنجشنبه'} air={'ابری'}/>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
    );
};

