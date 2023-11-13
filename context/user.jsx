"use client";

import { createContext, useContext, useState } from 'react';

// Criando o user context
const UserContext = createContext();

// Fazendo a função que envolverá todo o aplicativo usando o Context Provider
export default function AppStore({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Artista',
    token: '3DJ39#DFLLDF58$LKDFO#O3N4OO',
  });

  // Função para alterar o usuário
  const changeUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Faça useUserContext Hook para usar facilmente nosso contexto em todo o aplicativo
export function useUserContext() {
  return useContext(UserContext);
}
