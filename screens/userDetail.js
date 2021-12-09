import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert,Image, ScrollView } from 'react-native'

export default function userDetail(props) {
    const {navigation,route} = props
    const {params} = route;
    const {user} = params;

    const fetchApi = async() => {
 
    }
    useEffect(() => {
        fetchApi()
    },[])
    return (
        <ScrollView>
            <Text>{user.id}</Text>
            <Text>{user.name}</Text>
        
        </ScrollView>
    )
}