import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou!');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin="8px" title="ENTRAR" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
