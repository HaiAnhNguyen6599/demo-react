import React, { useEffect, useState } from "react";

// Định nghĩa hàm getAll để gọi API
const getAll = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const CallAPI = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi hàm getAll khi component được mount
    const fetchData = async () => {
      try {
        const data = await getAll(); // Sử dụng hàm getAll để gọi API
        setPhotos(data); // Lưu dữ liệu vào state
        setLoading(false); // Đánh dấu tải xong
      } catch (err) {
        setError(err.message); // Lưu lỗi nếu có
        setLoading(false); // Đánh dấu tải xong
      }
    };

    fetchData(); // Thực thi hàm fetchData
  }, []); // useEffect chỉ chạy một lần khi component mount

  if (loading) return <p>Loading...</p>; // Hiển thị khi đang tải
  if (error) return <p>Error: {error}</p>; // Hiển thị nếu có lỗi

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.slice(0, 20).map((photo) => (
          <div key={photo.id} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallAPI;
