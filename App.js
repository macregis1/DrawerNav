import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './navigation/screens/HomeScreen';
import CalculatorScreen from './navigation/screens/CalculatorScreen';
import ContactScreen from './navigation/screens/ContactScreen';
import ProfileScreen from './navigation/screens/profile';

const homeName = 'Home';
const contactName = 'Contact';
const calculatorName = 'Calculator';
const profileName = 'Profile';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>    
      <Drawer.Navigator 
      screenOptions={({route}) => ({
                drawerIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn ===calculatorName) {
                        iconName = focused ? 'calculator' : 'calculator-outline';
                    }else if (rn === contactName) {
                        iconName = focused ? 'call' : 'call-outline';
                    }else if (rn === profileName){
                      iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


