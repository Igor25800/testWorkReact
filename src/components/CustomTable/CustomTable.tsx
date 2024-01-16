import {FC, useState} from "react";
import {Table} from "react-bootstrap";
import {TableItem, TableProps} from "../../shared/interfaces/table.interface.ts";
import PaginationTable from "../PaginationTable/PaginationTable.tsx";
import style from './CustomTable.module.scss';
import useSortableTable from "../../hooks/sortHook.ts";

const CustomTable: FC<TableProps> = ({header, tbody, eventNavigate}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {sortConfig, handleSort, sortedItems} = useSortableTable();
    const totalPages = Math.ceil(tbody.length / 3);
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    const currentItems = tbody.slice(startIndex, endIndex);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    if (!tbody.length) {
        return <div>Пусто</div>;
    }

    const sortedData = sortedItems(currentItems);

    return (
        <div>
            <Table bordered hover>
                <thead>
                <tr>
                    {header.map((item: string) => (
                        <th key={item} onClick={() => handleSort(item)}>
                            {item}
                            {sortConfig.key === item && (
                                sortConfig.direction === 'asc' ? '↑' : '↓'
                            )}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {sortedData.map((item: TableItem, index: number) => (
                    <tr
                        className={style.cursor_pointer}
                        key={startIndex + index}
                        onClick={() => (eventNavigate ? eventNavigate(item) : "")}>
                        {header.map((key: string) => (
                            <td key={key}>{(item as any)[key]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </Table>
            <PaginationTable handleChangePage={handleChangePage} currentPage={currentPage} totalPages={totalPages}/>
        </div>
    );
};

export default CustomTable;
