import "./Product.css";

const Product = ({ dados }) => {

  function handleClick() {
    const verify = confirm(`Tem certeza que deseja realizar esta compra? \nProduto: ${dados.nome}`)
    verify ? alert(`Compra realizada com sucesso!`) : alert('Erro ao processar o pagamento!')
  }

  return (
    <article>
      <div className="previewProduct">
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </div>
      <div className="details">
        <div className="description">
          <h1>{dados.nome}</h1>
          <p>{dados.desc}</p>
        </div>
        <div className="buy">
          <p id='price'>R$ {dados.preco}</p>
          <button onClick={handleClick}>Comprar</button>
        </div>
      </div>
    </article>
  );
};

export default Product;
