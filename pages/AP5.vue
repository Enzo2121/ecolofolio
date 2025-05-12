<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet BTS SIO</div>
      <h1 class="text-4xl font-bold tracking-tighter">Application Client Lourd AMAP-BIO</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">C#</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Visual Studio 2015</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">MySQL</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">PhpMyAdmin</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/am2.png"
        alt="Application Client Lourd AMAP-BIO"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Ce projet est une application client lourd développée en C# qui complète le site web AMAP-BIO (AP4). L'objectif principal était de créer une interface de gestion interne pour les administrateurs de l'AMAP, leur permettant de gérer efficacement les adhésions, les paniers et les producteurs sans passer par l'interface web.</p>
        <p class="mt-4">L'application a été développée avec Microsoft Visual Studio 2015 et se connecte à la même base de données MySQL que le site web, offrant ainsi une solution complète et intégrée. Cette approche permet une gestion plus efficace et plus rapide des opérations quotidiennes de l'AMAP, tout en maintenant la cohérence des données entre les deux interfaces.</p>
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
            <h3 class="font-semibold">Authentification</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Système de connexion sécurisé permettant aux administrateurs d'accéder à l'interface de gestion de l'AMAP.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Gestion des Prix</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Interface simple permettant de modifier les prix des différents paniers proposés par l'AMAP.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Gestion des Produits</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Fonctionnalités d'ajout, de modification et de suppression des produits disponibles dans les paniers de l'AMAP.
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
            <h3 class="font-semibold">Répondre aux incidents et aux demandes d’assistance et d’évolution</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Conception et développement d'une application client lourd en C# répondant aux besoins spécifiques des gestionnaires de l'AMAP.
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
            Exploitation des ressources numériques existantes et mise en place d'une solution intégrée avec la base de données MySQL de l'AMAP.
          </p>
        </div>

      </div>
    </div>



    <!-- Navigation -->
    <div class="flex justify-between pt-6">
      <NuxtLink 
        to="/AP4" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/projects" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        Tous les Projets
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

const pdfUrl = '/docs/AP5-documentation.pdf';
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