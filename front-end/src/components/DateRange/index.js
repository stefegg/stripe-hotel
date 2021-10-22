import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Wrapper } from "./styles";
import {
  format,
  formatDistanceStrict,
  differenceInDays,
  endOfDay,
} from "date-fns";
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
      const stayRange = differenceInDays(endOfDay(end), endOfDay(start));
      setstayLength({
        startDate: format(start, "MMM do yyyy"),
        endDate: format(end, "MMM do yyyy"),
        numDays: stayRange + 1,
        numNights: stayRange,
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
