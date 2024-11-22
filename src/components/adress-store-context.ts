import {createContext, useContext} from 'react'
import {AddrStoreItem} from "../store/addr-store.ts";

export type AddressContextValue = {
    item: AddrStoreItem | null
}

export const AddressContext =
    createContext<AddressContextValue>({
        item: null,
    })

export function useAddressContext() {
    return useContext(AddressContext)
}