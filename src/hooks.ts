import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import type { RootState, store } from './store/store'

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
