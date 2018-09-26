export interface Multa {
    id: number;
    dateEmit: Date;
    dateExpiration?: Date;
    description: string;
    paid: boolean;
    location?: string;
    latitude?: number;
    longitude?: number;
    amount: number;

}