import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagemBiscoitoFechado from './assets/biscoito-fechado.png';
import imagemBiscoitoAberto from './assets/biscoito-aberto.png';
export default function App() {

  const [biscoitoquebrado, setQuebrarBiscoito] = useState(false) 
  const [mensagem, setMensagem] = useState('') 

  const frases = [
    "Acredite em si mesmo e os outros também acreditarão.",
    "A paciência é a chave para todas as portas.",
    "O sucesso nasce do desejo de vencer.",
    "A vida é uma jornada, não um destino.",
    "A sorte favorece os corajosos.",
    "A simplicidade é a melhor forma de sofisticação.",
    "Grandes conquistas exigem grande dedicação.",
    "Siga sua intuição, ela raramente está errada.",
    "O conhecimento é o único tesouro que ninguém pode roubar.",
    "Seja a mudança que você deseja ver no mundo."
  ];
  
  function msg() {
    setQuebrarBiscoito(true)
    const indiceAleatorio = parseInt(Math.random() * frases.length)
    setMensagem(frases[indiceAleatorio])
  }

  return (
    <View style={styles.container}>
          <Image
            style={styles.image}
            source={biscoitoquebrado ? imagemBiscoitoAberto : imagemBiscoitoFechado}
          />

          <Text style={styles.texto}>
            {
              biscoitoquebrado ? mensagem : ''
            }
          </Text>

          <TouchableOpacity 
              style={styles.botao}
              onPress={msg} 
              disabled={biscoitoquebrado}
              >
            <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(false)}>
            <Text style={styles.textoBotao}>Reiniciar Biscoito</Text>
          </TouchableOpacity>

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

  image: {
    width: 200,
    height: 120,
    
  },

  botao: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 180,
    marginBottom: 20
  },

  textoBotao: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  texto: {
    fontSize: 20,
    color: '#72874c',
    marginBottom: 50,
    fontWeight: 'bold',
    backgroundColor: 'white',
    fontFamily: 'Roboto',
    paddingRight: 20,
    paddingLeft: 20
  }
});