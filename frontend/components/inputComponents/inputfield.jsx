

export default function Inputfield({name, value, onChange}) {
    return(
        <>
            <div className="input-field">
                <p>{name}: </p>
                <input type="text" value={value} onChange={onChange}/>
            </div>
        </>
    );
}