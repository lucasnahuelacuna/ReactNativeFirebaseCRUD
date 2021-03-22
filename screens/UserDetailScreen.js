import React, { useState, useEffect } from 'react'
import {View, Button, ScrollView, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })

    const [loading, setLoading] = useState(true)

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({ ...user, id: doc.id })
        setLoading(false)
    }

    useEffect(() => {
        getUserById(props.route.params.userId)
    }, [])

    const handleChangeText = (field, value) => {
        setUser({ ...user, [field]: value })
    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(user.id)
        await dbRef.delete()
        props.navigation.navigate('UsersList')
    }

    const updateUser = async () => {
        const dbRef = firebase.db.collection('users').doc(user.id)
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser({id: '', name: '', email: '', phone: ''})
        props.navigation.navigate('UsersList')
    }
    
    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User" value={user.name} onChangeText={value => handleChangeText("name", value)} />
            </View>
            <View style={styles.inputGroup}> 
                <TextInput placeholder="Email User" value={user.email} onChangeText={value => handleChangeText("email", value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone User" value={user.phone} onChangeText={value => handleChangeText("phone", value)} />
            </View>
            <View>
                <Button color="#95DA5E" title="Update User" onPress={updateUser} />
                <Button color="#DE615F" title="Delete User" onPress={deleteUser} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    }
})

export default UserDetailScreen