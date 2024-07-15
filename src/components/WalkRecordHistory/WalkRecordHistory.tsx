import { WalkRecordItem } from "../WalkRecordItem";
import { TPropsWalkRecordHistory } from '../../types';

export function WalkRecordHistory({walks, onDelete}: TPropsWalkRecordHistory) {

    walks.sort((a, b) => (b.date > a.date ? 1 : -1));

    return (
        <div className="WalkRecord__history">
            <header className="WalkRecord__header">
                <div>Дата (ДД.ММ.ГГГГ)</div>
                <div>Пройдено км</div>
                <div>Действия</div>
            </header>
            <ul className="WalkRecord__table">
                {walks.map((item =>
                        <WalkRecordItem key={item.id} item={item} onDelete={onDelete}/>
                ))}
            </ul>
        </div>
    );
}