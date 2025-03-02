<template>
  <div class="container mx-auto px-4 space-y-12">
    <h1 class="text-4xl font-bold mb-8 text-center">Veille Technologique</h1>
    
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
          
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Défis et Considérations</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Biais et équité dans les modèles</li>
              <li>Consommation énergétique et impact environnemental</li>
              <li>Confidentialité des données et sécurité</li>
              <li>Réglementations (IA Act en Europe, etc.)</li>
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
          
          <div class="border-l-4 border-primary pl-4 py-2">
            <h3 class="font-medium">Cas d'Utilisation</h3>
            <ul class="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Sites vitrines et portfolios</li>
              <li>Applications e-commerce</li>
              <li>Dashboards et interfaces d'administration</li>
              <li>Applications progressives (PWA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <h2 class="text-3xl font-bold mb-6 text-center">Intégration des LLMs dans Nuxt.js</h2>
    
    <div class="bg-card rounded-lg shadow-sm p-6 border border-border mb-8 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Approches d'Intégration</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">API Serverless</span>
                <p class="text-sm text-muted-foreground">Utilisation des fonctions Nitro pour créer des endpoints API qui communiquent avec les services LLM.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">Composables dédiés</span>
                <p class="text-sm text-muted-foreground">Création de composables réutilisables pour interagir avec les APIs d'IA comme OpenAI, Anthropic, etc.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">Génération de contenu</span>
                <p class="text-sm text-muted-foreground">Utilisation des LLMs pour générer du contenu dynamique pour les sites Nuxt.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Bibliothèques Utiles</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">Langchain.js</span>
                <p class="text-sm text-muted-foreground">Framework pour développer des applications basées sur les LLMs avec des chaînes de traitement.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">OpenAI SDK</span>
                <p class="text-sm text-muted-foreground">Bibliothèque officielle pour interagir avec les APIs d'OpenAI.</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="mr-2 mt-1 bg-primary/20 text-primary p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <span class="font-medium">Nuxt AI</span>
                <p class="text-sm text-muted-foreground">Module Nuxt pour intégrer facilement des fonctionnalités d'IA dans vos applications.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
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
    
    <div class="bg-muted p-6 rounded-lg max-w-6xl mx-auto">
      <h3 class="text-xl font-semibold mb-4">Ressources pour Approfondir</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://nuxt.com/docs" target="_blank" class="flex items-center p-3 bg-card rounded-md border border-border hover:border-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          Documentation officielle Nuxt 3
        </a>
        <a href="https://platform.openai.com/docs" target="_blank" class="flex items-center p-3 bg-card rounded-md border border-border hover:border-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          Documentation OpenAI
        </a>
        <a href="https://js.langchain.com/docs/" target="_blank" class="flex items-center p-3 bg-card rounded-md border border-border hover:border-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          Documentation LangChain.js
        </a>
        <a href="https://huggingface.co/docs" target="_blank" class="flex items-center p-3 bg-card rounded-md border border-border hover:border-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          Documentation Hugging Face
        </a>
      </div>
    </div>
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