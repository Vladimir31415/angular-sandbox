export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface User {
    name: string;
    id: number;
}