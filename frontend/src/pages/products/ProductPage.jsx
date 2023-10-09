import { React, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './productPage.css';
import Alter from '../images/alter.png';
import { FaBarcode, FaListUl } from 'react-icons/fa';
import { BsFillPatchPlusFill, BsTagsFill, BsFillBasketFill, BsFillGrid3X3GapFill } from 'react-icons/bs';

function ProductPage() {

    const [formData, setFormData] = useState({
        barreCode: '',
        price: '',
        qnt: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    console.log(formData)


    const handleSubmit = (e) => {
        e.preventDefault();

        // Créez un objet de configuration pour la requête POST
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData), // Convertissez les données en JSON
        };

        // Effectuer la requête POST
        fetch('http://localhost:3000/product/create', requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Échec de la requête réseau');
                }
                return response.json(); // Si la réponse est en JSON
            })
            .then((data) => {
                // Traitez la réponse du serveur si nécessaire
                console.log(data);
            })
            .catch((error) => {
                // Gestion des erreurs en cas d'échec de la requête
                console.error(error);
            });
    };

    return (
        <main className="main-container">
            <div className="main-title">
                <h1>PRODUCT</h1>
            </div>

            <header className="header-product">
                <Link to="/list">
                    <FaListUl />
                    <h4>List</h4>
                </Link>
                <Link to="categorie">
                    <BsFillGrid3X3GapFill />
                    <h4>Catégorie</h4>
                </Link>
                <Link to="promo">
                    <BsFillPatchPlusFill />
                    <h4>Promo</h4>
                </Link>
                <Outlet />
            </header>

            <section>
                <div className="main-add-product">
                    <form onSubmit={handleSubmit}>
                        <div className='item-input'>
                            <FaBarcode className='icon-input' />
                            <input type="text" name='barreCode' className='design-input' placeholder="Barre code"
                                value={formData.barreCode} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsTagsFill className='icon-input' />
                            <input type="number" name='price' className='design-input' placeholder='Prix produit'
                                value={formData.price} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsFillBasketFill className='icon-input' />
                            <input type="number" name='qnt' className='design-input' placeholder='Quantité'
                                value={formData.qnt} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsFillGrid3X3GapFill className='icon-input' />
                            <select name="category" id="" className='design-input'
                                value={formData.category} onChange={handleChange} >
                                <option>&nbsp;&nbsp; Choix catégorie</option>
                                <option value="Articles de sport">&nbsp;&nbsp;&nbsp;Articles de sport </option>
                                <option value="Équipements électroniques industriels">&nbsp;&nbsp;&nbsp;Équipements électroniques industriels</option>
                                <option value="Produits de nettoyage et d'entretien ménager">&nbsp;&nbsp;&nbsp;Produits de nettoyage et d'entretien ménager</option>
                                <option value="Instruments de musique">&nbsp;&nbsp;&nbsp;Instruments de musique</option>
                                <option value="Produits pour animaux de compagnie">&nbsp;&nbsp;&nbsp;Produits pour animaux de compagnie</option>
                                <option value="Matériel de bureau et papeterie">&nbsp;&nbsp;&nbsp;Matériel de bureau et papeterie</option>
                                <option value="Équipement médical et de santé">&nbsp;&nbsp;&nbsp;Équipement médical et de santé</option>
                            </select>
                        </div>
                        <button type='submit' className="design-button">Submit</button>
                    </form>
                    <div className="img-product">
                        <img src={Alter} alt="" />
                    </div>
                </div>
            </section >
        </main >
    )
}

export default ProductPage
