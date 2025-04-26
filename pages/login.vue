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
import { ref, onMounted } from 'vue';
// Import the new composable
import { useAuth } from '~/composables/useAuth'; 
import { navigateTo } from '#app';

const auth = useAuth();
const username = ref('');
const password = ref('');
const isLoading = ref(false);
const error = ref('');

// Check auth state on component mount (client-side)
onMounted(() => {
  auth.checkAuthState();
  // Redirect if already logged in after checking state
  if (auth.isAuthenticated.value) {
    navigateTo('/');
  }
});

const handleLogin = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    // Use the login function from the composable
    const result = await auth.login(username.value, password.value);
    
    if (result.success) {
      // Redirect to home page upon successful login
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