'use client'
import { useEffect, useState } from "react";

export default function Dishes() {
  const [data, setData] = useState(null);
  
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/api/dishes'); // Example API route
      console.log(".-.-.-.-.-.-.-.-.-.-.123");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    //fetchDishes()
    

    fetchData();
  }, []);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
      </div>
    </>
  )
}