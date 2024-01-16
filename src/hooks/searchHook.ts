import {useMemo} from "react";
import {TableItem} from "../shared/interfaces/table.interface.ts";

export const useSearch = (array: TableItem[], filterValue: string) => {
    return useMemo(() => {
        return array.filter((item: TableItem) => {
            const values = Object.values(item).join(" ").toLowerCase();
            return values.includes(filterValue.toLowerCase());
        })
    }, [array, filterValue])
}