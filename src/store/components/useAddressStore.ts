import {useMemo} from "react";
import {AddressItemStore} from "../address-store-item.ts";
import {AddressContextValue} from "./adress-store-context.ts";
import {autorun} from "mobx";

export const useAddressStore = (name: string) => {
    return useMemo<AddressContextValue>(() => {
        const store = new AddressItemStore(name)
        console.log('---- create new store ----')
        console.log('for name', name)

        autorun(() => {
            console.group("Store", store.id)
            console.log("Name:", store.name)
            console.log("Country:", store.country)
            console.log("City:", store.city)
            console.log("Street address:", store.streetAddress)
            console.groupEnd()
        })

        return {item: store}
    }, [])
}