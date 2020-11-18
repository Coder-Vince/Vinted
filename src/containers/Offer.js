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
    <div className="back">
      <div className="Offers">
        <div className="product-picture">
          <img src={data.product_image.secure_url} alt="product-image" />
        </div>
        <div className="product-description">
          <p>{data.product_name}</p>
          {data.product_details.map((elem, index) => {
            const keys = Object.keys(elem); // ["MARQUE"]
            console.log(keys);
            return (
              <ul key={index} className="offerul">
                <li>
                  {keys[0]} : {elem[keys[0]]}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
