export interface DetailProps {
    desc: string;
    endAt: string;
    name: string;
    position: string;
    stack: string;
    startAt: string;
    url: string;
    data: [{ caption: string; images: string }];
}
export interface ListProps<T> {
    rows: T[];
}
export type WorkListProps = ListProps<WorkItem>;
export interface WorkItem {
    id: number;
    imgName: string;
    name: string;
    stack: number[];
    stackName?: string[];
}
export type StackListProps = ListProps<StackList>;
export interface StackList {
    name: string;
    type: number;
}
