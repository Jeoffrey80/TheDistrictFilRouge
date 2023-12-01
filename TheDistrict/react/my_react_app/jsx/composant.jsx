import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const MonPremierComposant = (props) => {
    // État de l'animation du chargement des données
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    // Fonction pour récupérer les catégories de votre base de données
    const fetchCategories = async () => {
        try {
            // Remplacez l'URL par celle de votre API pour récupérer les catégories
            const response = await fetch("https://127.0.0.1:8000/api/categories?page=1");
            const data = await response.json();
            setCategories(data['hydra:member']);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération des catégories", error);
        }
    };

    // Appeler la fonction fetchCategories lors du montage du composant
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className={"container"}>
            {loading ? (
                <Spinner animation="grow" variant="info" />
            ) : (
                <>
                    <div className="row">
                        <div className={'col-12 mt-4'}>
                            <h1 className={'p-3 text-center'} style={{ color: "#000000", fontSize: "2.8em" }}>Catégories</h1>
                            <h2 className={'p-2 text-center'} style={{color:"black" , fontSize: "1.6em"}}>Voici notre liste de nos catégories !</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {categories.map((category, index) => (
                            <div className="col-md-4 col-lg-3 p-2" key={index} style={{ backgroundColor: '#D3D3D3', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                                <a href={`/plats/${category.id}`} ><Card style={{ width: '18rem', borderRadius: '50% 20% / 10% 40%' }} href={`/plats/${category.id}`}>
                                    <Card.Img variant="top" src={category.image} style={{ height: '200px', objectFit: 'cover' }} href={`/plats/${category.id}`}/>
                                    <Card.Body>
                                        <Card.Title className="row justify-content-center" href={`/plats/${category.id}`}>{category.libelle}</Card.Title>
                                        <a href={`/plats/${category.id}`}><Card.Text>
                                            {category.description}
                                        </Card.Text></a>
                                    </Card.Body>
                                    <a href={`/plats/${category.id}`} ></a>
                                
                                </Card></a>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MonPremierComposant;