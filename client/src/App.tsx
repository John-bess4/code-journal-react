import { useState } from 'react';

// import { UnsavedEntry, Entry } from './data.tsx'

import './assets/css/layout.css';
import './assets/css/reset.css';
import './assets/css/styles.css';

import NavBar from './assets/components/NavBar';
import EntryForm from './assets/components/EntryForm';
import Entries from './assets/components/Entries';
import ModalMenu from './assets/components/ModalMenu';

function App() {
  const [view, setView] = useState('entry-form'); //"entries" | "entry-form"

  function handleEntriesClick() {
    setView('entries');
  }

  function handleNewEntryClick() {
    setView('entry-form');
  }

  return (
    <>
      <NavBar onEntriesClick={handleEntriesClick} />
      <main>
        <EntryForm hidden={view === 'entry-form'} />
        <Entries
          onNewEntryClick={handleNewEntryClick}
          hidden={view === 'entries'}
        />
      </main>
      <article>
        <ModalMenu />
      </article>
    </>
  );
}

export default App;
