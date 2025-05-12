<template>
  <div class="container mx-auto px-4 space-y-12">
    <h1 class="text-4xl font-bold mb-8 text-center">Veille Technologique</h1>
    <p class="text-center text-sm text-muted-foreground mb-10">
      Les flux RSS de cette page sont agrégés avec <a href="https://github.com/rbren/rss-parser#readme" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">rss-parser</a>.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
      <div class="bg-card rounded-lg shadow-sm p-6 border border-border">
        <h2 class="text-2xl font-semibold mb-4">Grands Modèles de Langage (LLMs)</h2>
        <p class="text-muted-foreground mb-4">
          Les Grands Modèles de Langage (LLMs) représentent une avancée majeure dans le domaine de l'intelligence artificielle, 
          capables de comprendre et générer du texte d'une manière qui se rapproche de plus en plus des capacités humaines.
        </p>
        <div class="space-y-4">
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Dernières Avancées</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>GPT-4o: Multimodalité et performances améliorées</li>
              <li>Claude 3.5 Sonnet: Raisonnement avancé et précision</li>
              <li>Llama 3: Modèles open-source de Meta</li>
              <li>Mistral Large: Alternative européenne performante</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Applications Pratiques</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Assistants de codage (GitHub Copilot, Claude Code)</li>
              <li>Génération de contenu et rédaction assistée</li>
              <li>Analyse de données et extraction d'informations</li>
              <li>Traduction et localisation automatisées</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-card rounded-lg shadow-sm p-6 border border-border">
        <h2 class="text-2xl font-semibold mb-4">Nuxt.js</h2>
        <p class="text-muted-foreground mb-4">
          Nuxt.js est un framework basé sur Vue.js qui simplifie le développement d'applications web modernes. 
          Sa version 3 apporte des améliorations significatives en termes de performance et de développement.
        </p>
        <div class="space-y-4">
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Nouveautés Nuxt 3</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Moteur Nitro pour des performances optimisées</li>
              <li>Support complet de TypeScript</li>
              <li>Composition API et auto-imports</li>
              <li>Hybrid rendering (SSR, SSG, CSR, ISR)</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Écosystème</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Nuxt UI: Bibliothèque de composants</li>
              <li>Nuxt Content: Système de gestion de contenu</li>
              <li>Nuxt Image: Optimisation d'images</li>
              <li>Nuxt DevTools: Outils de développement intégrés</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Featured Articles Section -->
    <h2 class="text-3xl font-bold mb-6 text-center">Articles à la Une</h2>
    <div class="grid grid-cols-1 gap-6 mb-12 max-w-6xl mx-auto">
      <a 
        v-for="(article, index) in featuredArticles" 
        :key="index" 
        :href="article.link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors flex flex-col h-full"
      >
        <div class="h-48 bg-muted relative">
          <img 
            v-if="article.imageUrl" 
            :src="article.imageUrl" 
            :alt="article.title" 
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center bg-muted">
            <div class="text-4xl text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
          </div>
          <div class="absolute top-2 right-2 bg-card px-2 py-1 rounded text-xs font-medium">
            {{ article.topic === 'llm' ? 'LLM' : (article.topic === 'nuxt' ? 'Nuxt.js' : 'Veille') }}
          </div>
        </div>
        
        <div class="p-4 flex-1 flex flex-col">
          <div class="flex items-center gap-2 mb-2">
            <span v-if="article.pubDate" class="text-xs text-muted-foreground">{{ formatDate(article.pubDate) }}</span>
            <span v-if="article.source" class="text-xs px-2 py-0.5 bg-muted rounded-full">{{ article.source }}</span>
          </div>
          
          <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ article.title }}</h3>
          
          <p v-if="article.contentSnippet" class="text-sm text-muted-foreground mb-4 line-clamp-3">
            {{ article.contentSnippet }}
          </p>
          
          <div class="mt-auto pt-2 flex items-center text-sm text-primary font-medium">
            Lire l'article
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </div>
      </a>
    </div>
    <!-- End of Featured Articles Section -->

    <!-- Articles Section -->
    <h2 class="text-3xl font-bold mb-6 text-center">Articles Récents</h2>
    
    <div class="mb-6 flex flex-wrap gap-3 justify-center">
      <button 
        @click="activeFilter = 'all'" 
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
        :class="activeFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
      >
        <span>Tous</span>
        <span class="inline-flex items-center justify-center rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-medium text-primary-foreground" :class="activeFilter !== 'all' ? 'bg-primary/20 text-primary' : ''">
          {{ articles.length }}
        </span>
      </button>
      <button 
        @click="activeFilter = 'llm'" 
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
        :class="activeFilter === 'llm' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
      >
        <span>LLMs</span>
        <span class="inline-flex items-center justify-center rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-medium text-primary-foreground" :class="activeFilter !== 'llm' ? 'bg-primary/20 text-primary' : ''">
          {{ articles.filter(a => a.topic === 'llm').length }}
        </span>
      </button>
      <button 
        @click="activeFilter = 'nuxt'" 
        class="px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
        :class="activeFilter === 'nuxt' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
      >
        <span>Nuxt.js</span>
        <span class="inline-flex items-center justify-center rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs font-medium text-primary-foreground" :class="activeFilter !== 'nuxt' ? 'bg-primary/20 text-primary' : ''">
          {{ articles.filter(a => a.topic === 'nuxt').length }}
        </span>
      </button>
    </div>
    
    <div v-if="loading" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
    
    <div v-else-if="error" class="bg-destructive/10 text-destructive p-4 rounded-md mb-8 max-w-6xl mx-auto">
      {{ error }}
    </div>
    
    <div v-else-if="filteredArticles.length === 0" class="text-center py-12 text-muted-foreground">
      Aucun article trouvé pour cette catégorie.
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
      <a 
        v-for="article in filteredArticles" 
        :key="article.link" 
        :href="article.link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors flex flex-col h-full"
      >
        <div class="h-48 bg-muted relative">
          <img 
            v-if="article.imageUrl" 
            :src="article.imageUrl" 
            :alt="article.title" 
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center bg-muted">
            <div class="text-4xl text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
          </div>
          <div class="absolute top-2 right-2 bg-card px-2 py-1 rounded text-xs font-medium">
            {{ article.topic === 'llm' ? 'LLM' : 'Nuxt.js' }}
          </div>
        </div>
        
        <div class="p-4 flex-1 flex flex-col">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs text-muted-foreground">{{ formatDate(article.pubDate) }}</span>
            <span class="text-xs px-2 py-0.5 bg-muted rounded-full">{{ article.source }}</span>
          </div>
          
          <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ article.title }}</h3>
          
          <p v-if="article.contentSnippet" class="text-sm text-muted-foreground mb-4 line-clamp-3">
            {{ article.contentSnippet }}
          </p>
          
          <div class="mt-auto pt-2 flex items-center text-sm text-primary font-medium">
            Lire l'article
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </div>
      </a>
    </div>

    <!-- Flink Agency Card -->
    <div class="max-w-6xl mx-auto mt-16 mb-16">
      <div class="bg-card rounded-lg shadow-xl p-8 border border-border hover:border-primary/80 transition-all duration-300 ease-in-out flex flex-col sm:flex-row items-center gap-8">
        <!-- Content -->
        <div class="text-center sm:text-left flex-grow">
          <h3 class="text-2xl font-semibold text-foreground mb-2">Flink Agency</h3>
          <p class="text-muted-foreground mb-5">
            Nous créons des sites web modernes et performants, adaptés à vos besoins : sites vitrines, e-commerces et portfolios professionnels.
          </p>
          <a 
            href="https://flink-agency.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Visiter Flink Agency
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- End Flink Agency Card -->
  </div>
