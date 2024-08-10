import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAnimationState {
  active: boolean
}

const initialState: IAnimationState = {
  active: false
}

export const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload
    }
  },
})


export const { setActive } = animationSlice.actions

export default animationSlice.reducer


