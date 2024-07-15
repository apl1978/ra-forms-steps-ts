
export function WalkRecordForm({ form, onSubmit, onChange }) {
    return (
        <form className="WalkRecordForm" onSubmit={onSubmit}>
            <label>Дата (ДД.ММ.ГГГГ)
                <input className="WalkRecordForm__date" name="date" value={form.date} onChange={onChange} />
            </label>
            <label>Пройдено км
                <input className="WalkRecordForm__dist" name="distance" value={form.distance} onChange={onChange} />
            </label>
            <button className="WalkRecordForm__button">OK</button>
        </form>
    );
}