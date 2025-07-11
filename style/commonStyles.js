import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    color:{
        color: '#fff'
    },
    // ----------------------- home
    home:{
        direction:'rtl',
        flex: 1,
    },
    // ----------------------- header
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display:'flex',
        direction:'rtl',
        paddingTop:32,
        padding:16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  },
    // ----------------------- searchButton
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    // ----------------------- name
    name: {
        fontSize: 16,
        fontWeight: '600',
    },
    // ----------------------- CurrentTemperature
    CurrentTemperature: {
        marginTop: 24,
        marginBottom: 60
    },
    // ----------------------- Temperature
    Temperature: {
        fontSize: 100,
        marginBottom: 4,
    },
    // ----------------------- arrowUpDown
    arrowUpDown: {
        flexDirection:'row',
        gap:10,
        marginBottom:8
    },
    // ----------------------- backgroundImage
    background: {
    flex: 1,
    },
    // ----------------------- HourlyForecast
    WeatherForecast: {
        gap:16,
        paddingBottom:16,
    },
    WeeklyForecast: {
        flexDirection:'row',
        gap:16,
        paddingInline: 24
    },
    HourlyForecast: {
        flexDirection: 'row',
        gap: 24,
        paddingHorizontal: 24,
    },
    HourlyForecastItem: {
        alignItems:'center',
    },
    HourlyForecastItemImg: {
        width:50,
        height:50,
        marginBlock:10,
        // backgroundColor:'#dedede',
         resizeMode: 'contain',
    },
    // ----------------------- UsefulInformation
    UsefulInformation: {
        flexDirection:'row',
        flexWrap:'wrap',
        rowGap:24,
        marginBlock:8,
        marginInline:16,
        borderRadius:16,
        paddingBlock:24,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#fff3',
    },
    UsefulInformationItem: {
        width:'50%',
        alignItems:'center',
    },
    // ----------------------- SunriseAndSunset
    SunriseAndSunset:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#fff3',
        marginTop:8,
        marginBottom:16,
        marginInline:16,
        borderRadius:16,
        paddingBlock:24,
    },
    SunriseAndSunsetItem:{
        alignItems:'center',
        justifyContent:'center'
    },
    // ----------------------- Search
    searchContainer:{
        padding:16,
    },
    searchBox: {
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#383838',
        borderRadius: 32,
        alignItems:'center',
        paddingInline:12,
        gap:4,
    },
    SearchIcon: {
    },
    SearchInput: {
        color:'#fff',
        height:'100%',
        flex:1,
    },
    ScrollSearch: {
        paddingInline:16,
        paddingBottom:16,
        gap:16,
    },
    SearchItem: {
        backgroundColor:'#888',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        paddingInline:16,
        paddingBlock:12,
        borderRadius:16,
        alignItems:'center',
    },
    // ----------------------- borderView
    borderView: {
        marginInline:24,
        borderTopWidth:1,
        borderTopColor:'#dadada',
    },

    cfgf: {
        flexDirection:'row',
        gap:16,
        paddingInline: 24,
    }

});