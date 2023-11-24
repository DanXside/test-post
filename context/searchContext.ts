import { createContext } from "react";

interface ISearchContext {
    search: string;
    setSearch: any;
}

export const SearchContext = createContext<ISearchContext>({} as ISearchContext);
