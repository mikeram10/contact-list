import { useState } from 'react'
import ContactList from './components/ContactList';
import './App.css';
import SelectedContact from "./components/SelectedContact";
import './index.css';

 export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}


// export default App