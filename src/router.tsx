import App from "./App.tsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import Profiles from "./pages/profiles/profiles.tsx";
import Campaigns from "./pages/campaigns/campaigns.tsx";
import Accounts from "./pages/accounts/accounts.tsx";
import {loaderProfile} from "./shared/guard/guardProfile.tsx";
import ErrorPage from "./pages/error/errorPage.tsx";
import {loaderCampaign} from "./shared/guard/guardCampaign.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'account',
                element: <Accounts/>,
            },
            {
                path: 'profile/:profileId',
                element: <Profiles/>,
                loader: loaderProfile
            },
            {
                path: 'campaign/:campaignId',
                element: <Campaigns/>,
                loader: loaderCampaign
            },
            {
                element: <Navigate to='account' replace/>,
                index: true,
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])