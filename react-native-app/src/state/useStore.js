import create from 'zustand';

const useStore = create((set) => ({
  authToken: null, // Inicializa el token como null
  setAuthToken: (token) => set({ authToken: token }), // Define la función para actualizar el token
}));

export default useStore;
