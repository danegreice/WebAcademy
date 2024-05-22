"use client";

import React, { createContext, useContext, useState } from "react";

type IFavoritosContext = {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
};

interface FavoritosProviderProps {
  children: React.ReactNode;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => {
  const favoritosContext = useContext(FavoritosContext);

  return favoritosContext;
};

export const useProdutosFavoritos = () => {
  const { favoritos } = useContext(FavoritosContext);

  return favoritos;
};

export const useVerificaProdutoFavorito = (id: string) => {
  const { favoritos } = useContext(FavoritosContext);

  return favoritos.some((item) => item.id === id);
};

export default FavoritosProvider;
