import {  View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../style/commonStyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import WhiteText from './WhiteText';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.header}>
      <TouchableOpacity
        style={[commonStyles.searchButton]}
      >
        <Feather name="menu" size={24} color="#fff"/>
      </TouchableOpacity>
      <WhiteText style={commonStyles.name}><FontAwesome5 name="map-marker-alt" size={14} color="#fff" /> شیراز</WhiteText>
    </View>
  );  
}