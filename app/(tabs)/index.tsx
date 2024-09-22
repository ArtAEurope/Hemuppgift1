import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    
<View style={{backgroundColor: "#59c4f6", flex:1,}}>
  <View style={{backgroundColor: "#e94d3c", height: 150, margin:2}}>
    <View style={{flex:1, justifyContent:"center", alignItems:"center",}}>
      <Text style={{ fontSize: 30}}>RÖD</Text>
    </View>
</View>  

  <View style={{backgroundColor: "white", height:150, flexDirection:"row", margin: 2}}>
      <View style= {{backgroundColor:"#63c465", width:"50%", flex:1, }}>
        <View style= {{flex:1, justifyContent:"flex-start",}}>
          <Text style={{fontSize:32}}>GRÖN</Text>
      </View>
      
      </View>
      
      <View style= {{backgroundColor:"#f6cd46",width:"50%", flex:1}}></View>

  </View>

  <View style= {{backgroundColor: "white", height: 80, flexDirection: "row", margin:2}}>
    <View style= {{backgroundColor: "#e94d3c", flex:2,}}></View>
    <View style= {{backgroundColor: "black", flex:1 }}></View>
     </View>
  
<View style= {{flex:1}}></View>

<View style= {{backgroundColor: "#ee8c00", height: 50,margin:2}}>
  <View style={{flex:1, justifyContent:"flex-end", alignItems:"flex-end",}}>
    <Text style={{fontSize:32}}>ORANGE</Text>
    </View>

</View>







</View>



















    
    
   
   
   

  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
