import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  fontSize?: number;
}

function Button({ title, fontSize = 12 }: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={{ fontSize: fontSize }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello React Native!
      </Text>
      <Button title='Send 1' fontSize={12} />
      <Button title='Send 2' fontSize={16} />
      <Button title='Send 3' fontSize={20} />
      <Button title='Hello World' fontSize={24} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
