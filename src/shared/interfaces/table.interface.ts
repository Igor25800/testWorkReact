import {AccountInterface} from "./account.interface.ts";
import {ProfileInterface} from "./profile.interface.ts";
import {CampaignInterface} from "./campaign.interface.ts";

export interface TableProps {
    header: Array<string>;
    tbody: Array<TableItem>;
    eventNavigate?: (id: TableItem) => void;
}

export type TableItem  = AccountInterface | ProfileInterface | CampaignInterface;