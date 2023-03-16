import { IPaginationProps } from "../../../interfaces/PaginationProps";
import "./Pagination.scss";

const Pagination = (props: IPaginationProps) => {
  const { children, currentPage, onPageChange, totalPages } = props;
  return (
    <>
      {children}
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        prev
      </button>
      {currentPage} of {totalPages}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        next
      </button>
    </>
  );
};

export default Pagination;
