export type TItem = {
    id: string | number,
    date: string,
    distance: number,
}

export type TPropsWalkRecordHistory = {
    walks: TItem[],
    onDelete: void
};

export type TPropsWalkRecordItem = {
    item: TItem,
    onDelete(id: string | number)
};

