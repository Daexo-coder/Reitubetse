import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image  source={require('./pman.jpg')}
    style={styles.profile}></Image>
      <Text style={styles.name}>REITUMETSE MPOROANE</Text>
      <Text  style={styles.id}>901016673</Text>
      <Text  style={styles.sems}>SEMESTER:4</Text>
      <View  style={styles.gradesCont}>
      <Text  style={styles.gradesT}>Semester grades</Text>
      <Text  style={styles.grade}>calculus:B</Text>
      <Text  style={styles.grade}>Java:A</Text>
      <Text  style={styles.grade}>C++:A</Text>
      </View>
      <StatusBar style="auto" />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
   id: {
    fontSize: 16,
    marginBottom: 5,
  },
  semes: {
    fontSize: 16,
    marginBottom: 20,
  },
  gradesT: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gradeCont: {
    alignSelf: 'stretch',
  },
  grade: {
    fontSize: 16,
    marginBottom: 5,
  },
});
