import React, { useState, useEffect } from 'react';
import './sell.css';
import { BsFillCartFill, BsFileBarGraphFill } from 'react-icons/bs';
// import PicCaisier from '../images/pic.jpg';


function SellPage() {

  //decomposition des dvariable pour recuperer des donnees depuis mon formulaire
  const [dataSell, setDataSell] = useState({
    barreCode: '',
    qnt: ''
  });

  //Variable de gestion des donnes a afficher
  const [product, setProduct] = useState([]);

  //Chargement de donner des input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSell({ ...dataSell, [name]: value });
  }

  //function de soumission des donnees vers Mongodb
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataSell),
      });

      if (response.ok) {
        console.log('Données envoyées avec succès !');
        setDataSell({
          barreCode: '',
          qnt: '',
        });
      } else {
        console.error('Erreur lors de l\'envoi des données.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi des données :', error);
    }
  };

  //Afficher tous les produit disponible depuis la bd mongodb
  useEffect(() => {
    const fetchAllProduct = async () => {

      try {
        const response = await fetch('http://localhost:8000/product/all');

        if (response.ok) {
        const data = await response.json();
          setProduct(data);

        } else {
          console.error('Erreur lors de la récupération des données depuis l\'API.');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données depuis l\'API :', error);
      }
    };
    fetchAllProduct();
  }, []);


  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Sell</h1>
      </div>

      <section className='main-sell'>
        <div className="sell">
          <form onSubmit={handleSubmit}>
            <div className="item-sell">
              <input
                type="text"
                name="barreCode"
                className='design-input'
                placeholder='Code Barre'
                value={dataSell.barreCode}
                onChange={handleChange} />

              <input
                type="number"
                name="qnt"
                className='design-input'
                placeholder='Quantité'
                value={dataSell.qnt}
                onChange={handleChange} />
            </div>
            <div className="buttons-sell">
              <button className='design-button' type='submit' >Valider</button>
              <button className='danger-button'>Vider</button>
            </div>

            <div className="main-barre">
              <div className='line'></div>
              <span><BsFillCartFill /></span>
              <div className='line'></div>
            </div>

            <div className="main-cart">
              <table>
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Qnt</th>
                    <th>Prix U</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Samsung Galaxy S21</td>
                    <td>3</td>
                    <td>$899.00</td>
                    <td>$2697.00</td>
                  </tr>
                  <tr>
                    <td>Google Pixel 6</td>
                    <td>1</td>
                    <td>$799.99</td>
                    <td>$799.99</td>
                  </tr>
                  <tr>
                    <td>MacBook Pro 14-inch</td>
                    <td>2</td>
                    <td>$1,799.00</td>
                    <td>$3598.00</td>
                  </tr>
                  <tr>
                    <td>Sony PlayStation 5</td>
                    <td>4</td>
                    <td>$499.99</td>
                    <td>$1999.96</td>
                  </tr>
                  <tr>
                    <td>Nintendo Switch OLED</td>
                    <td>3</td>
                    <td>$349.99</td>
                    <td>$1049.97</td>
                  </tr>
                  <tr>
                    <td>Dell XPS 13</td>
                    <td>2</td>
                    <td>$1,299.00</td>
                    <td>$2598.00</td>
                  </tr>
                  <tr>
                    <td>LG 55-inch 4K TV</td>
                    <td>1</td>
                    <td>$699.99</td>
                    <td>$699.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td><button className='design-button'>Payer</button></td>
                    <td colspan="2">Total</td>
                    <td>$16642.89</td>
                  </tr>
                </tfoot>
              </table>

            </div>
          </form>
        </div>
        {/* Le tableau des produits */}
        <div className="statistic-item-sell">
          <h3><BsFileBarGraphFill /> Rapport de vente par catégorie</h3>
          <table class="cart-table">
            <thead>
              <tr>
                <th>Code Barre</th>
                <th>Catégorie</th>
                <th>Qnt</th>
                <th>Prix Total/Catégorie</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={index}>
                  <td>{item.barreCode}</td>
                  <td>{item.price} $</td>
                  <td>{item.qnt}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default SellPage
