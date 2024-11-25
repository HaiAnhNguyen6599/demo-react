import React, { useState } from "react";

const SalaryCalculate1 = () => {
  // Mức lương theo giờ
  const [hourlyRate, setHourlyRate] = useState("");

  // Các ngyaf trong tuần
  const [hours, setHours] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  // Tổng số giờ làm việc
  const [totalHours, setTotalHour] = useState(0);
  // Tổng số giờ overtime
  const [overTimeHours, setOverTimeHour] = useState(0);
  // Tổng lương overtime
  const [overTimeSalary, setOverTimeSalary] = useState(0);
  // Tổng lương full
  const [totalSalary, setTotalSalary] = useState(0);
  // Báo lỗi Eror// string
  const [error, setError] = useState(" ");

  //Cập nhật Mức lương theo giờ (hourlyRate)
  const handleHourRateChange = (e) => {
    setHourlyRate(e.target.value);
  };

  // Cập nhật số số giờ làm việc trong tuần
  const handleHoursChange = (day, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: value,
    }));
  };

  // Tính lương
  const calculateSalary = () => {
    const dailyHours = Object.values(hours).map(Number);

    // Check valid input value
    if (dailyHours.some((h) => h === "" || h < 0)) {
      setError("Please Enter Valid value");
      setTotalHour(0);
      setOverTimeHour(0);
      setTotalSalary(0);
      return;
    }

    // Set Error nếu hợp lệ
    setError("");

    // Cộng dồn tổng số giờ làm việc trong tuần
    // accumulate
    const total = dailyHours.reduce((acc, h) => acc + h, 0);

    // Tạo biến số giờ overtime và số giờ làm Hành Chính
    const overtime = total > 40 ? total - 40 : 0;
    const regularHours = total - overtime;

    // TÍnh tổng lương, giờ overtime * 1.5
    const overTimeSalary = overtime * hourlyRate * 1.5;
    const salary = regularHours * hourlyRate + overtime * hourlyRate * 1.5;

    // Đưa vào state
    setTotalHour(total);
    setOverTimeHour(overtime);
    setOverTimeSalary(overTimeSalary);
    setTotalSalary(salary);
  };

  return (
    <div className="container">
      {/* Tạo input nhập số tiền theo giờ */}
      <div>
        <label>
          Mức lương theo giờ
          <input
            type="number"
            value={hourlyRate}
            onChange={handleHourRateChange}
          ></input>
        </label>
      </div>

      {/* Tạo Giao diện các Ngày trong tuần cùng input số giờ */}
      <div>
        <h3>Số giờ làm việc trong tuần</h3>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thurday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, index) => (
          <div key={index}>
            <label>{day}</label>
            <input
              type="number"
              value={hours[day]}
              onChange={(e) => handleHoursChange(day, e.target.value)}
              placeholder="Enter Hours"
            ></input>
          </div>
        ))}
      </div>

      {/* Nút tính lương */}
      <button onClick={calculateSalary}>Calculate Salary</button>

      <div>
        <h2>Result</h2>
        <p>Total Working Hours: {totalHours}</p>
        <p>Total Working Overtime Hours: {overTimeHours}</p>
        <p>Total Working Hour Salary: {overTimeSalary}</p>
        <p>Total Salary: {totalSalary.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default SalaryCalculate1;
