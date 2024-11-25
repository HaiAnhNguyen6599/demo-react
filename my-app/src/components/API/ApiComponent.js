import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ApiComponent.css"; // Import file CSS

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/100";

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return (
    <div className="api-container">
      <h1>Data from API</h1>
      <ul className="post-list">
        {data.map((item) => (
          <li key={item.id} className="post-item">
            <h2 className="post-title">{item.title}</h2>
            <p className="post-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
