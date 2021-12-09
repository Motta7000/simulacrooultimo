import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function pickOption(props) {
    const { navigation, route } = props;
    const { params } = route;
    const { user } = params
    return (
        <View>
                   <TouchableOpacity onPress={() => {
                
                       AsyncStorage.setItem('loged',"0")
                       }}>
                <Text>LOG OUT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('userDetail', { user })}>
            {user &&   <Text>{user.username}</Text> }  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('albums', { user })}>
                <Text>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('comments', { user })}>
                <Text>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('posts', { user })}>
                <Text>Post</Text>
            </TouchableOpacity>

        </View>
    )
}