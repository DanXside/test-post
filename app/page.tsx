'use client'

import Posts from '@/components/Posts/Posts';
import Search from '@/components/UI/search/search';
import { SearchContext } from '@/context/searchContext';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState<string>('');

  return (
      <div>
        <SearchContext.Provider value={{search, setSearch}}>
          <Search />
          <Posts />
        </SearchContext.Provider>
      </div>
  )
}
