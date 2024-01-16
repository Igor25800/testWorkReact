import {AccountInterface} from "../interfaces/account.interface.ts";
import {ProfileInterface} from "../interfaces/profile.interface.ts";
import {CampaignInterface} from "../interfaces/campaign.interface.ts";

export const dataAccount: Array<AccountInterface> = [
    {
      accountId: 'isa212',
      email: 'igor@gmail.com',
      authToken: 'isdad22311wsada',
      creationDate: '21-08-1992'
    },
    {
        accountId: 'isa213',
        email: 'dasha@gmail.com',
        authToken: 'isdad22312221wsada',
        creationDate: '15-12-1997'
    },
    {
        accountId: 'issa213',
        email: 'mishaa@gmail.com',
        authToken: 'isdad223122sa1wsada',
        creationDate: '20-12-1997'
    },
    {
        accountId: 'issa214',
        email: 'gera@gmail.com',
        authToken: 'ismam223122sa1wsada',
        creationDate: '21-12-1998'
    },
    {
        accountId: 'isa212',
        email: 'igor@gmail.com',
        authToken: 'isdad22311wsada',
        creationDate: '21-08-1992'
    },
    {
        accountId: 'isa213',
        email: 'dasha@gmail.com',
        authToken: 'isdad22312221wsada',
        creationDate: '15-12-1997'
    },
    {
        accountId: 'issa213',
        email: 'mishaa@gmail.com',
        authToken: 'isdad223122sa1wsada',
        creationDate: '20-12-1997'
    },
    {
        accountId: 'issa214',
        email: 'gera@gmail.com',
        authToken: 'ismam223122sa1wsada',
        creationDate: '21-12-1998'
    },

];
export const dataProfile: Array<ProfileInterface> = [
    {
        profileId: 'isa211',
        accountId: 'issa214',
        country: 'Barbados',
        marketplace: 'Amazon'
    },
    {
        profileId: 'isa212',
        accountId: 'issa214',
        country: 'Afghanistan',
        marketplace: 'Fiverr'
    },
    {
        profileId: 'isa213',
        accountId: 'issa214',
        country: 'Nauru',
        marketplace: 'Zillow'
    },
    {
        profileId: 'isa211',
        accountId: 'isa213',
        country: 'Barbados',
        marketplace: 'Amazon'
    },
    {
        profileId: 'isa212',
        accountId: 'isa213',
        country: 'Afghanistan',
        marketplace: 'Fiverr'
    },
    {
        profileId: 'isa213',
        accountId: 'isa213',
        country: 'Nauru',
        marketplace: 'Zillow'
    },
    {
        profileId: 'isa211',
        accountId: 'isa212',
        country: 'Barbados',
        marketplace: 'Amazon'
    },
    {
        profileId: 'isa212',
        accountId: 'isa212',
        country: 'Afghanistan',
        marketplace: 'Fiverr'
    },
    {
        profileId: 'isa213',
        accountId: 'isa212',
        country: 'Nauru',
        marketplace: 'Zillow'
    },
    {
        profileId: 'isa211',
        accountId: 'issa213',
        country: 'Barbados',
        marketplace: 'Amazon'
    },
];
export const dataCampaign: Array<CampaignInterface> = [
    {
        campaignId: '23',
        profileId: 'isa211',
        clicks: '1',
        cost: '120$',
        date: '22-10-2010'
    },
    {
        campaignId: '24',
        profileId: 'isa211',
        clicks: '3',
        cost: '120$',
        date: '22-10-2010'
    },
    {
        campaignId: '24',
        profileId: 'isa212',
        clicks: '3',
        cost: '120$',
        date: '22-10-2010'
    },
    {
        campaignId: '25',
        profileId: 'isa212',
        clicks: '10',
        cost: '500$',
        date: '22-11-2010'
    }
];