import { yearsSinceFormatter } from "../../../helpers/DateHelper";
import "./Coding.scss";

const Coding = () => {
    const timeCoding = `${yearsSinceFormatter('2018-04-24')}`;

    return <summary>&#128712; I have been coding for {timeCoding} years! &#128712;</summary>
};

export default Coding;