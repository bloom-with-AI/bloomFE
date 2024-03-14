import { create } from 'zustand'

interface VenueMapListType {
  result: any[]
  isKeywordExists: boolean | null
}

interface VenueMapListState {
  venueMapList: VenueMapListType
}

interface VenueMapListActions {
  setVenueMapList: (venueMapList: VenueMapListType) => void
}

const defaultState: VenueMapListType = {
  result: [],
  isKeywordExists: null,
}

const useVenueMapList = create<VenueMapListState & VenueMapListActions>(
  (set) => ({
    venueMapList: defaultState,
    setVenueMapList: (venueMapList: VenueMapListType) => {
      set({ venueMapList })
    },
  }),
)

export default useVenueMapList
