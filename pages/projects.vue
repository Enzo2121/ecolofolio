<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4 mb-8">
      <h1 class="text-4xl font-bold tracking-tighter">Mes Projets</h1>
      <p class="text-xl text-muted-foreground">
        Découvrez les projets académiques que j'ai réalisés
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
// Données des projets mises à jour
const projects = [
  {
    id: '1',
    title: 'Site WordPress - SCIS', // AP1
    category: 'site web',
    date: '2023',
    image: '/wordpress.png',
    description: 'Introduction au développement web avec WordPress et phpMyAdmin, incluant la rédaction de documentation technique.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    route: '/AP1'
  },
  {
    id: '2',
    title: 'Site Quiconces', // AP2
    category: 'site web',
    date: '2023', // Assuming date based on AP1, adjust if needed
    image: '/quiconces.png',
    description: 'Création d\'un site web en utilisant le CMS Framer, suite à un atelier professionnel.',
    technologies: ['Framer', 'Figma', 'Web Design'],
    route: '/AP2'
  },
  {
    id: '3',
    title: 'AP Personnages (Cars)', // AP3
    category: 'site web',
    date: '2024',
    image: '/cars.png',
    description: 'Site web dynamique en PHP avec base de données SQL, incluant CRUD et authentification.',
    technologies: ['PHP', 'SQL', 'Bootstrap', 'HTML'],
    route: '/AP3'
  },
  {
    id: '4',
    title: 'Site Web AMAP (ChampBio)', // AP4
    category: 'site web',
    date: '2024', // Assuming date based on AP3, adjust if needed
    image: '/champbio.png',
    description: 'Site web pour une AMAP permettant la gestion des adhésions et la sélection de paniers.',
    technologies: ['PHP', 'Tailwind', 'PhpMyAdmin', 'MySQL'],
    route: '/AP4'
  },
  {
    id: '5',
    title: 'Application Client Lourd AMAP-BIO', // AP5
    category: 'application lourde',
    date: '2025',
    image: '/am2.png', // Using one of the screenshots from AP5
    description: 'Application C# pour la gestion interne (adhésions, paniers, prix) de l\'AMAP-BIO, connectée à la même base de données que le site web.',
    technologies: ['C#', 'Visual Studio', 'MySQL', 'PhpMyAdmin'],
    route: '/AP5'
  }
];
</script>