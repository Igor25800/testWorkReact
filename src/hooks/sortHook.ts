import { useState, useMemo } from "react";
interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

const useSortableTable = () => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: 'asc' });
    const handleSort = (key: string) => {
        setSortConfig((prevConfig) => ({
            key,
            direction: prevConfig.key === key ? (prevConfig.direction === 'asc' ? 'desc' : 'asc') : 'asc',
        }));
    };

    const sortedItems = useMemo(() => {
        return (data: any[]) => {
            return [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        };
    }, [sortConfig]);

    return { sortConfig, handleSort, sortedItems };
};

export default useSortableTable;
