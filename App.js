import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#181818' }}>
        <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{
                title: 'جستجو',
                headerStyle: {
                  backgroundColor: '#181818',
                },
                headerBackButtonDisplayMode:'generic',
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontSize: 22,
                fontWeight: 'bold',
                color:'#eee',
              },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
