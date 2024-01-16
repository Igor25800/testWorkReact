import {dataProfile} from "../../shared/services/data.ts";
import CustomTable from "../../components/CustomTable/CustomTable.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useFilter} from "../../hooks/filterHook.ts";
import {TableItem} from "../../shared/interfaces/table.interface.ts";
import {ProfileInterface} from "../../shared/interfaces/profile.interface.ts";
const Profiles = () => {
    const {profileId} =  useParams();
    const navigate = useNavigate();
    const arrayProfile = useFilter(dataProfile, profileId, 'accountId');
    const navigateProfile = (item: TableItem): void => {
        const {profileId} = item as ProfileInterface;
        navigate('/campaign/' + profileId);
    }

    return (
        <div>
            <CustomTable
                header={["profileId", "country", "marketplace"]}
                tbody={arrayProfile}
                eventNavigate={navigateProfile}
            />
        </div>
    );
};

export default Profiles;