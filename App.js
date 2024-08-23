import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

