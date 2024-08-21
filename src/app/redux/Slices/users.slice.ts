import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TypeUser} from '../../types/Deals/user.type'

export interface usersState {
  users: TypeUser[] | null,
  usersFirstName: string,
  usersId: string
}

const initialState: usersState = {
  users: null,
  usersFirstName: '',
  usersId: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TypeUser[] | null>) => {
      state.users = action.payload
    },
    setUsersFirstName: (state, action: PayloadAction<string>) => {
      state.usersFirstName = action.payload
    },
    setUsersId: (state, action: PayloadAction<string>) => {
      state.usersId = action.payload
    }
  },
})


export const { setUsers, setUsersFirstName, setUsersId } = usersSlice.actions

export default usersSlice.reducer


