import { useState } from 'react';
import NavBar from './components/NavBar';
import './assets/css/layout.css';
import './assets/css/reset.css';
import './assets/css/styles.css';
import EntryForm from './components/EntryForm';
import Entries from './components/Entries';
import placeHolderImage from './assets/images/placeholder-image-square.jpg'

function App() {
  const [view, setView] = useState('entry-form'); //"entries" | "entry-form"
  const [image, setImage] = useState(placeHolderImage);
  return (
    <>
      <NavBar />
      <main>
        <EntryForm />
        <Entries />
      </main>
    </>
  );
}

export default App;
