import React,{ useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function Reservation(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDateInDatabase, setIsDateInDatabase] = useState(false);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsDateInDatabase(true);
      };

      const dateshow = () =>{
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        const day = selectedDate.getDate();
        console.log(`Selected date: ${year}-${month + 1}-${day}`); // Example operation
        const selectdate = day+'/'+(month+1)+'/'+year;
        return selectdate;
      }

      return (
        <div>
          <DatePicker selected={selectedDate} onChange={handleDateChange} className="date-picker"/>
          {isDateInDatabase &&
            <h1>{dateshow()}</h1>
          }
        </div>
      );
}