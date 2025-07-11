import {  View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../style/commonStyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import WhiteText from './WhiteText';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={[commonStyles.searchButton]}
      >
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
      <WhiteText style={commonStyles.name}><FontAwesome5 name="map-marker-alt" size={14} color="#fff" /> شیراز</WhiteText>
    </View>
  );  
}