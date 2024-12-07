import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAnimationState {
  active: boolean,
  activeRight: boolean,
  activeLeftProfile: boolean,
  activeRightProfile: boolean,
  activeBalances: boolean
}

const initialState: IAnimationState = {
  active: false,
  activeRight: false,
  activeLeftProfile: false,
  activeRightProfile: false,
  activeBalances: false
}

export const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload
    },
    setActiveRight: (state, action: PayloadAction<boolean>) => {
      state.activeRight = action.payload
    },
    setActiveRightProfile: (state, action: PayloadAction<boolean>) => {
      state.activeRightProfile = action.payload
    },
    setActiveLeftProfile: (state, action: PayloadAction<boolean>) => {
      state.activeLeftProfile = action.payload
    }, 
    setActiveBalances: (state, action: PayloadAction<boolean>) => {
      state.activeBalances = action.payload
    }
  },
})


export const { setActive, setActiveRight, setActiveRightProfile, setActiveLeftProfile, setActiveBalances } = animationSlice.actions

export default animationSlice.reducer


