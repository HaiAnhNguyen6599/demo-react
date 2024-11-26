import React, { useState } from "react";

const CRUDManage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const creatNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]); // ... tạo bản sao của mảng notes, newNote dc thêm vào cuối mảng bản sao này
      setNewNote(""); // sau khi thêm ghi chú vào danh sách, nội dung của trường nhập liệu (newNote) sẽ ĐẶT LẠI thành rỗng
    }
  };

  // filter tạo mảng mở chi chứa các phần tử thỏa mãn điều kiện trong callback
  // Callback (_, i) => i !== index:
  // Nếu i !== index thif i được giữ lại trong mảng filter
  // setNotes sẽ update lại mảng mở theo updateNotes
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Note Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "14px",
            width: "70%",
            marginRight: "10px",
          }}
        ></input>
        <button
          onClick={creatNote}
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create Note
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
        {notes.map((note, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "16px" }}>{note}</span>
            <button
              onClick={() => deleteNote(index)}
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDManage;
