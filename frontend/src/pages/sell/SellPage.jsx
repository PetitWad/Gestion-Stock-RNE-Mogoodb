import React from 'react';
import './sell.css';
import { BsFillCartFill, BsFileBarGraphFill } from 'react-icons/bs';
// import PicCaisier from '../images/pic.jpg';


function SellPage() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Sell</h1>
      </div>

      <section className='main-sell'>
        <div className="sell">
          <form action="">
            <div className="item-sell">
              <input type="text" name="" id="" className='design-input' placeholder='Code Barre' />
              <input type="number" name="" id="" className='design-input' placeholder='Quantité' />
            </div>
            <div className="buttons-sell">
              <button className='design-button' >Valider</button>
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
                    <td>iPhone 13 Pro</td>
                    <td>2</td>
                    <td>$999.99</td>
                    <td>$1999.98</td>
                  </tr>
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
              <tr class="item">
                <td>123456</td>
                <td>Smartphones</td>
                <td>200</td>
                <td class="total-category">0.00</td>
              </tr>
              <tr class="item">
                <td>789012</td>
                <td>Ordinateurs</td>
                <td>390</td>
                <td class="total-category">0.00</td>
              </tr>
              <tr class="item">
                <td>123456</td>
                <td>Smartphones</td>
                <td>250</td>
                <td class="total-category">1200.00</td>
              </tr>
              <tr class="item">
                <td>789012</td>
                <td>Ordinateurs</td>
                <td>390</td>
                <td class="total-category">2500.00</td>
              </tr>
              <tr class="item">
                <td>345678</td>
                <td>Tablettes</td>
                <td>150</td>
                <td class="total-category">800.00</td>
              </tr>
              <tr class="item">
                <td>901234</td>
                <td>Imprimantes</td>
                <td>75</td>
                <td class="total-category">350.00</td>
              </tr>
              <tr class="item">
                <td>567890</td>
                <td>Écrans</td>
                <td>200</td>
                <td class="total-category">1800.00</td>
              </tr>
              <tr class="item">
                <td>234567</td>
                <td>Claviers</td>
                <td>120</td>
                <td class="total-category">500.00</td>
              </tr>
              <tr class="item">
                <td>890123</td>
                <td>Souris</td>
                <td>180</td>
                <td class="total-category">900.00</td>
              </tr>
              <tr class="item">
                <td>456789</td>
                <td>Casques</td>
                <td>90</td>
                <td class="total-category">750.00</td>
              </tr>
              <tr class="item">
                <td>123456</td>
                <td>Disques durs</td>
                <td>110</td>
                <td class="total-category">600.00</td>
              </tr>
              <tr class="item">
                <td>789012</td>
                <td>Écouteurs</td>
                <td>300</td>
                <td class="total-category">1200.00</td>
              </tr>
              <tr class="item">
                <td>345678</td>
                <td>Routeurs</td>
                <td>80</td>
                <td class="total-category">400.00</td>
              </tr>
              <tr class="item">
                <td>901234</td>
                <td>Webcams</td>
                <td>40</td>
                <td class="total-category">200.00</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default SellPage
