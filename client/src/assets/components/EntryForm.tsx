import React, { useState } from 'react';

function TitleHeader() {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between">
        <h1 id="formH1">New Entry</h1>
      </div>
    </div>
  );
}

type Row1Props = {
  onImageURLChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageURL: string;
};
function Row1({ imageURL, onImageURLChange }: Row1Props) {
  return (
    <div className="row margin-bottom-1">
      <div className="column-half">
        <img
          className="input-b-radius form-image"
          id="formImage"
          src={imageURL || 'src/assets/images/placeholder-image-square.jpg'}
          alt="image of entry image"
        />
      </div>
      <div className="column-half">
        <label className="margin-bottom-1 d-block" htmlFor="title">
          Title
        </label>
        <input
          required
          className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
          type="text"
          id="formTitle"
          name="formTitle"
        />
        <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
          Photo URL
        </label>
        <input
          onChange={onImageURLChange}
          required
          className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
          type="text"
          id="formURL"
          name="formURL"
        />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="row margin-bottom-1">
      <div className="column-full">
        <label className="margin-bottom-1 d-block" htmlFor="formNotes">
          Notes
        </label>
        <textarea
          required
          className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
          name="formNotes"
          id="formNotes"
          cols="30"
          rows="10"></textarea>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="row">
      <div className="column-full d-flex justify-between">
        <button
          className="invisible delete-entry-button"
          type="button"
          id="deleteEntry">
          Delete Entry
        </button>
        <button className="input-b-radius text-padding purple-background white-text">
          SAVE
        </button>
      </div>
    </div>
  );
}

type EntryForm = {
  hidden: boolean;
};
export default function EntryForm({ hidden }: EntryForm) {
  const [imageURL, setImageURL] = useState('');

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImageURL(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const formData = new FormData(target);
    const { formTitle, formURL, formNotes } = Object.fromEntries(
      formData.entries()
    );
    console.log(formTitle, formURL, formNotes);
  }
  return (
    <div
      className={`container${!hidden ? ' hidden' : ''}`}
      data-view="entry-form">
      <TitleHeader />
      <form id="entryForm" onSubmit={handleSubmit}>
        <Row1 onImageURLChange={handleImageChange} imageURL={imageURL} />
        <Row2 />

        <Row3 />
      </form>
    </div>
  );
}
