export interface CreateSupplier {
    name: string;
    phoneNumber: string;
    cashBalance: number;
    ramliBalance: number;
    silverBalance: number;
}
export interface Supplier {
    id: number;
    name: string;
    phoneNumber: string;
    createdDate: string;
    cashBalance: number;
    ramliBalance: number;
    silverBalance: number;
}

export interface UpdatedSupplier {
    name?: string;
    phoneNumber?: string;
    createdDate?: string;
    cashBalance?: number;
    ramliBalance?: number;
    silverBalance?: number;
}