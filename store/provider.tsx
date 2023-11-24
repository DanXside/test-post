'use client'

import React from "react"
import { setupStore } from "./store"
import { Provider } from "react-redux"

export function Providers({children}: {children: React.ReactNode}) {
    const store = setupStore();

    return <Provider store={store}>{children}</Provider>
}