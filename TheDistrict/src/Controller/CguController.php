<?php
// src/Controller/YourController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CguController extends AbstractController
{
    /**
     * @Route("/politique", name="app_politique")
     */
    public function politique(): Response
    {
        return $this->render('cgu/index.html.twig');
    }
}