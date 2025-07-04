import React from 'react';
import {  Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = React.useState('');
  const [displayText , setDisplayText] = React.useState('');
  

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f0f0f0',
      width: '100%',
      height: 100,
      padding: 20,
      alignItems: 'center',
    }}>
      { /* Header Section */}
      <View style={{
        backgroundColor: '#f0f0f0',
        padding: 5,
        alignItems: 'center',
      }}>
        <Text style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
        }}
        >
          Interactive React Native App
        </Text>
        <Text style={{
          color: '#333',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 10,
        }}
        >
          This is a simple form built with React Native Expo framework.
        </Text>

      </View>
      
      { /* The Form Section */}
      <View style={{
        backgroundColor: '#fof0f0',
        width: '100%',
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        height: 200,
      }}
      >
        <TextInput
          placeholder='Enter your name'
          value={name}
          onChangeText={setName}
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            marginTop: 5,
          }}
        />
        <View
        style={{
          width: '100%',
          marginTop: 10,
            padding: 2,
          borderRadius: 10,
          backgroundColor: 'green',
        }}>
        <Button
            title='Submit'
            color='#fff'
            
            onPress={() => {
              setDisplayText(`${name}`)
            }}
          />          
        </View>

        <Text style={{
            color: 'black',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 10,
          }}
          >
            {displayText}
          </Text>
      </View>
  </View>
  );
}
















// import React from 'react';
// import { Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: 'green',
//       width: '100%', height: 100,
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <Icon name="hand-wave" size={88} color='white' style={{ marginBottom: 10}} />
//       <Text style={{
//         color: 'white',
//         fontSize: 40,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 5, 
//       }}>
//         Hello Everyone
//       </Text>
//       <Text style={{
//         color: 'white',
//         fontSize: 12,
//         textAlign: 'center'
//       }}>
//         This is a simple application built with React Native Expo framework
//       </Text>
//     </View>
//   );
// }




