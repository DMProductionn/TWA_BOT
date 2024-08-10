import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  valueTabsHistory: string,
  valueTabsProfile: string
}

const initialState: CounterState = {
  valueTabsHistory: '',
  valueTabsProfile: ''
}

export const tabsSlice = createSlice({
  name: 'tabsHistory',
  initialState,
  reducers: {
    setValueTabsHistory: (state, action: PayloadAction<string>) => {
      state.valueTabsHistory = action.payload
    },
    setValueTabsProfile: (state, action: PayloadAction<string>) => {
      state.valueTabsProfile = action.payload
    },
  },
})


export const { setValueTabsHistory, setValueTabsProfile } = tabsSlice.actions

export default tabsSlice.reducer


