import React from "react";
import Product from "../components/Product";
import Loading from "../assets/loading.svg"

const Products = () => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
    setLoading(true)
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      );
      const data = await response.json();

      if (data.id === 'notebook') {
        data.desc = 'MacBook Pro M1 - 8Gb de RAM + 512 SSD'
      } else if (data.id === 'smartphone') {
        data.desc = '128GB 5G Tela 6.6, Dual Chip 6GB RAM Câmera Tripla de até 48MP + Selfie 13MP Bateria de 5000mAh'
      } else if (data.id === 'tablet') {
        data.desc = '8GB + 256GB, Android 13, Tela de 10.1”, Bateria 8800mAh, 5G WIFI'
      }

      setDados(data)
      setLoading(false)
    } catch (err) {
      console.log("Nao foi possivel concluir a rquisicao do fetch:" + err);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
      </div>
      {loading && <img src={Loading} alt="Loading..." /> }
      {!loading && dados && <Product dados={dados} />}
    </div>
  );
};

export default Products;
