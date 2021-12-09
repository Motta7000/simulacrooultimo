import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'

export default function comments(props) {
    const {navigation} = props
    const [comments,setComments] = useState(null)

    const fetchApi = async() => {
        const res = await (await (fetch('https://jsonplaceholder.typicode.com/comments'))).json()
        console.log(res)
        setComments(res)
    }
    useEffect(() => {
        fetchApi()
    },[])
    return (
        <View>
            {comments && comments.map((comment) => (
                <TouchableOpacity onPress={() => navigation.navigate('commentsDetails',{comment})} style={{borderWidth:1}}>
                    <Text>{comment.name}</Text>
                    <Text>{comment.body}</Text>
                    <Text>Click here</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}