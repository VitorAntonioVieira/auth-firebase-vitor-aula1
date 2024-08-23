import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RealizarLogin from "../screens/realizarLogin";
import ListaJogadores from "../screens/listaJogadores";
import PaginaPrincipal from "../screens/paginaPrincipal";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
        initialRouteName="RealizarLogin"
        >
            <Stack.Screen name="RealizarLogin" component={RealizarLogin} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
            <Stack.Screen name="ListaJogadores" component={ListaJogadores} />
        </Stack.Navigator>
    )
}

export default MyStack;