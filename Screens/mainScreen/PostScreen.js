import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const PostScreen = ({route}) => {
    const [posts, setPosts] = useState([])
    console.log('route', route.params)

    useEffect(() => {
        if(route.params) {
            setPosts((prevState) => [...prevState, route.params])
        }
    }, [route.params])
console.log('posts', posts)
    return (
        <View style={styles.container}>
            <FlatList data={posts} 
            keyExtractor={(item, indx) => indx.toString()} 
            renderItem={( {item} ) => (
                <View style={styles.containerImage}>
                    <Image
                    source={{ uri: item.capturedImage.uri}}
                    style={styles.image}
                    />

                </View>
            )}/>

        </View>
    )
    };

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            justifyContent: 'center',           
            // alignItems: 'center'
        },
        containerImage: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        image: {
            width: 343,
            height: 240,
            

        }
    })

export default PostScreen;