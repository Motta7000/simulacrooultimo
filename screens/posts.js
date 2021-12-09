import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert, ScrollView } from 'react-native'

export default function posts(props) {
    const { navigation, route } = props;
    const {params} = route;
    const {user} = params
    const [posts, setPosts] = useState(null)

    const fetchApi = async () => {
        const res = await (await (fetch('https://jsonplaceholder.typicode.com/posts'))).json()
        console.log(res)
        setPosts(res)

    }
    useEffect(() => {
        fetchApi()
    },[])
    return (
        <ScrollView>
            {posts && posts.filter((post) => post.userId === user.id).map((post) => (
                <View style={{borderWidth:1,margin:5}}>
                    <Text>{post.title}</Text>
                    <Text>{post.body}</Text>
                </View>
            ))}
     
        </ScrollView>
    )
}