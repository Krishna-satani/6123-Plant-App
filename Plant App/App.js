import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput, Image, ScrollView, SafeAreaView } from "react-native";

const Plant = (props) => {
  const [isThirsty, setIsThirsty] = useState(true);
  const [wateringTime, setwateringTime] = useState(3000);

  return (
   
    <View>
      
     
      <Text>
        I am {props.name}, and I am {isThirsty? "thirsty" : "full"}!
       </Text>
       <Text>
       Discription :- {props.discription}!

       </Text>
       <Text>
        Link :- {props.link}
       </Text>

       <Image
         style={{width: 200, height:200}}
         resizeMode="contain"
         source={{url: props.link}}
       />

      <Button
        onPress={() => {
          setIsThirsty(false);
          setTimeout(
            () => {
              setIsThirsty(true)
            }, wateringTime
          );
        }}
        disabled={!isThirsty}
        title={isThirsty ? "Please water me!" : "Thank you!"}
      />
      <TextInput
        style = {{height: 40}}
        placeholder = 'set a watering time'
        onChangeText = { inputValue => setwateringTime(inputValue) }
        defaultValue = { wateringTime }
      />
     
    </View>
    
  );
}

const plants = [
  {
    id:1,
    name:'Florists Choice Green Plant',
    discription: 'Its foliage is evergreen green.',
    link: 'https://content.hy-vee.com/remote.axd/www.hy-vee.com/webres/Image/catalog/175_2_florist-choice-green-plant-MTOoct.jpg?v=1&mode=crop&quality=75&width=500&height=500'
  },
  {
    id:2,
    name:'Camellia',
    discription: 'Camellias are evergreen shrubs or small trees up to 20 m (66 ft) tall.',
    link: 'https://bloximages.newyork1.vip.townnews.com/chronicleonline.com/content/tncms/assets/v3/editorial/4/72/47291c46-2fdc-5639-8c99-5f75c88a564a/61d71a7c07b8d.image.jpg?resize=500%2C500'
  }
];

const Plants = () => {
  return plants.map(
    (plant) => {
      return (
        <Plant key={plant.id} name={plant.name} discription={plant.discription} link={plant.link}/>
      );
    }
  );
}

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      {Plants()}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});

export default App;
