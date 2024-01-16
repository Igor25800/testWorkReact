import { Pagination} from "react-bootstrap";
import {FC} from "react";

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handleChangePage: (index: number) => void
}
const PaginationTable: FC<PaginationProps> = ({totalPages, currentPage,handleChangePage}) => {

    if (totalPages <= 1) {
        return ;
    }
    return (
        <div>
            <Pagination>
                {Array.from({ length: totalPages }).map((_, index: number) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handleChangePage(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default PaginationTable;