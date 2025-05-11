<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet en équipe</div>
      <h1 class="text-4xl font-bold tracking-tighter">AP Personnages</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">HTML</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Bootstrap</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">PHP</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">SQL</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Méthode Agile</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/cars.png"
        alt="Projet Univers Cars"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Ce projet est un site web dynamique basé sur l'univers de Cars de Pixar. Réalisé en équipe de deux, il nous a permis d'aborder des notions backend et frontend très importantes et fondamentales pour la suite de notre cursus. Le site offre aux fans une plateforme pour explorer les personnages, véhicules et histoires de cet univers.</p>
        <p class="mt-4">Le développement a suivi la méthode Agile, favorisant une collaboration efficace, une adaptation rapide aux besoins et une livraison itérative des fonctionnalités.</p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Fonctionnalités Clés</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Filtrage des Personnages</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Système de filtrage permettant de rechercher et trier les personnages de l'univers Cars selon différents critères.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Tableau de Bord Administrateur</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Interface d'administration centralisée pour la gestion complète du contenu du site (personnages, catégories, etc.).
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Gestion CRUD des Personnages</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Formulaires dédiés pour l'ajout, la modification et la suppression des personnages et de leurs informations.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Système d'Authentification</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Mécanisme de connexion sécurisé pour les administrateurs du site, protégeant l'accès aux fonctionnalités de gestion.
          </p>
        </div>
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences Acquises</h2>
      <div class="space-y-6">
        <div class="rounded-lg border p-4" style="border: 1px solid rgba(0, 0, 0, 0.5);">
          <div class="flex items-center space-x-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="text-lg font-semibold">Répondre aux incidents et aux demandes d'assistance et d'évolution</h3>
          </div>
          <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
            <li>Traiter des demandes concernant les services réseau, système et applicatifs</li>
          </ul>
        </div>

        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="text-lg font-semibold">Gérer le patrimoine informatique</h3>
          </div>
          <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
            <li>Recenser et identifier les ressources numériques</li>
            <li>Gérer des sauvegardes</li>
          </ul>
        </div>

        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="text-lg font-semibold">Travailler en mode projet</h3>
          </div>
          <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-4">
            <li>Planifier les activités</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>Le site web sur l'univers Cars a été développé en utilisant les technologies et méthodologies suivantes :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>HTML pour la structure des pages</li>
          <li>Bootstrap pour le design responsive</li>
          <li>PHP pour la logique côté serveur et la gestion des sessions</li>
          <li>SQL pour la gestion de la base de données</li>
          <li>Méthode Agile pour la gestion de projet</li>
          <li>Git pour le contrôle de version</li>
          <li>XAMPP comme environnement de développement local (Apache, PHP, MySQL)</li>
        </ul>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Galerie du Projet</h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <div class="space-y-2">
          <p class="text-xl text-muted-foreground">Catégories des personnages</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsCate.png"
              alt="Mise à jour du site"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xl text-muted-foreground">Liste des personnages avec options de filtrage</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsListe.png"
              alt="Liste des véhicules"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xl text-muted-foreground">Tableau de bord administrateur pour la gestion du contenu Cars</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsDashboard.png"
              alt="Détails du véhicule"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xl text-muted-foreground">Formulaire de mise à jour des informations d'un personnage</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsUpdate.png"
              alt="Ajout de véhicule"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div class="space-y-2">
            <p class="text-xl text-muted-foreground">Confirmation de suppression d'un personnage</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsDelete.png"
              alt="Recherche de véhicules"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xl text-muted-foreground">Formulaire d'ajout d'un nouveau personnage</p>
          <div class="aspect-video overflow-hidden rounded-lg border">
            <img
              src="/public/carsAjout.png"
              alt="Panneau d'administration"
              class="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6">
      <NuxtLink 
        to="/AP2" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/AP4" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        Projet Suivant
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';

const pdfUrl = '/docs/AP3-documentation.pdf';
const scale = ref(1);
const width = ref(800);
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
  // Adjust width based on screen size
  updateWidth();
  window.addEventListener('resize', updateWidth);
});

function updateWidth() {
  const containerWidth = Math.min(window.innerWidth - 40, 800);
  width.value = containerWidth;
}

function zoomIn() {
  scale.value = Math.min(scale.value + 0.1, 2);
}

function zoomOut() {
  scale.value = Math.max(scale.value - 0.1, 0.5);
}

function resetZoom() {
  scale.value = 1;
}
</script>

<style scoped>
/* Add any custom styles here */
</style>