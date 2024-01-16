import {LoaderFunction, LoaderFunctionArgs, redirect} from "react-router-dom";
import {dataProfile} from "../services/data.ts";
import {ProfileInterface} from "../interfaces/profile.interface.ts";

export interface RouteParams {
    campaignId: string;
}

export const loaderCampaign: LoaderFunction<LoaderFunctionArgs<RouteParams>> = async ({ params }) => {
    const array = dataProfile.map((profile: ProfileInterface) => profile.profileId);
    if (!array.includes(params.campaignId as string)) {
        return redirect('error');
    }
    return [];
};