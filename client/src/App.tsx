import { useState } from 'react';

import './assets/css/layout.css';
import './assets/css/reset.css';
import './assets/css/styles.css';

import NavBar from './assets/components/NavBar';
import EntryForm from './assets/components/EntryForm';
import Entries from './assets/components/Entries';
import ModalMenu from './assets/components/ModalMenu';

import placeHolderImage from './assets/images/placeholder-image-square.jpg';

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
      <article>
        <ModalMenu />
      </article>
    </>
  );
}

export default App;
