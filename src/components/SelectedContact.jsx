import { useState } from 'react'
import {useEffect} from 'react'
import ContactRow from "./ContactRow";
import ContactList from './ContactList';


export default function SelectedContact({selectedContactId, setSelectedContactId}){
   const[contact, setContact ] = useState("");
useEffect (() => {
    async function getContact (){
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact(result);
        } catch (error) {
            console.error(error);

        }
        }
        getContact();
        console.log(contact);
    },[]);

   
    return (
        <>
        <div>
        <h1>{contact.name}</h1>
        <button title = "Go Back" color = "#00b200" onClick={() => {
            setSelectedContactId("");
          }}/>
          </div>
        </>
        )
}