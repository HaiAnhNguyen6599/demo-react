// import React, { useState } from "react";

// const SearchFilter = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

//   const filteredItems = items.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Search Filter</h2>
//       <input
//         type="text"
//         placeholder="Search items..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={styles.input}
//       />
//       <ul style={styles.list}>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => <li key={index} style={styles.item}>{item}</li>)
//         ) : (
//           <li style={styles.noResult}>No items found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "20px auto",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "10px",
//     color: "#333",
//   },
//   input: {
//     width: "80%",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     marginBottom: "15px",
//   },
//   list: {
//     listStyleType: "none",
//     padding: 0,
//   },
//   item: {
//     padding: "5px",
//     fontSize: "18px",
//     color: "#555",
//   },
//   noResult: {
//     color: "#999",
//     fontStyle: "italic",
//   },
// };

// export default SearchFilter;

import React, { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  // Sử dụng function .filter() của mảng để lọc ra mục phù hợp với từ khóa tìm kiếm ở `searchTerm`
  // 1. Đi qua từng `item` trong array `items`
  // 2. `item` sẽ được dùng hàm lowerCasee để viết thường
  // 3. `item` viết thường sẽ được kiểm tra xem có được includes trong `searchTerm` không
  const filteredItems = items.filter((item) =>
    item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Item..."
      ></input>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
