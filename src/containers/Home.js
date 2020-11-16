import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import subheader from "../assets/subheader.jpeg";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    console.log(response.data.offers[0].product_details[0].MARQUE);
    console.log(response.data.offers[0].owner.account.avatar.secure_url);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        {/* <Header /> */}
        <div className="subheader">
          {/* <img src={subheader} alt="subheader-vinted" /> */}
          <div>
            <h1>Prêts à faire du tri dans vos placards?</h1>
            <button>Commencer à vendre</button>
          </div>
        </div>
        <div className="posts">
          {data.offers.map((item, index) => {
            const keys = Object.keys(item);
            // console.log(keys);
            // console.log(data.offers);
            return (
              <div className="post">
                <Link to={`/offer/${item._id}`} key={item._id}>
                  {/* <div>{data.product_name} go to offers</div> */}
                  <div>
                    <span>
                      {item.owner.account.avatar.secure_url ? (
                        <img
                          src={item.owner.account.avatar.secure_url}
                          alt="pic"
                        />
                      ) : null}
                    </span>
                    <span>
                      <p> {item.owner.account.username}</p>
                    </span>
                  </div>
                  <div className="picture">
                    <img src={item.product_image.secure_url} alt="" />
                  </div>
                </Link>
                <div className="price">
                  <p>{item.product_price} €</p>
                  <p>{item.product_details[0].TAILLE}</p>
                  <p>{item.product_details[0].MARQUE}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

// const Home = () => {
//   return (
//     <div>
//       <Header />

//       <div className="subheader">
//         <div>
//           <h1>Prêts à faire du tri dans vos placards?</h1>
//           <button>Commencer à vendre</button>
//         </div>
//       </div>
//       <div className="posts">
//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>

//         <div className="post">
//           <div>
//             <img src="" alt="" />
//             <p>username</p>
//           </div>
//           <div>
//             <img src="" alt="" />
//             <p>price</p>
//             <p>size</p>
//             <p>brand</p>
//           </div>
//         </div>
//       </div>
//       <Link to="/offer">Go to offer page</Link>
//     </div>
//   );
// };

// export default Home;
