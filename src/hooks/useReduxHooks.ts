import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'


// Esta línea exporta un hook personalizado llamado useAppDispatch.
// Este hook es simplemente un alias tipado para el hook useDispatch de react-redux.
// Devuelve una función despachadora de acciones con el tipo AppDispatch.
export const useAppDispatch: () => AppDispatch = useDispatch

// Esta línea exporta un hook personalizado llamado useAppSelector.
// Este hook es un alias tipado para el hook useSelector de react-redux.
// Es una instancia de TypedUseSelectorHook, donde el tipo genérico se establece en RootState.
// Esto garantiza que el selector pasado a useAppSelector tenga la firma correcta y devuelva una parte del estado raíz de la tienda.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//Se utiliza como remplazo de los hooks useDispatch y useSelector de react-redux.