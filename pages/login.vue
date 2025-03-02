<template>
  <div class="max-w-md mx-auto py-8">
    <div class="space-y-4 mb-8">
      <h1 class="text-3xl font-bold tracking-tighter">Connexion</h1>
      <p class="text-muted-foreground">
        Veuillez vous connecter pour accéder au site
      </p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <div class="space-y-2">
        <label for="username" class="text-sm font-medium">Utilisateur</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Nom d'utilisateur"
          required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <div class="space-y-2">
        <label for="password" class="text-sm font-medium">Mot de passe</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="••••••••"
          required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div v-if="error" class="p-3 bg-red-100 text-red-700 rounded-md text-sm">
        {{ error }}
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
        :disabled="isLoading"
      >
        <span v-if="isLoading">Connexion en cours...</span>
        <span v-else>Se connecter</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

const auth = useAuth();
const username = ref('');
const password = ref('');
const isLoading = ref(false);
const error = ref('');

// Redirect if already logged in
if (auth.isAuthenticated.value) {
  navigateTo('/');
}

const handleLogin = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    const result = await auth.login(username.value, password.value);
    
    if (result.success) {
      // Redirect to home page
      navigateTo('/');
    } else {
      error.value = result.error;
    }
  } catch (err) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script> 