import React, { useState } from "react";

const SalaryCalculate = () => {
  const [hourlyRate, setHourlyRate] = useState(""); //Mức lương theo giờ
  const [hours, setHours] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  }); // số giờ làm việc từng ngày trong tuần
  const [totalHours, setTotalHour] = useState(0); // tổng số giờ làm việc
  const [overTimeHours, setOverTimeHour] = useState(0); // tổng số giờ overtime
  const [overTimeSalary, setOverTimeSalary] = useState(0); // Tổng lương overtime
  const [totalSalary, setTotalSalary] = useState(0); // tổng lương full
  const [error, setError] = useState(" "); //error

  // Hàm sử dụng để cập nhật `Mức lương theo giờ` (hourlyRate) khi người dùng nhập liệu vào ô input tương ứng
  // e (event): Tham số e là sự kiện (event) phát sinh khi ngườ dùng thay đổi giá trị trong ô input
  // e.target.value: Lấy value trong ô input mà người dùng nhập
  // setHourlyRate(e.target.value): cập nhật hourlyRate với giá trị người dùng nhập = cách gọi hàm setHourlyRate của useState
  const handleHourRateChange = (e) => {
    setHourlyRate(e.target.value);
  };

  // Hàm dùng để cập nhật số giờ làm việc cho từng ngày trong tuần = cách sử dụng function 'setHours' của useState (Số giờ làm việc từng ngày trong tuần)
  // day: ngày trong tuần  (monday, friday, ..) để biết cập nhật cho ngày nào
  // value: giá trị mới từ input, biểu thị số giờ làm việc mà người dùng nhập vào cho ngày đó
  // setHours cập nhật state hours (là một đối tượng lưu số giờ làm việc của từng ngày trong tuần)
  // prevHours: Để đẩm bảo chúng ta không mất dữ liệu của các ngày khác, prevHours chứa bản sao của các ngày trước đó
  // [day]: value: GHi ĐÈ số giờ làm việc của ngày được chỉ định (day) bằng (value) mới, trong khi các ngày khác vẫn giữ nguyên
  const handleHoursChange = (day, value) => {
    // const hoursValue = parseFloat(value);
    // if (hoursValue >= 0) {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: value,
    }));
    // } else {
    //   alert("Please enter Positive Hour");
    // }
  };

  const calculateSalary = () => {
    // Lấy tât cả giá trị số giờ làm việc của đối tượng `hours` và chuyển thành Number
    const dailyhours = Object.values(hours).map(Number);

    // Kiểm tra bất kỳ giá trị nào không hợp lệ
    // dùng some để kiểm tra xem giá trị nào trong `hour` trống hoặc âm
    // Nếu thỏa mãn điều kiện if thì sẽ dừng hàm calculateSalary() và không thực hiện các bước sau
    if (dailyhours.some((h) => h === "" || h < 0)) {
      setError("Please enter valid value for every day");
      setTotalHour(0);
      setOverTimeHour(0);
      setTotalSalary(0);
      return;
    }

    // Xóa thông báo lỗi nếu tất cả các giá trị hợp lệ
    setError("");

    // Tính tổng số giờ làm việc trong tuần
    // Sử dụng reduce để cộng tất cả các giá trị giờ làm việc trong mảng dailyHours
    // (acc, h) => acc + h: Hàm callback được thự thi trên mỗi phần tử của mảng
    // acc (accumulator) là biến tích luỹ để lưu trữ TỔNG tạm thời trong mỗi lần lặp: vd: 5 + 2 = 7 => acc 7 rồi + tiếp với h (=5) tiếp theo 7 + 5 = 12 rồi tiếp tục
    // h: phần từ hiện tại của mang dailyHours
    // 0: giá trị ban đầu của acc
    const total = dailyhours.reduce((acc, h) => acc + h, 0);

    // Tính tổng số giờ làm thêm nếu tổng số giờ đó > 40
    // Nếu total > 40 thì số giờ overtime = total - 40, ngược lại = 0
    // Số giờ làm việc thông thường dùng để phân biệt với overtime
    const overtime = total > 40 ? total - 40 : 0;
    const regularHours = total - overtime;

    // Tính tổng lương, giờ làm thêm được tính với hệ số 1.5
    const overTimeSalary = overtime * hourlyRate * 1.5;
    const salary = regularHours * hourlyRate + overtime * hourlyRate * 1.5;

    // Cập nhật các giá trị vào state
    setTotalHour(total);
    setOverTimeHour(overtime);
    setOverTimeSalary(overTimeSalary);
    setTotalSalary(salary);
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <div>
        <label>
          Mức lương theo giờ
          <input
            type="number"
            value={hourlyRate}
            onChange={handleHourRateChange}
            placeholder="USD/hour"
          ></input>
        </label>
      </div>
      {/* 
      - Tạo array ngày trong tuần và loop vào từng ngày. Sử dụng [].map
      - day: tên của từng index trong mảng (các ngày trong tuần)
      - index: index của từng ngày, từ index 0 - 6
      - Mỗi lần lặp sẽ tạo ra div chứa label và input
      - Thứ ${index + 2}: Hiển thị label từ Thứ 2 - CN
      - value={hour[day]}: Lấy giá trị từ hours theo từng day (ví dụ: hours["monday"])
      - onChange = {(e) => handleHoursChange(day, e.target.value)}: Gọi hàm handleHoursChange khi thay đổi giá trị, 
      - truyền `day` và `value` mới của input để cập nhập 
      */}
      <div style={{ marginTop: "10px" }}>
        <h3>Số giờ làm việc</h3>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, index) => (
          <div key={index}>
            <label>
              {day}
              <input
                type="number"
                value={hours[day]}
                onChange={(e) => handleHoursChange(day, e.target.value)}
                placeholder="Total Hours"
              ></input>
            </label>
          </div>
        ))}
      </div>

      <button onClick={calculateSalary} style={{ marginTop: "15px" }}>
        Calculate Salary
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "20px" }}>
        <h2>Result</h2>
        <p>Total Working Hours: {totalHours}</p>
        <p>Total Working Overtime Hours: {overTimeHours}</p>
        <p>Total Working Hour Salary: {overTimeSalary}</p>
        <p>Total Salary: {totalSalary.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default SalaryCalculate;
