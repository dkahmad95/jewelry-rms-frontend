export interface CreateExpenses {
    name: string;
    description: string;
    value: number;

}
export interface Expenses {
    id: number;
    name: string;
    description: string;
    value: number;

}

export interface UpdatedExpenses {
    name?: string;
    description?: string;
    value?: number;

}