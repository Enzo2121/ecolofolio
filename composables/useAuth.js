import { ref, readonly } from 'vue';

// State that will be shared across the app
const user = ref(null);
const isAuthenticated = ref(false);
const isLoading = ref(false);

// Identifiants de connexion personnalisés
// Vous pouvez modifier ces valeurs selon vos préférences
const CUSTOM_USERNAME = 'monportfolio';
const CUSTOM_PASSWORD = 'secret123';

// Initialize auth state from localStorage if available (client-side only)
export const useAuth = () => {
  // Initialize auth state from localStorage on client-side
  if (process.client) {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');
    
    if (storedAuth === 'true' && storedUser) {
      isAuthenticated.value = true;
      try {
        user.value = JSON.parse(storedUser);
      } catch (e) {
        console.error('Failed to parse stored user data', e);
      }
    }
  }

  // Login function
  const login = async (username, password) => {
    isLoading.value = true;
    
    try {
      // Vérification des identifiants personnalisés
      if (username === CUSTOM_USERNAME && password === CUSTOM_PASSWORD) {
        const userData = { username };
        
        // Update state
        user.value = userData;
        isAuthenticated.value = true;
        
        // Store in localStorage
        if (process.client) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('user', JSON.stringify(userData));
        }
        
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Nom d\'utilisateur ou mot de passe incorrect' 
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: 'Une erreur est survenue. Veuillez réessayer.' 
      };
    } finally {
      isLoading.value = false;
    }
  };

  // Logout function
  const logout = () => {
    // Clear state
    user.value = null;
    isAuthenticated.value = false;
    
    // Clear localStorage
    if (process.client) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    }
  };

  // Check if user is authenticated
  const checkAuth = () => {
    return isAuthenticated.value;
  };

  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    isLoading: readonly(isLoading),
    login,
    logout,
    checkAuth
  };
}; 