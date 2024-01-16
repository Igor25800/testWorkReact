import CustomTable from "../../components/CustomTable/CustomTable.tsx";
import {useFilter} from "../../hooks/filterHook.ts";
import {dataCampaign} from "../../shared/services/data.ts";
import {useParams} from "react-router-dom";
const Campaigns = () => {
    const {campaignId} =  useParams();
    const arrayCampaigns = useFilter(dataCampaign, campaignId, 'profileId');
    return (
        <div>
            <CustomTable
                header={["campaignId", "clicks", "cost", "date"]}
                tbody={arrayCampaigns}
            />
        </div>
    );
};

export default Campaigns;