import { TPropsWalkRecordItem } from '../../types';

export function WalkRecordItem({item, onDelete}: TPropsWalkRecordItem) {
    return (
        <li className="WalkRecord__item">
            <div>{item.date}</div>
            <div>{item.distance.toFixed(2)}</div>
            <div>
                <i className="material-icons" onClick={onDelete(item.id)}>delete</i>
            </div>
        </li>
    );
}