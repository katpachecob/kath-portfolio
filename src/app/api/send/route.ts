

import { addDoc, collection, getFirestore } from "firebase/firestore"
import firebase_app from "../../utils/firebase"

const db = getFirestore(firebase_app)
export const handleForm = async (values:any) => {
    try {
        let res = await addDoc(collection(db, 'contact'), {
            values
        })

    } catch (err:any) {
        throw new Error(err)
    }
}