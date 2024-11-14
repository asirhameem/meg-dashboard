import { create } from 'zustand'
import { TAuthActions, TAuthState } from '../interfaces'
import { AUTH_DEFAULT_STATE } from '../constants'
import { encryptData } from '../helpers'

const useAppStore = create<TAuthState & TAuthActions>((set) => ({
  ...AUTH_DEFAULT_STATE,
  setAuth: (auth) => {
    set(auth)
    localStorage.setItem('meg-auth', encryptData(auth))
  },
  removeAuth: () => {
    set({ ...AUTH_DEFAULT_STATE })
    localStorage.removeItem('meg-auth')
  },
}))

export default useAppStore