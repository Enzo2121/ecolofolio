import { useState } from '#app'
import { navigateTo } from '#app'

// Define simple, hardcoded credentials (replace with environment variables for better practice)
const VALID_USERNAME = 'userPortfolio' // Replace with your desired username
const VALID_PASSWORD = 'EcoloBan@ne42?' // Replace with your desired strong password

export const useAuth = () => {
  // Use useState for reactive state shared across the app
  const isAuthenticated = useState<boolean>('isAuthenticated', () => false)

  // Function to check auth state from localStorage (client-side only)
  const checkAuthState = () => {
    // Use import.meta.client instead of process.client
    if (import.meta.client) {
      const storedAuth = localStorage.getItem('isAuthenticated')
      isAuthenticated.value = storedAuth === 'true'
    }
  }

  // Login function - Add types to parameters
  const login = async (username: string, password: string) => {
    // Simulate an API call delay (optional)
    // await new Promise(resolve => setTimeout(resolve, 500));

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      isAuthenticated.value = true
      // Use import.meta.client instead of process.client
      if (import.meta.client) {
        localStorage.setItem('isAuthenticated', 'true')
      }
      return { success: true }
    } else {
      isAuthenticated.value = false
      // Use import.meta.client instead of process.client
      if (import.meta.client) {
        localStorage.removeItem('isAuthenticated')
      }
      return { success: false, error: 'Identifiants incorrects.' }
    }
  }

  // Logout function
  const logout = () => {
    isAuthenticated.value = false
    // Use import.meta.client instead of process.client
    if (import.meta.client) {
      localStorage.removeItem('isAuthenticated')
    }
    // Redirect to login page after logout
    navigateTo('/login')
  }

  // Expose state and methods
  return {
    isAuthenticated,
    login,
    logout,
    checkAuthState,
  }
}
