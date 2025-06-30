import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    // ----------------------- home
    home:{
        direction:'rtl',
        flex: 1,
    },
    // ----------------------- header
    header: {
        padding:16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // ----------------------- searchButton
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    // ----------------------- searchButton
    name: {
        fontSize: 16,
        fontWeight: '600',
    },
    // ----------------------- backgroundImage
    background: {
    flex: 1,
    },
    overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)' // اگه بخوای تار شه
    },
    // ----------------------- HourlyForecast
    HourlyForecast: {
        gap:16,
        paddingBottom:16,
    },
    HourlyForecastItem: {
        alignItems:'center',
    },
    HourlyForecastItemImg: {
        width:50,
        height:50,
        marginBlock:10,
        backgroundColor:'#dedede',
    },
    // ----------------------- borderView
    borderView: {
        marginInline:24,
        borderTopWidth:1,
        borderTopColor:'#dadada',
    }

});