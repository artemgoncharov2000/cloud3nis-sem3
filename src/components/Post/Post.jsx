import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Post = ({route}) => {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: post.image}}/>
            <Text>{post.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 400,
        height: 200,
    }
})

export default Post;