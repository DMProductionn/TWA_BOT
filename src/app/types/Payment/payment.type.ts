export interface IPayment {
    id: string,
    user_id: string,
    amount: string,
    last4: number,
    created_at: string,
    action: string,
    status: string
}