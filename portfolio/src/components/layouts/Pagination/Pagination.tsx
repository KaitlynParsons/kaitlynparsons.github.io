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
        &#8668;
      </button>
      <span>{currentPage}/{totalPages}</span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &#8669;
      </button>
    </div>
  );
};

export default Pagination;
