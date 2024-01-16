import {LoaderFunction, LoaderFunctionArgs, redirect} from "react-router-dom";
import {dataAccount} from "../services/data.ts";
import {AccountInterface} from "../interfaces/account.interface.ts";

export interface RouteParams {
    accountId: string;
}

export const loaderProfile: LoaderFunction<LoaderFunctionArgs<RouteParams>> = async ({ params }) => {
    const array = dataAccount.map((account: AccountInterface) => account.accountId);
    if (!array.includes(params.profileId as string)) {
        return redirect('error');
    }
    return []
};