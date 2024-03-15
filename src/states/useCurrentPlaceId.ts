import { create } from 'zustand'

interface setCurrentPlaceIdActions {
  setCurrentPlaceId: (currentPlaceId: number) => void
}

const useCurrentPlaceId = create<
  { currentPlaceId: number } & setCurrentPlaceIdActions
>((set) => ({
  currentPlaceId: 1,
  setCurrentPlaceId: (currentPlaceId: number) => {
    set({ currentPlaceId })
  },
}))

export default useCurrentPlaceId
