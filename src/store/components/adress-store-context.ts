import {createContext, useContext} from 'react'
import {AddressItemStore} from "../address-store-item.ts";

export type AddressContextValue = {
    item: AddressItemStore | null
}

export const AddressContext =
    createContext<AddressContextValue>({
        item: null,
    })

export function useAddressContext() {
    return useContext(AddressContext)
}