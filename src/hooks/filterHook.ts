import {useMemo} from "react";
import {TableItem} from "../shared/interfaces/table.interface.ts";

export const useFilter = (array: TableItem[], profileId: string | undefined, key: string) => {
    return useMemo(() => {
        if (profileId) {
            return array.filter((item: any) =>  item[key] === profileId );
        }
        return [];
    }, [profileId, array, key]);
}