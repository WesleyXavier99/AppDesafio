import React,  {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Switch, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {

  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [SelectedGenero,setSelectGenero] = useState('Masculino');
  const [limite,setLimite] = useState(0);
  const [estudante, setEstudante] = useState(false);
  const status = estudante? "é estudante" : "não é estudante";
  const sexo = SelectedGenero? "Masculino" : "Feminino";

  const verificaNomeVazio = nome === ''? 1 : 0;
  const verificaIdadeVazio = idade === ''? 1 : 0;

  const showAlert = () => {
    if(verificaIdadeVazio){
      Alert.alert(
        'Usuario Não Cadastrado',
        'Preencha o campo Idade',
        [
          {text: 'Cancelar', onPress: () => console.log('Botão Cancelar pressionado')},
          {text: 'OK', onPress: () => console.log('Botão OK pressionado')}
        ],
        { cancelable: true }
      );
    }else if (verificaNomeVazio){
      Alert.alert(
        'Usuario Não Cadastrado',
        'Preencha o campo nome',
        [
          {text: 'Cancelar', onPress: () => console.log('Botão Cancelar pressionado')},
          {text: 'OK', onPress: () => console.log('Botão OK pressionado')}
        ],
        { cancelable: true }
      );
    }else{
      Alert.alert(
        'Usuario Cadastrado',
        '\n\nNome: '+ nome +'\n\n'+'Idade: '+ idade + '\n\n'+ 'Genero: '+ sexo + '\n\n' + 'Limite: R$'+ limite.toFixed(2) + '\n\n' + status,
        [
          {text: 'Cancelar', onPress: () => console.log('Botão Cancelar pressionado')},
          {text: 'OK', onPress: () => console.log('Botão OK pressionado')}
        ],
        { cancelable: true }
      );
    }
    
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Banco React!</Text>
      <Text style={styles.subtitulo}>Faça seu cadastro conosco:</Text>
      
      <View style={styles.formulario}>
        <View style={styles.sessao}>
          <Text style={styles.tituloSessao}>Nome</Text>
          <TextInput 
          onChangeText={(inputNome)=>setNome(inputNome)}
          style={styles.inputSessao} placeholder='digite aqui'/>
        </View>
        
        <View style={styles.sessao}>
          <Text style={styles.tituloSessao}>Idade</Text>
          <TextInput 
            style={styles.inputSessao}
            placeholder='digite aqui' 
            onChangeText={(inputIdade)=>setIdade(inputIdade)}/>
        </View>
        
        <View style={styles.sessao}>
          <Text style={styles.tituloSessao}>Genero</Text>
            <Picker 
            selectedValue={SelectedGenero}
            onValueChange={(newGenero)=>setSelectGenero(newGenero)}>
              <Picker.Item value={1} label='Masculino'/>
              <Picker.Item value={0} label='Feminino'/>
            </Picker>
        </View>
        
        <View style={styles.sessao}>
          <Text style={styles.tituloSessao}>Seu Limite (400-3000)</Text>
            <Slider
              minimumValue={400}
              maximumValue={3000}
              value={limite}
              onValueChange={(value)=>setLimite(value)}
            />
            <Text>R$ {limite.toFixed(2)}</Text>
        </View>
        
        <View style={styles.sessao}>
          <View style={styles.switchContainer}>
              <Text style={styles.switchText}>
                 Você é estudante?
              </Text>
            <Switch 
            value={estudante}
            onValueChange={(status)=>setEstudante(status)}/>
          </View>
        </View>

        <Button title='Criar Conta' onPress={showAlert}></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:"13%",
    marginLeft:"2%",
    marginRight:"2%"
  },
  titulo:{
    fontSize:35,
    textAlign:'center',
    marginBottom:"5%"
  },
  subtitulo:{
    fontSize:25,
    margin:"5%"
  },
  formulario:{
    borderWidth:1,
    //backgroundColor:'red',
    borderRadius:25,
    padding:"5%"
  },
  tituloSessao:{
    fontSize:20,
  },
  sessao:{
    justifyContent:'space-between',
    //borderWidth:0.7
    marginBottom:"8%"
  },
  inputSessao:{
    borderWidth:0.5,
    height:40,
    paddingLeft:5
  },
  switchContainer:{
    justifyContent:'space-between',
    //backgroundColor:'green',
    flexDirection:'row'
  },
  switchText:{
    //alignItems:'flex-start',
    //backgroundColor:'red',
    fontSize:20,
    marginTop:"3%"
  }
});
