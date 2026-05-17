import React, { useEffect, useState } from "react";
import Card from "../UIC/Card";
import FeaturedCard from "../UIC/FeaturedCard";
import axios from "axios";
import { baseUrl } from "../../url";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
      });
  }, []);

  return (
    <div style={{ margin: "2%" }}>
      {data.map((e) => {
        if (e.featured) {
          return (
            <FeaturedCard
              key={e._id}
              title={e.tripName}
              tripType={e.tripType}
              description={e.shortDescription}
              id={e._id}
            />
          );
        } else {
          return null;
        }
      })}

      {data.map((e) => {
        if (!e.featured) {
          return (
            <Card
              key={e._id}
              title={e.tripName}
              tripType={e.tripType}
              description={e.shortDescription}
              id={e._id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}