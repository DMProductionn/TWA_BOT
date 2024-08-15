import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProfileInfo } from '../../types/Profile/profileInfo.type'

export interface ProfileInfoState {
  profileInfo: IProfileInfo | null
}

const initialState: ProfileInfoState = {
  profileInfo: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<IProfileInfo | null>) => {
      state.profileInfo = action.payload
    }
  },
})


export const { setProfileInfo } = profileSlice.actions

export default profileSlice.reducer


