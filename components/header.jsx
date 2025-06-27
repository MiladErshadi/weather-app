import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../style/commonStyles';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.header}>
      <TouchableOpacity
        style={[commonStyles.searchButton, commonStyles.shadowBox]}
        onPress={() => navigation.navigate('Search')}
      >
        <FontAwesome name="ios-search" size={20} color="#181818" />
      </TouchableOpacity>
      <Text style={commonStyles.name}>Milad Ershadi</Text>
    </View>
  );  
}

