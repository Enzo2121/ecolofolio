<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4 mb-8">
      <h1 class="text-4xl font-bold tracking-tighter">Projets de Stage</h1>
      <p class="text-xl text-muted-foreground">
        Découvrez les projets que j'ai réalisés durant mes stages
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <div v-for="project in projects" :key="project.id" class="group relative overflow-hidden rounded-lg border">
        <div class="aspect-video w-full overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
                <template v-if="project.teamProject">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </template>
                <template v-else>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </template>
              </svg>
              {{ project.teamProject ? 'Projet d\'Équipe' : 'Projet Individuel' }}
            </span>
            <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ project.date }}
            </span>
          </div>
          <h3 class="text-2xl font-bold">{{ project.title }}</h3>
          <p class="mt-2 line-clamp-3 text-muted-foreground">
            {{ project.description }}
          </p>
          <NuxtLink 
            :to="project.route" 
            class="mt-4 inline-flex items-center text-sm font-medium text-primary"
          >
            Voir les Détails du Projet
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Données des projets
const projects = [
  {
    id: '1',
    title: 'Les Jolies Mancelles',
    teamProject: false,
    date: 'Janvier 2023 - Mars 2023',
    image: '/mancelles.PNG',
    description: 'Durant mon stage chez Les Jolies Mancelles, une entreprise locale de savons et cosmétiques artisanaux, j\'ai été chargé de développer une plateforme e-commerce pour les aider à étendre leur activité en ligne.',
    route: '/LesJoliesMancelles'
  },
  {
    id: '2',
    title: 'Au Coeur Des Artistes',
    teamProject: true,
    date: 'Juin 2023 - Août 2023',
    image: '/coeur.PNG',
    description: 'Durant mon stage chez Au Coeur Des Artistes, une galerie d\'art locale et centre culturel, j\'ai collaboré avec une équipe pour développer une plateforme numérique permettant de présenter les œuvres des artistes et de gérer les événements culturels.',
    route: '/AuCoeurDesArtistes'
  }
];
</script> 