import { create } from 'zustand'

interface SelectedVenueCategoryType {
  [key: string]: string[]
}

interface SelectedVenueCategoryState {
  selectedVenueCategory: SelectedVenueCategoryType
}

interface SelectedVenueCategoryActions {
  setSelectedVenueCategory: (
    selectedVenueCategory: SelectedVenueCategoryType,
  ) => void
}

const defaultState: SelectedVenueCategoryType = {
  mood: [],
  meal: [],
  parking: [],
  hallType: [],
  bridType: [],
  minGuarantee: [],
}

const useSelectedVenueCategory = create<
  SelectedVenueCategoryState & SelectedVenueCategoryActions
>((set) => ({
  selectedVenueCategory: defaultState,
  setSelectedVenueCategory: (
    selectedVenueCategory: SelectedVenueCategoryType,
  ) => {
    set({ selectedVenueCategory })
  },
}))

export default useSelectedVenueCategory
