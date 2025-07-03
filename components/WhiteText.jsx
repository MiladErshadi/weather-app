
import { Text } from 'react-native';

const WhiteText = ({ children, style, ...props }) => (
  <Text style={[{ color: '#fff' }, style]} {...props}>
    {children}
  </Text>
);

export default WhiteText;