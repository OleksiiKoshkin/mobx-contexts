import React from "react";
import {observer} from "mobx-react-lite";
import {useAddressContext} from "../../adress-store-context.ts";

export const AddressTitle: React.FC = observer(() => {
    const store = useAddressContext()

    return <table>
        <tbody>
        <tr>
            <td>
                Store Name: <b>{store.item?.name}</b>
            </td>
            <td>
                ID: {store.item?.id}
            </td>
        </tr>
        </tbody>
    </table>
})