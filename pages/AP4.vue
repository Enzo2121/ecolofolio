<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet</div>
      <h1 class="text-4xl font-bold tracking-tighter">Site Web AMAP</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">PHP</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Bootstrap</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">PhpMyAdmin</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/champbio.png"
        alt="Site Web AMAP"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Ce projet, réalisé dans le cadre de mon BTS SIO, consiste en un site web pour une AMAP, permettant aux utilisateurs de s'inscrire, de choisir leur panier, et de gérer leurs adhésions. Développé avec PHP, Bootstrap et PhpMyAdmin, il facilite la gestion des paniers et des adhérents.</p>
        <p class="mt-4">L'application a été conçue en suivant la méthode Agile, permettant une adaptation rapide aux besoins des utilisateurs et une livraison continue de fonctionnalités.</p>
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
            <h3 class="font-semibold">Gestion des Adhésions</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Système complet pour gérer les inscriptions et renouvellements d'adhésions à l'AMAP.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Sélection de Paniers</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Interface intuitive permettant aux adhérents de choisir et personnaliser leurs paniers de produits.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Espace Administrateur</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Tableau de bord pour les gestionnaires de l'AMAP permettant de suivre les adhésions et les commandes.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Interface Responsive</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Design adaptatif avec Bootstrap pour une expérience utilisateur optimale sur tous les appareils.
          </p>
        </div>
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences Acquises</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Développer une solution applicative</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Conception et développement d'une application web complète pour la gestion d'une AMAP avec PHP et MySQL.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Gérer le patrimoine informatique</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Gestion des ressources numériques et mise en place d'une base de données optimisée pour les besoins spécifiques de l'AMAP.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Mettre à disposition un service</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Mise en œuvre d'une solution technique répondant aux besoins des utilisateurs avec une interface intuitive et responsive.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Travailler en mode projet</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Participation à un projet informatique en équipe en utilisant la méthode Agile pour une gestion efficace des tâches et des délais.
          </p>
        </div>
      </div>
    </div>

    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>Le site web AMAP a été développé en utilisant les technologies et méthodologies suivantes :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>PHP pour la logique côté serveur</li>
          <li>Bootstrap pour le design responsive</li>
          <li>MySQL pour la base de données</li>
          <li>PhpMyAdmin pour la gestion de la base de données</li>
          <li>Méthode Agile pour la gestion de projet</li>
          <li>Git pour le contrôle de version</li>
          <li>XAMPP comme environnement de développement local</li>
        </ul>
      </div>
    </div>

    <!-- Backlog & User Stories -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Backlog & User Stories</h2>
      <div class="text-muted-foreground mb-4">
        <p>Consultez le backlog et les user stories détaillés de ce projet, illustrant les fonctionnalités planifiées et les récits utilisateurs.</p>
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-4 mb-6">
        <button @click="zoomIn" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom +
        </button>
        <button @click="zoomOut" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom -
        </button>
        <button @click="resetZoom" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path><path d="M14 8H8v6h6"></path></svg>
          Réinitialiser
        </button>
        <a :href="pdfUrl" download class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Télécharger le Backlog
        </a>
      </div>
      
      <div class="w-full max-w-4xl border rounded-lg shadow-sm overflow-y-auto h-[75vh]" :style="{ transform: `scale(${scale})`, transformOrigin: 'top center' }">
        <ClientOnly>
          <div v-if="isClient">
            <VuePdfEmbed :source="pdfUrl" :width="width" />
          </div>
          <div v-else class="flex items-center justify-center h-[600px] bg-muted">
            <p>Chargement de la visionneuse PDF...</p>
          </div>
        </ClientOnly>
      </div>
    </div>

    <!-- Project Link -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Lien du Projet</h2>
      <div class="rounded-lg border p-6">
        <div class="flex flex-col items-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-primary">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <h3 class="text-lg font-semibold">Accéder au Site AMAP</h3>
          <p class="text-center text-sm text-muted-foreground">
            Explorez la démo en direct du site web de l'AMAP.
          </p>
          <a href="https://example.com/amap-site" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Voir la Démo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6">
      <NuxtLink 
        to="/AP3" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/AP5" 
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

const pdfUrl = '/AMAP_AP_Backlogs.pdf';
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