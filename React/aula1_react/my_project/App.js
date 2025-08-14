import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
  //return (
    //<View style={styles.container}>
      //<Text>Guilherme Enrique Sem H</Text>
      //<Text>Garoto de Programa</Text>
      //<Text>Idade: 100 anos</Text>
      //<Text>Gênero: M</Text>
      //<Text>Experiências: Zerou Dark Souls 2 no Hard</Text>
      //<Text> 1920 | Serviu o Exército </Text>
      //<Text> 1932 | Escrivão </Text>
      //<Text> 1954 | Conzinheiro de Restaurante Japonês </Text>
      //<Text> 1997 | Trabalhou no Atacadão </Text>
      //<Text> 2002 | Programador Senior Master da Konami </Text>

      //<StatusBar style="auto" />
    //</View>
  //);
//}

export default function App(){
  return (
    <View style={styles.container}>
       <Text>Rodolfo garcias Nunes</Text>
       <Text>redator</Text>
       <Text>idade: 25 anos</Text>
       <Text>Gênero: nao indetificado</Text>
       <Text>Experiências: sei fazer um tripo mortal carpado, e bolinhos de chuvas</Text>
       <Text> 2005 | ingressou em Harvard</Text>
       <Text> 2010 | construi meu primeiro imperio</Text>
       <Text> 2015 | jantei com Elon mosk</Text>
       <Text> 2020 | eu transendi a materia</Text>

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
  },
});
