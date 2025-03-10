import { create } from "zustand";

interface FeaturedProductCategoryStore {
  category: string;
  setCategory: (category: string) => void;
}

const useFeaturedProductCategoryStore = create<FeaturedProductCategoryStore>(
  (set) => ({
    category: "all",
    setCategory: (category: string) => set((state) => ({ ...state, category })),
  }),
);

export default useFeaturedProductCategoryStore;
