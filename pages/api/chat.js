import {collection, addDoc ,getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebase/init-firebase'

const handler = async (req, res) => {
    if (req.method === 'POST'){
        
        const data = req.body
        const chatDbRef = collection(db, "chatDb")

        try{
            data.forEach((doc)=>{
              addDoc(chatDbRef, doc)
            })
            return res.status(200).json({success :true})
        } catch (error){
            console.log(error)
            return res.status(400).json({message: error.message})
        }
    }


}

export default handler