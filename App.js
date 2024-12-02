
import { SafeAreaView, Text, View, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from "./Style.js";
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  async function ConsultaCep(){

   const req = await fetch("https://viacep.com.br/ws/" + cep + "/json/")
   const retorno = await req.json();

  setResultado("Endereço: " + retorno.logradouro);
  }

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.titulo}>Consulta CEP</Text>
       
        <View style={styles.form}>
          <TextInput placeholder='Digite o CEP ...' style={styles.TextInput} onChangeText={texto => setCep(texto)}/>
          
          <TouchableOpacity style={styles.btn} onPress={ConsultaCep}>
            <Text>Consultar</Text>
          </TouchableOpacity>



        </View>

        <View style={styles.form}>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>
        </SafeAreaView>
  );
}

export default App;

