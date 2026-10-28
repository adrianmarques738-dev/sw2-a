import firebase from './firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import db from './conn'

class AuthService{
    constructor(){
        this.auth = getAuth(firebase)
    }

    async createUser(email, password){
        try{
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
            return userCredential.user
            
        }catch(error){
            console.error("Error: ", error)
            throw error
        }
    }
}
