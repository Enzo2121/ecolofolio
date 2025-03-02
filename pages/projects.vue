<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4 mb-8">
      <h1 class="text-4xl font-bold tracking-tighter">Mes Projets</h1>
      <p class="text-xl text-muted-foreground">
        Découvrez les projets personnels et académiques que j'ai réalisés
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              {{ project.category }}
            </span>
            <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {{ project.date }}
            </span>
          </div>
          <h3 class="text-2xl font-bold">{{ project.title }}</h3>
          <p class="mt-2 line-clamp-3 text-muted-foreground">
            {{ project.description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech" class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {{ tech }}
            </span>
          </div>
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
    title: 'Application de Gestion de Tâches',
    category: 'Web App',
    date: '2023',
    image: '/quiconces.png',
    description: 'Une application web de gestion de tâches avec des fonctionnalités de création, modification et suppression de tâches, ainsi que des catégories et des priorités.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    route: '/AP1'
  },
  {
    id: '2',
    title: 'Site Web E-commerce',
    category: 'E-commerce',
    date: '2022',
    image: '/champbio.png',
    description: 'Un site web e-commerce complet avec un catalogue de produits, un panier d\'achat, un système de paiement et un tableau de bord administrateur.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    route: '/AP2'
  },
  {
    id: '3',
    title: 'Application Mobile Fitness',
    category: 'Mobile App',
    date: '2022 - Présent',
    image: '/cars.png',
    description: 'Une application mobile de suivi fitness permettant aux utilisateurs de suivre leurs entraînements, leur progression et leurs objectifs de remise en forme.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    route: '/AP3'
  },
  {
    id: '4',
    title: 'Blog Personnel',
    category: 'Web',
    date: '2021',
    image: '/wordpress.png',
    description: 'Un blog personnel où je partage mes connaissances et mes expériences dans le domaine du développement web et de la technologie.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    route: '/AP4'
  },
  {
    id: '5',
    title: 'Portfolio Personnel',
    category: 'Web',
    date: '2023',
    image: '/portfolio.png',
    description: 'Mon portfolio personnel présentant mes projets, compétences et expériences professionnelles.',
    technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
    route: '/AP5'
  }
];
</script> 