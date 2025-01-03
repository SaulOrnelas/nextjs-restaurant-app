'use client'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchData } from "@/redux/dishSlice";

export default function Dishes() {
  const [data, setData] = useState(null);

  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData()); // Consultar datos al cargar la página
    }
  }, [dispatch, status]);
  
  // async function fetchData() {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/dishes'); // Example API route
  //     console.log(".-.-.-.-.-.-.-.-.-.-.123");
  //     const result = await response.json();
  //     console.log(result);
  //     setData(result);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {items.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}