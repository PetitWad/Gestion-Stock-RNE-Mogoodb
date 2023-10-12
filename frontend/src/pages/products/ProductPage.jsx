import { React, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        };

        try {
            const response = await fetch('http://localhost:8000/product/create', requestOptions);

            if (response.ok) {
                 await response.json();

                 // Afficher un toast de succès
                 toast.success('Données enregistrées avec succès!');

                // Réinitialiser les champs du formulaire
                setFormData({
                    barreCode: '',
                    price: '',
                    qnt: '',
                    category: '',
                });

            } else {
                // Afficher une notification d'erreur
                 toast.error('Erreur lors de l\'insertion des données depuis l\'API.', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        } catch (error) {
            // Afficher une notification d'erreur
            toast.error('Une erreur s\'est produite lors de la récupération des données depuis l\'API :', error);
            console.error('Une erreur s\'est produite lors de la récupération des données depuis l\'API :', error);
        }
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
                            <input type="text" name='barreCode' className='design-input' placeholder="Barre code" required
                                value={formData.barreCode} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsTagsFill className='icon-input' />
                            <input type="number" name='price' className='design-input' placeholder='Prix produit' required
                                value={formData.price} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsFillBasketFill className='icon-input' />
                            <input type="number" name='qnt' className='design-input' placeholder='Quantité' required
                                value={formData.qnt} onChange={handleChange} />
                        </div>
                        <div className='item-input'>
                            <BsFillGrid3X3GapFill className='icon-input' />
                            <select name="category" className='design-input' required
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
            <ToastContainer />
        </main >
    )
}

export default ProductPage
   