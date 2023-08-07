import DrawerView from './DrawerView';
import {
	AnonymousParamList,
	ERoutes,
	RegisteredParamList1,
	RegisteredParamList2,
	RegisteredParamList3,
	RegisteredParamList4
} from './constants';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '@screens/Anonymous';
import {
	RegisteredScreen1,
	RegisteredScreen1Header,
	RegisteredScreen2,
	RegisteredScreen3,
	RegisteredScreen4,
	RegisteredScreen5,
	RegisteredScreen6,
	RegisteredScreen7,
	RegisteredScreen8
} from '@screens/Registered';

const PublicStack = createNativeStackNavigator<AnonymousParamList>();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const RegisteredStack1 = createNativeStackNavigator<RegisteredParamList1>();
const RegisteredStack2 = createNativeStackNavigator<RegisteredParamList2>();
const RegisteredStack3 = createNativeStackNavigator<RegisteredParamList3>();
const RegisteredStack4 = createNativeStackNavigator<RegisteredParamList4>();

function PublicStackNavigator() {
	return (
		<PublicStack.Navigator>
			<PublicStack.Screen name={ERoutes.Welcome} component={WelcomeScreen} options={{ title: 'Welcome' }} />
		</PublicStack.Navigator>
	);
}

function RegisteredTabNavigator() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue' }} safeAreaInsets={{ bottom: 0 }}>
			<Tab.Screen
				name={ERoutes.RegisteredStack1}
				component={RegisteredStackNavigator1}
				options={{
					tabBarTestID: 'tab1',
					tabBarLabel: 'Tab 1',
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="arrow-down" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={ERoutes.RegisteredStack2}
				component={RegisteredStackNavigator2}
				options={{
					tabBarTestID: 'tab2',
					tabBarLabel: 'Tab 2',
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="arrow-left" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={ERoutes.RegisteredStack3}
				component={RegisteredStackNavigator3}
				options={{
					tabBarTestID: 'tab3',
					tabBarLabel: 'Tab 3',
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="arrow-up" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name={ERoutes.RegisteredStack4}
				component={RegisteredStackNavigator4}
				options={{
					tabBarTestID: 'tab4',
					tabBarLabel: 'Tab 4',
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="arrow-right" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	);
}

function RegisteredStackNavigator1() {
	return (
		<RegisteredStack1.Navigator>
			<RegisteredStack1.Screen
				name={ERoutes.Registered1}
				component={RegisteredScreen1}
				options={{
					header: RegisteredScreen1Header
				}}
			/>
			<RegisteredStack1.Screen name={ERoutes.Registered2} component={RegisteredScreen2} />
		</RegisteredStack1.Navigator>
	);
}

function RegisteredStackNavigator2() {
	return (
		<RegisteredStack2.Navigator>
			<RegisteredStack2.Screen name={ERoutes.Registered3} component={RegisteredScreen3} />
			<RegisteredStack2.Screen name={ERoutes.Registered4} component={RegisteredScreen4} />
		</RegisteredStack2.Navigator>
	);
}

function RegisteredStackNavigator3() {
	return (
		<RegisteredStack3.Navigator>
			<RegisteredStack3.Screen name={ERoutes.Registered5} component={RegisteredScreen5} />
			<RegisteredStack3.Screen name={ERoutes.Registered6} component={RegisteredScreen6} />
		</RegisteredStack3.Navigator>
	);
}

function RegisteredStackNavigator4() {
	return (
		<RegisteredStack4.Navigator>
			<RegisteredStack4.Screen name={ERoutes.Registered7} component={RegisteredScreen7} />
			<RegisteredStack4.Screen name={ERoutes.Registered8} component={RegisteredScreen8} />
		</RegisteredStack4.Navigator>
	);
}

const AppNavigator = () => {
	// return <PublicStackNavigator />;

	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerView {...props} />}>
			<Drawer.Screen name="Tab" component={RegisteredTabNavigator} />
		</Drawer.Navigator>
	);
};

export default AppNavigator;
