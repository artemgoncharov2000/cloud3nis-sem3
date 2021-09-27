import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Image, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const CreatePost = ({route, navigation}) => {
    const { handleCreatePost } = route.params;
    
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const pickImage = async () => {
        setLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
          setLoading(false);
        }
    };

    const onCreate = () => {
        handleCreatePost({
            text: text,
            image: image,
        })
        
        navigation.goBack();
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={onCreate} title="Create" />
          ),
        });
      }, [navigation, image, text]);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    return (
        <View style={styles.container}>
            <TextInput placeholder='Type something here...' value={text} onChangeText={setText}/>
            {image && (
                <Image style={styles.image} source={{uri: image}}/>
            )}
            {
                loading && (
                    <ActivityIndicator size="large" />
                )
            }
            <Button title="Add image" onPress={pickImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    image: {
        width: 400,
        height: 200,
    }
    
})

export default CreatePost;