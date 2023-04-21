import { useEffect, useState } from "react";
import { currentTimeFormatter, yearsSinceFormatter } from "../../../helpers/DateHelper";
import "./Widget.scss";

const Widget = () => {
    const [time, setTime] = useState(currentTimeFormatter());
    const [timeCoding, setTimeCoding] = useState(`${yearsSinceFormatter('2018-04-24')} years`);

    useEffect(() => {
        setInterval(() => setTime(currentTimeFormatter()), 1000);
    });

    return (
        <div className="widget">
            <div>👩‍💻 {timeCoding}</div>
            <div>{time}</div>
        </div>
    )
}

export default Widget;