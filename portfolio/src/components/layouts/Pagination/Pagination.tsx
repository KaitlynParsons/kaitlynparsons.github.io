import { IPagination } from "../../../interfaces/IPagination";
import "./Pagination.scss";

const Pagination = (props: IPagination) => {
  const { children, currentPage, onPageChange, totalPages } = props;
  return (
    <div className="btn-container">
      {children}
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'< PREV'}
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'NEXT >'}
      </button>
    </div>
  );
};

export default Pagination;
