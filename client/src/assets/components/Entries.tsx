type EntriesProps = {
  hidden: boolean;
  onNewEntryClick: () => void;
};

export default function Entries({ hidden, onNewEntryClick }: EntriesProps) {
  return (
    <div className={`container${!hidden ? ' hidden' : ''}`} data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a
              onClick={onNewEntryClick}
              id="formLink"
              className="white-text form-link"
              href="#">
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl"></ul>
        </div>
      </div>
    </div>
  );
}
