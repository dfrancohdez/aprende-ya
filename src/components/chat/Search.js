import React, { useState } from 'react'
import profile from '../../assets/img/chat/img/profile.jpg'
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../../components/auth/firebase";
const Search = () => {
    const [userName, setUserName] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)
    /*const handleSearch = async () => {
        const currentUser=auth.currentUser
        const idProfesor=""
        try{
        const q =query(collection(db,"Users",currentUser,"chats"),where("name","===",userName))
        const querySnapshot=await getDocs(q)
        querySnapshot.forEach((doc)=>{
            idProfesor=doc.id
        })
        const docProfesor=await getDoc(db,"User",idProfesor)
            setUser(docProfesor.data())
        }catch(err){
            setErr(true)
        }*/
        /*const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    }
    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }
    ///////////////////////////////////////
    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) { }

        setUser(null);
        setUsername("")
    };*/
    //////////////////////////////////////////
    return (
        <div className="chat-search">
            <form className='chat-searchForm'>
                {/* <input type='text' placeholder='find a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} /> */}
            </form>
            {/* </div>{user && <div className='chat-userChat' onClick={handleSelect}> */}
            <div className='chat-userChat'>
                <img src={profile}></img>
                <div className='chat-userChatInfo'>
                    {/* <span>{user.firstName}</span> */}
                    <span>Jane</span>
                </div>
            </div>
            
        </div>
    )
}
export default Search