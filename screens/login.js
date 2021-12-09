import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function login(props) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [remember, setRemember] = useState(null)
    const [users, setUsers] = useState(null)
    const [user,setUser] = useState(null)
    const { navigation } = props

    const handleSubmit = () => {
        var login = false;
   
        
        console.log(username)
        users.map((userx) => {
            if (userx.username === username && userx.email === password) {
                login = true;
                setUser(userx)
            }
        })
        if (login === true) {
            if (remember === true)
            {
                AsyncStorage.setItem('loged',"1")
            }
            navigation.navigate('pickOption', { user })
        }
        else {
            Alert.alert('Username o password incorrecto')
        }

    }
    const fetchApi = async () => {
        const async = await AsyncStorage.getItem('loged')
        console.log(async)
        if (async === "1")
        {
            navigation.navigate('pickOption', { user })
        }
       
        const res = await (await (fetch('https://jsonplaceholder.typicode.com/users'))).json()
        console.log(res)
        setUsers(res)
    }
    useEffect(() => {
        fetchApi();
    },[])
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>1098460 Motta, Agustin Fabio</Text>
            <Text>Username</Text>
            <TextInput style={{ borderColor: 'black', borderWidth: 2 }} onChangeText={(username) => {
                setUsername(username)
            }} />
            <Text>Password</Text>
            <TextInput style={{ borderColor: 'black', borderWidth: 2 }} onChangeText={(password) => {
                setPassword(password)
            }} />
            <TouchableOpacity onPress={handleSubmit} >
                <Text>Aceptar</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                {remember && <TouchableOpacity onPress={() => setRemember(!remember)} style={{ width: 30, height: 30, backgroundColor: 'blue' }}>
                </TouchableOpacity>}
                {!remember && <TouchableOpacity onPress={() => setRemember(!remember)} style={{ width: 30, height: 30, backgroundColor: 'white', borderWidth: 1 }}>
                </TouchableOpacity>}
                <Text>REMEMBER ME</Text>
            </View>
        </View>
    )
}