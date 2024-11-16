import React, { useEffect, useState } from "react";

const CallAPI = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // Khởi tạo loading là true
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hàm call API
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );

        // Nếu có lỗi từ server, ném lỗi
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON từ response
        setPhotos(data); // Lưu kết quả vào state
        setLoading(false); // Đánh dấu đã tải xong
      } catch (err) {
        setError(err.message); // Lưu lỗi vào state
        setLoading(false); // Đánh dấu đã tải xong
      }
    };

    fetchPhotos(); // Gọi hàm fetchPhotos khi component mount
  }, []); // Empty dependency array nghĩa là chỉ chạy một lần khi component mount

  if (loading) return <p>Loading...</p>; // Hiển thị loading khi đang tải
  if (error) return <p>Error: {error}</p>; // Hiển thị lỗi nếu có lỗi

  return (
    <div>
      <h1>Photo</h1>
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
