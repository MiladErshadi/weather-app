import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    // ----------------------- home
    home:{
        direction:'rtl',
    },
    // ----------------------- header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 12,
        alignItems: 'center'
    },
    // ----------------------- searchButton
    searchButton: {
        padding: 8,
        height: 40,
        width: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // ----------------------- searchButton
    name: {
        fontSize: 16,
        fontWeight: '600',
    },
    // ----------------------- searchButton
    shadowBox: {
        backgroundColor: '#fff',
        shadowColor: '#707070',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 14,
        elevation: 8, // برای Android
        borderRadius: 12
    },
});