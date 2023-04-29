import { yearsSinceFormatter } from "../../../helpers/DateHelper";
import "./Coding.scss";

const Coding = () => {
    const timeCoding = `${yearsSinceFormatter('2018-04-24')}`;

    return <summary>&#9432; I have been coding for {timeCoding} years! &#9432;</summary>
};

export default Coding;