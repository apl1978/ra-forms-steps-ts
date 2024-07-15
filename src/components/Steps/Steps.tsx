import { useState } from "react";
import { nanoid } from 'nanoid';

import { TItem } from '../../types';

import { WalkRecordForm } from '../WalkRecordForm';
import { WalkRecordHistory } from '../WalkRecordHistory';

const defaultWalks: TItem[] = [
    {
        id: 3,
        date: '2024-07-13',
        distance: 3.4,
    },
    {
        id: 1,
        date: '2024-07-15',
        distance: 5.7,
    },
    {
        id: 2,
        date: '2024-07-14',
        distance: 14.2,
    },
];

export function Steps() {

    const sortByDate = (a: TItem, b: TItem) => (b.date > a.date ? 1 : -1);
    const [walks, setWalks] = useState(defaultWalks.sort(sortByDate));
    const [form, setForm] = useState({date: '', distance: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setForm(prevForm => ({...prevForm, [target.name]: target.value}));
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const walkIndex = walks.findIndex((item: TItem) => item.date === form.date);
        if (walkIndex !== -1) {
            walks[walkIndex].distance += Number(form.distance);
        } else {
            setWalks(prev => [...prev, {id: nanoid(), date: form.date, distance: Number(form.distance)}]);
        }

        setForm({date: '', distance: ''});
    };

    const handleDelete = (id: string | number) => {
        return () => {
            setWalks(walks.filter((i: TItem) => i.id !== id));
        }
    }

    return (
        <div className="WalkRecord">
            <WalkRecordForm form={form} onSubmit={handleSubmit} onChange={handleChange}/>
            <WalkRecordHistory walks={walks} onDelete={handleDelete}/>
        </div>
    );

}

