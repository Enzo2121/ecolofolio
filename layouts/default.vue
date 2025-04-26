<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- Only show Navbar if authenticated -->
    <Navbar v-if="auth.isAuthenticated.value" />
    
    <main class="flex-grow">
      <!-- Render slot only if authenticated OR on the login page -->
      <!-- Added check for route.path to ensure it's loaded -->
      <slot v-if="route.path && (auth.isAuthenticated.value || route.path === '/login')" />
      <!-- Optional: You can add a loading indicator here -->
      <div v-else class="flex justify-center items-center pt-10">
          <!-- Simple text or a spinner component -->
          Chargement...
      </div>
    </main>
  </div>
</template>

<script setup>
import { watchEffect, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { navigateTo, useRoute } from '#app'; // Import useRoute from #app

const auth = useAuth();
const route = useRoute();

// Check auth state on mount (client-side) and redirect if necessary
onMounted(() => {
  auth.checkAuthState(); // Check localStorage first
  // THEN, perform the redirect logic based on the checked state
  if (!auth.isAuthenticated.value && route.path !== '/login') {
    navigateTo('/login');
  }
});

// Watch for subsequent route changes to protect navigation
watchEffect(() => {
  // Ensure this runs only on the client AFTER the initial mount check
  if (process.client) {
      // If not authenticated and trying to access a protected route, redirect
      if (!auth.isAuthenticated.value && route.path !== '/login') {
          navigateTo('/login');
      }
  }
});
</script>