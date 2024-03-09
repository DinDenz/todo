import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//кастомные хуки  - типизированные useSelector/useDispatch для того,
//чтобы не типизировать их каждый раз, когда их используем
//теперь используем кастомные хуки 