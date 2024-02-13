import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ContactScreen from './screens/ContactScreen';

//names of screens

// const homeName = 'Home';
// const contactName = 'Contact';
// const calculatorName = 'Calculator';

const Drawer = createDrawerNavigator();

export default function DContainer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Calculator" component={CalculatorScreen}/>
                <Drawer.Screen name="Contact" component={ContactScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}