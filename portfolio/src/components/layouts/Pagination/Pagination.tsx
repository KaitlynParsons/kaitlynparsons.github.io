import { IPagination } from "../../../interfaces/IPagination";
import "./Pagination.scss";

/**
   How to use(example):
   ----
   const aboutJourney = [];
   const [pageState, setPageState] = useState({
      list: aboutJourney.slice(0, PAGE_OFFSET),
      perPage: PAGE_OFFSET,
      currentPage: 1,
      totalPages: Math.ceil(aboutJourney.length / PAGE_OFFSET),
    });
    const [pageChanged, setPageChanged] = useState(false);

    const newPage = (currentPage: number) => {
      const indexOfLastRecord = currentPage * pageState.perPage;
      const indexOfFirstRecord = indexOfLastRecord - pageState.perPage;
      const newList = aboutJourney.slice(indexOfFirstRecord, indexOfLastRecord);
      setPageState({ ...pageState, list: newList, currentPage });
      return setPageChanged(true);
    };

    useEffect(() => {
      if (pageChanged) {
        return setPageChanged(false);
      }
    }, [pageChanged]);

    <Pagination
        perPage={pageState.perPage}
        totalPages={pageState.totalPages}
        currentPage={pageState.currentPage}
        onPageChange={newPage}
      >
          {pageState.list}
      </Pagination>
    ----
 * @param props 
 * @returns {JSX.Element}
 */
export const Pagination = (props: IPagination) => {
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
