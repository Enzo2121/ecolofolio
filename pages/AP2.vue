<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projet</div>
      <h1 class="text-4xl font-bold tracking-tighter">Site Quiconces</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Framer</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Figma</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Web Design</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/quiconces.png"
        alt="Site Portfolio"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Ce projet, réalisé lors d'un atelier professionnel au cours de ma première année de BTS SIO, avait pour but de recréer un site web à l'aide du CMS de notre choix. Le site a été développé avec le CMS Framer.</p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Outils</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Framer</h3>
          </div>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Figma</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences Travaillées</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4" style="border: 1px solid rgba(0, 0, 0, 0.5);">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Gérer le patrimoine informatique</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Recenser et identifier les ressources numériques
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Répondre aux incidents et aux demandes d'assistance et d'évolution</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Traiter des demandes concernant les applications
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Développer la présence en ligne de l'organisation</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Participer à l'évolution d'un site Web exploitant les données de l'organisation.
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
            Analyser les objectifs et les modalités d'organisation d'un projet
          </p>
        </div>
      </div>
    </div>

    <!-- Mode de Travail -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Mode de Travail</h2>
      <div class="text-muted-foreground">
        <p>Méthode Agile</p>
      </div>
    </div>

    <!-- CMS Comparison Table -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Tableau Comparatif des CMS</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-muted">
              <th class="border p-2 text-left">Critères</th>
              <th class="border p-2 text-left">Framer</th>
              <th class="border p-2 text-left">WordPress</th>
              <th class="border p-2 text-left">Webflow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-medium">Facilité d'utilisation</td>
              <td class="border p-2">Très intuitif, idéal pour designers</td>
              <td class="border p-2">Modéré, nécessite des plugins et une certaine configuration</td>
              <td class="border p-2">Modéré, courbe d'apprentissage pour les non-designers</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Personnalisation</td>
              <td class="border p-2">Haute flexibilité visuelle</td>
              <td class="border p-2">Très haute avec thèmes et plugins, peut devenir complexe</td>
              <td class="border p-2">Très haute, contrôle granulaire du design</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Performances</td>
              <td class="border p-2">Optimisées pour la vitesse, hébergement inclus</td>
              <td class="border p-2">Dépend de l'hébergement, des thèmes et des plugins</td>
              <td class="border p-2">Bonnes, hébergement inclus et optimisé</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Apprentissage</td>
              <td class="border p-2">Rapide pour les designers, interface visuelle</td>
              <td class="border p-2">Intermédiaire, dépend des connaissances techniques et des plugins utilisés</td>
              <td class="border p-2">Long, surtout pour maîtriser toutes les fonctionnalités de design</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Fonctionnalités SEO</td>
              <td class="border p-2">Basiques intégrées</td>
              <td class="border p-2">Excellentes avec plugins (ex: Yoast SEO)</td>
              <td class="border p-2">Bonnes, avec des options de configuration</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Capacités de Blogging</td>
              <td class="border p-2">CMS riche et optimisé pour le blogging</td>
              <td class="border p-2">Excellent, conçu pour le blogging et le contenu</td>
              <td class="border p-2">Robuste, bon pour le contenu dynamique</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>Le site portfolio a été créé en utilisant Framer, un outil de conception et de développement web moderne :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Interface glisser-déposer de Framer pour la conception visuelle du site</li>
          <li>Composants préconstruits de Framer pour accélérer le développement</li>
          <li>Animations et transitions fluides intégrées à Framer</li>
          <li>Responsive design adapté à tous les appareils</li>
          <li>Hébergement automatique via Framer Sites</li>
          <li>Intégration avec Figma pour la conception préliminaire</li>
          <li>Optimisation SEO de base pour améliorer la visibilité du site</li>
        </ul>
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
          <h3 class="text-lg font-semibold">Visiter le Site</h3>
          <p class="text-center text-sm text-muted-foreground">
            Découvrez la démo en direct du site portfolio.
          </p>
          <a href="https://milancorp.framer.website/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Voir la Démo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
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
        to="/AP1" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/AP3" 
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

const pdfUrl = '/docs/AP2-documentation.pdf';
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