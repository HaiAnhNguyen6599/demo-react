import React, { useState } from "react";

const SalaryCalculate = () => {
  const [hourlyRate, setHourlyRate] = useState(""); //Mức lương theo giờ
  const [hour, setHours] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  }); // số giờ làm việc từng ngày trong tuần
  const [totalHour, setTotalHour] = useState(0); // tổng số giờ làm việc
  const [overTimeHour, setOverTimeHour] = useState(0); // tổng số giờ overtime
  const [totalSalary, setTotalSalary] = useState(0); // lương
  const [error, setError] = useState(" "); //error

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <label>
          Mức lương theo giờ
          <input type="number" placeholder="USD/hour"></input>
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h3>Số giờ làm việc</h3>
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day,index) => (
            <div key={index}>
                <label>
                    {`Thứ ${index + 2}`}
                    <input></input>
                </label>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryCalculate;
