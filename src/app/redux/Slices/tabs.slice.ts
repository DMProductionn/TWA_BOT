import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  valueTabsHistory: string,
  valueTabsProfile: string,
  tabsProfileCount: {
    countActive: number,
    countPending: number,
  }
}

const initialState: CounterState = {
  valueTabsHistory: '',
  valueTabsProfile: '',
  tabsProfileCount : {
    countActive: 0,
    countPending: 0,
  }
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
    setTabsCountProfileActive: (state, action: PayloadAction<number>) => {
      state.tabsProfileCount.countActive = action.payload
    },
    setTabsCountProfilePending: (state, action: PayloadAction<number>) => {
      state.tabsProfileCount.countPending = action.payload
    }
  },
})


export const { setValueTabsHistory, setValueTabsProfile, setTabsCountProfileActive, setTabsCountProfilePending } = tabsSlice.actions

export default tabsSlice.reducer


