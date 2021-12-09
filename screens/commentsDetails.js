import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'

export default function commentsDetails(props) {
    const {route} = props;
    const {params} = route;
    const {comment} = params
    return (
        <View>
            {comment && 
                <View>
                    <Text>Comment ID :{comment.id}</Text>
                    <Text>PostID: {comment.postId}</Text>
                    <Text>{comment.email}</Text>
                    <Text>{comment.name}</Text>
                    <Text>{comment.body}</Text>
                </View>
            }
        </View>
    )
}