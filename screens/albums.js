import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert,Image, ScrollView } from 'react-native'

export default function albums(props) {
    const {navigation,route} = props
    const {params} = route;
    const {user} = params;
    const [albums,setAlbums] = useState(null)
    const [photos,setPhotos] = useState(null)

    const fetchApi = async() => {
        const res = await (await (fetch('https://jsonplaceholder.typicode.com/albums'))).json()
        const res2 = await (await (fetch('https://jsonplaceholder.typicode.com/photos'))).json()
       // console.log(res2)
        setAlbums(res)
        console.log(res2)
        setPhotos(res2)
    }
    useEffect(() => {
        fetchApi()
    },[])
    return (
        <ScrollView>
            
           {albums && albums.filter((album) => album.userId === user.id).map((album) =>(
               <View>
                   <Text>{album.title}</Text>
                   <Text>{album.id}</Text>
                   {photos && photos.filter((photo) => photo.albumId === albums.id).map((photo) => (
                       <View>
                          <Image source={{uri: photo.url}}/>
                       </View>
                   )) } 
               </View>
           ))}
        </ScrollView>
    )
}