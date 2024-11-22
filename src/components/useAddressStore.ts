import {useMemo} from "react";
import {AddrStoreItem} from "../store/addr-store.ts";
import {AddressContextValue} from "./adress-store-context.ts";
import {autorun} from "mobx";

export const useAddressStore = (name: string) => {
    return useMemo<AddressContextValue>(() => {
        const store = new AddrStoreItem(name)
        console.log('---- create new store ----')
        console.log('for name', name)

        autorun(() => {
            console.log("Store", store.id)
            console.log("Name:", store.id, store.name)
        })

        return {item: store}
    }, [])
}