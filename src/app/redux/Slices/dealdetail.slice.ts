import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDeal } from '../../types/Deals/deal.type'


export interface IDealDetailState {
  dealDetail: null | IDeal
}

const initialState: IDealDetailState = {
  dealDetail: null
}

export const dealDetailSlice = createSlice({
  name: 'dealDetail',
  initialState,
  reducers: {
    setDealDetail: (state, action: PayloadAction<null | IDeal>) => {
      state.dealDetail = action.payload
    }
  },
})


export const { setDealDetail } = dealDetailSlice.actions

export default dealDetailSlice.reducer


