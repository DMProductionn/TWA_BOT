export type Typenotification = {
  accept: boolean 
  canceled: boolean 
  conditions_are_met: boolean 
  create: boolean
}

export interface IProfileInfo {
  balance: string
  chat_id: number
  first_name: string
  frozen_balance: string 
  id: string
  is_premium: null | true
  last_name: null | string
  notifications: Typenotification
  rating: number 
  register_date: string 
  username: string
}