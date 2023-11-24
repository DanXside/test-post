'use client'

import classes from './search.module.scss';
import { ChangeEvent, useContext, useEffect } from 'react';
import { SearchContext } from '@/context/searchContext';

export default function Search() {
    const {search, setSearch} = useContext(SearchContext);

    const handleChange = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setSearch(input.value);
    };

    useEffect(() => {
        window.localStorage.setItem('search', search);
    },[search]);

    useEffect(() => {
        setSearch(window.localStorage.getItem('search'));
    },[setSearch]);

    return (
        <div className={classes.searchWrap}>
            <h2>Поиск по постам:</h2>
            <input 
                value={search}
                onChange={handleChange} 
                type="text" 
            />
        </div>
    )
}