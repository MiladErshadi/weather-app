import {  View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../style/commonStyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.header}>
      <TouchableOpacity
        style={[commonStyles.searchButton]}
        // onPress={() => navigation.navigate('Search')}
      >
        <Feather name="menu" size={24} color="black"/>
      </TouchableOpacity>
      <Text style={commonStyles.name}><FontAwesome5 name="map-marker-alt" size={14} color="#181818" /> shiraz</Text>
    </View>
  );  
}

