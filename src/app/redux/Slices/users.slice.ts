import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TypeUser} from '../../types/Deals/user.type'

export interface usersState {
  users: TypeUser[] | null
}

const initialState: usersState = {
  users: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TypeUser[] | null>) => {
      state.users = action.payload
    }
  },
})


export const { setUsers } = usersSlice.actions

export default usersSlice.reducer


