import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ImageBackground, Text, View } from "react-native";
import Header from "../components/header";
import { commonStyles } from '../style/commonStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native';
import HourlyForecastItem from '../components/HourlyForecastItem';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import WhiteText from '../components/WhiteText';
import { icons } from '../assets/image';

export default function HomeScreen() {

    const ValueUsefulInformation = [
        {icon:<Feather name="droplet" size={24} color="#fff" />, title:'رطوبت', value:'15%'},
        {icon:<FontAwesome6 name="temperature-half" size={24} color="#fff" />, title:'دمای تقریبی', value:'32'},
        {icon:<Feather name="wind" size={24} color="#fff" />, title:'سرعت باد', value:'12 < کیلومتر در ساعت'},
        {icon:<MaterialCommunityIcons name="windsock" size={24} color="#fff" />, title:'جهت باد', value:'غرب'},
        {icon:<WhiteText style={{fontWeight: 'bold'}}>UV</WhiteText>, title:'شاخص فرابنفش', value:'پایین'},
    ];

    const ValueWeeklyForecast = [
        {time:'07/01',temp:'12',icon:'10d',day:'یکشنبه',air:'ابری'},
        {time:'07/02',temp:'13',icon:'04d',day:'دوشنبه',air:'آفتابی'},
        {time:'07/03',temp:'16',icon:'50d',day:'سه',air:'بارونی'},
        {time:'07/04',temp:'14',icon:'11d',day:'چهارشنبه',air:'ابری'},
        {time:'07/05',temp:'18',icon:'10d',day:'پنجشنبه',air:'ابری'},
    ];

    const ValueHourlyForecast = [
        {time:'07:56',temp:'11',icon:'01d',},
        {time:'07:56',temp:'16',icon:'02d',},
        {time:'07:56',temp:'16',icon:'03d',},
        {time:'07:56',temp:'16',icon:'04d',},
        {time:'07:56',temp:'16',icon:'11d',},
        {time:'07:56',temp:'16',icon:'13d',},
    ];
    
    return(
    <ImageBackground
    source={require('../assets/download.jpg')} // آدرس عکس
    style={commonStyles.background}
    resizeMode="cover"
    >
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={commonStyles.home}>
                <Header/>
                <View style={commonStyles.CurrentTemperature}>
                    <View style={{alignItems:'center'}} >
                        <WhiteText style={commonStyles.Temperature}>16</WhiteText>
                        <View style={commonStyles.arrowUpDown}>
                            <WhiteText><AntDesign name="arrowup" size={12} color="#fff" />17</WhiteText>
                            <WhiteText><AntDesign name="arrowdown" size={12} color="#fff" />10</WhiteText>
                        </View>
                        <WhiteText>آفتابی</WhiteText>
                    </View>
                </View>

                <View>
                    <View style={commonStyles.WeatherForecast}>
                        <View style={commonStyles.borderView}></View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentOffset={{ x: 1000 }} contentContainerStyle={commonStyles.HourlyForecast}>
                            {ValueHourlyForecast.map((item,index)=>{
                                return <HourlyForecastItem key={index} time={item.time} temp={item.temp} icon={item.icon} day={''} air={''}/>
                            })
                            }
                        </ScrollView>
                    </View>

                    <View style={commonStyles.WeatherForecast}>
                        <View style={commonStyles.borderView}></View>
                        <View style={commonStyles.WeeklyForecast}>
                            {ValueWeeklyForecast.map((item,index)=>{
                                return <HourlyForecastItem key={index} time={item.time} temp={item.temp} icon={item.icon} day={item.day} air={item.air}/>
                            })

                            }
                        </View>
                    </View>
                    <WhiteText style={{marginRight:24,marginTop:24}}>اطلاهات مفید</WhiteText>
                    <View style={commonStyles.UsefulInformation}>
                        {ValueUsefulInformation.map((item,index)=>{
                            return <View key={index} style={commonStyles.UsefulInformationItem}>
                            {item.icon}
                            <WhiteText style={{fontSize:12}}>{item.title}</WhiteText>
                            <WhiteText style={{fontSize:10,color:'#aaa'}}>{item.value}</WhiteText>
                        </View>
                        })}
                    </View>

                    <WhiteText style={{marginRight:24,marginTop:8}}>طلوع و غروب خورشید</WhiteText>
                    <View style={commonStyles.SunriseAndSunset}>
                        <View style={commonStyles.SunriseAndSunsetItem}>
                            <Image style={{width:64,height:64}} source={icons['01d']}/>
                            <WhiteText style={{color:'#aaa'}}>5:56 طلوع</WhiteText>
                            <WhiteText style={{color:'#aaa'}}>20:52 غروب</WhiteText>
                        </View>
                        <View style={commonStyles.SunriseAndSunsetItem}>
                            <Image style={{width:64,height:64}} source={icons['01n']}/>
                            <WhiteText style={{color:'#aaa'}}>5:56 طلوع</WhiteText>
                            <WhiteText style={{color:'#aaa'}}>20:52 غروب</WhiteText>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
    );
};
