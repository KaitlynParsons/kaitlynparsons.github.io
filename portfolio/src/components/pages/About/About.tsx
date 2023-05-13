import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Headline from "./Headline/Headline";
import "./About.scss";
import { useEffect, useState } from "react";
import Pagination from "../../layouts/Pagination/Pagination";

const PAGE_OFFSET = 1;

const About = () => {
    const aboutJourney = [<Headline key={'headline'} />, <Experience key={'experience'} />, <Education key={'education'} />];
    const [selected, setSelected] = useState(aboutJourney[0]);
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
      setSelected(aboutJourney[currentPage]);
      setPageState({ ...pageState, list: newList, currentPage });
      return setPageChanged(true);
    };

    useEffect(() => {
      if (pageChanged) {
        return setPageChanged(false);
      }
    }, [pageChanged]);

    return (
      <Pagination
        perPage={pageState.perPage}
        totalPages={pageState.totalPages}
        currentPage={pageState.currentPage}
        onPageChange={newPage}
      >
          {pageState.list}
      </Pagination>
    );
  };
  
  export default About;