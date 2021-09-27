import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const PostPreview = (props) => {
    const { post, navigation } = props;

    const handlePress = () => {
        navigation.navigate('Post', {post: post})
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: post.image}}/>
            <View style={styles.textContainer}>
                <Text>{post.text}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Open" onPress={handlePress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    textContainer: {
        height: 30,
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 200,
    },
    buttonContainer: {
        alignItems: 'flex-start',
    }
})

export default PostPreview;