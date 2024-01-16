import CustomTable from "../../components/CustomTable/CustomTable.tsx";
import {dataAccount} from "../../shared/services/data.ts";
import {TableItem} from "../../shared/interfaces/table.interface.ts";
import {AccountInterface} from "../../shared/interfaces/account.interface.ts";
import {useNavigate} from "react-router-dom";
const Accounts = () => {
    const navigate = useNavigate();
    const navigateAccount = (item: TableItem): void => {
        const {accountId} = item as AccountInterface;
        navigate('/profile/' + accountId);
    }

    return (
        <div>
            <CustomTable
                header={["accountId", "email", "authToken", "creationDate"]}
                tbody={dataAccount}
                eventNavigate={navigateAccount}
            />
        </div>
    );
};

export default Accounts;