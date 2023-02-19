import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

//   const premiumNumber = ["0", "100", "200"]; //Maneira errada

  const premiumNumber = useMemo(()=> {
    return ["0", "100", "200"]
  }, []);

  useEffect(() => {
    console.log("PremiumNumbers foi alterado");
  }, [premiumNumber]);

  return (
    <div>
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e)=> setNumber(e.target.value)}/>
      {premiumNumber.includes(number) ? <p>Acertou</p> : <p>Errroouuu</p>}
      <hr />
    </div>
  );
};

export default HookUseMemo;


// EXEMPLO DE USO PELO CHATGTP
// import React, { useState, useMemo } from "react";

// function ProductList({ products }) {
//   const [filter, setFilter] = useState("");

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => product.name.includes(filter));
//   }, [products, filter]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={filter}
//         onChange={(event) => setFilter(event.target.value)}
//       />
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }