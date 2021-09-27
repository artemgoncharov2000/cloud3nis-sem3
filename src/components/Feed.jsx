import React from "react";
import PostPreview from './PostPreview/PostPreview';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState } from "react/cjs/react.development";

const Feed = ({navigation}) => {
    
    const [posts, setPosts] = useState([]);

    const onPostCreate = (post) => {
        console.log(post);
        setPosts(posts.concat(post));
        console.log(posts);
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => {navigation.navigate('CreatePost', {handleCreatePost: onPostCreate})}} title="Add" />
          ),
        });
      }, [navigation]);

    
    return (
        <View style={styles.container}>
            {
                posts.length !== 0 
                ? 
                (
                    <FlatList
                        data={posts}
                        renderItem={({item: post}) => <PostPreview post={post} navigation={navigation} />}
                        keyExtractor={(item, index) => index}
                    />
                )
                :
                 <Text>{"No posts"}</Text>
            }
            
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Feed;