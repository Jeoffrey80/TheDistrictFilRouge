<?php

namespace App\Controller;

use App\Repository\CategorieRepository;
use App\Service\Panier;
use App\Repository\PlatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Utilisateur;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class PlatController extends AbstractController
{
    private $categorieRepo;
    private $platRepo;

    // Injectez le PlatRepository dans le constructeur
    public function __construct(CategorieRepository $categorieRepo, PlatRepository $platRepo)
    {
        $this->categorieRepo = $categorieRepo;
        $this->platRepo = $platRepo;
    }




    #[Route('/plat', name: 'app_plat')]
    public function plats(): Response
    {
        //on appelle la fonction `findAll()` du repository de la classe `Plat` afin de récupérer tous les plats de la base de données;
        $plats = $this->platRepo->findAll();
        dump($plats);

        return $this->render('plat/index.html.twig', [
            'controller_name' => 'PlatController',
            'plats' => $plats
        ]);
    }

    #[Route('/categorie', name: 'app_categorie')]
    public function categories(): Response
    {
        $categories = $this->categorieRepo->findAll();
        dump($categories);
        return $this->render('categorie/index.html.twig', [
            'controller_name' => 'PlatController',
            'categories' => $categories
        ]);
    }

    #[Route('/plats/{categorie_id}', name: 'app_plats_categorie')]
    public function platCategorie(int $categorie_id, CategorieRepository $categorieRepo): Response
    {
        // je récupère la categorie correspondant à l'id
        $categorie = $this->categorieRepo->find($categorie_id);
        dump($categorie);

        $plats = $categorie->getPlats();
        return $this->render('platcate/platcategorie.html.twig', [
            'categories' => $categorie,
            'plats' => $plats,
        ]);
    }
}
?>
