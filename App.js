import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import Ionicons from "@expo/vector-icons/Ionicons"
import IconButton from './components/UI/Button/IconButton';
import ExpensesContextProvider from './context/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  const colors = GlobalStyles.colors;

  const ExpensesOverview = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: colors.primary500 },
          tabBarActiveTintColor: colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"add"}
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate('ManageExpense')
              }}
            />
          ),
        })}
      >
        <BottomTab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenses}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
