import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="Offers">
      <div className="product-picture"></div>
      <div className="product-description">
        <p>{data.product_name}</p>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem); // ["MARQUE"]
          console.log(keys);
          return (
            <p key={index}>
              {keys[0]} {elem[keys[0]]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