</template>

<script setup>
// Import the composable
import { useArticles } from '~/composables/useArticles';

// Set up page metadata
useHead({
  title: 'Veille Technologique - LLMs et Nuxt.js',
  meta: [
    { name: 'description', content: 'Veille technologique sur les Grands Modèles de Langage (LLMs) et Nuxt.js, leurs avancées récentes et leur intégration.' }
  ]
});

// Get articles using the composable
const { articles, loading, error, fetchArticles, formatDate } = useArticles();

// Set up reactive filter
const activeFilter = ref('all');

const featuredArticleLink = 'https://medium.com/@manucet439/model-context-protocol-empowering-llms-through-contextual-standardization-8ac47876a4fa';
const placeholderTitle = 'Model Context Protocol — Empowering LLMs Through Contextual Standardization';
const placeholderSnippet = 'Model Context Protocol (MCP), introduced by Anthropic, has gradually gained traction and is now becoming a buzzword in the Large Language Model (LLM) ecosystem. As the demand for smarter, more adaptable AI grows, so does the need for a standardized way to feed tools, memory, and external data into these models.';

const featuredArticles = ref([
  {
    title: placeholderTitle,
    link: featuredArticleLink,
    imageUrl: '', // You can add an URL d'image ici
    topic: 'llm', 
    pubDate: new Date().toISOString().split('T')[0], // Using today's date as a placeholder
    source: 'Medium',
    contentSnippet: placeholderSnippet
  }
]);

// Computed property for filtered articles
const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') {
    return articles.value;
  }
  return articles.value.filter(article => article.topic === activeFilter.value);
});

// Watch for filter changes to update articles
watch(activeFilter, (newFilter) => {
  fetchArticles(newFilter);
});

// Fetch articles when component is mounted
onMounted(() => {
  fetchArticles();
});
</script> 