import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 40px;
  color: blue;
`;

function App() {
  return (
    <SafeAreaView>
      <Text>Olá</Text>
      <TextNew>Novo Texto</TextNew>
    </SafeAreaView>
  );
}
export default App;
