
export default function Filter({value, onChange, onAcsendingclick, onDescendingclick}) {
    return(
        <>
            <div className="filter-field">
                <input type="text" value={value} onChange={onChange} placeholder="Search by Title" />
                <button onClick={onAcsendingclick}>Ascending Sort</button>
                <button onClick={onDescendingclick}>Descending sort</button>
            </div>
        </>
    );
}