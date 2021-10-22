import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Wrapper } from "./styles";
import { format, formatDistanceStrict } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./date-styles.css";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const DateRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [stayLength, setstayLength] = useRecoilState(atoms.stayLength);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    findNights(start, end);
  };
  const findNights = (start, end) => {
    if (start && end !== null) {
      const nightRange = formatDistanceStrict(start, end);
      const numNights = parseInt(nightRange.slice(0, 1));
      setstayLength({
        startDate: format(start, "MMM do yyyy"),
        endDate: format(end, "MMM do yyyy"),
        numDays: numNights + 1,
        numNights: numNights,
      });
    } else return;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      selectsRange
      inline
    />
  );
};

export default DateRange;
