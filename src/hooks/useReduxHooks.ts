import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'


// This line exports a custom hook called useAppDispatch.
// This hook is simply a typed alias for the react-redux hook useDispatch.
// Returns an action dispatcher function with type AppDispatch.
export const useAppDispatch: () => AppDispatch = useDispatch

// This line exports a custom hook named useAppSelector.
// This hook is a typed alias for the react-redux hook useSelector.
// It is an instance of TypedUseSelectorHook, where the generic type is set to RootState.
// This ensures that the selector passed to useAppSelector has the correct signature and returns a part of the store's root state.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Used as a replacement for the react-redux hooks useDispatch and useSelector.