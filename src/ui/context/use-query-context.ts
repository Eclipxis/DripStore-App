import { Category } from "@/entities/category"
import { Dispatch, SetStateAction, useState } from "react";

export interface IQueryContext {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  selectedCategories: Category[]
  isSelectedCategory: (category: Category) => boolean;
  selectCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
}

export const useQueryContext = (): IQueryContext => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>('');

  const isSelectedCategory = (category: Category) => {
    return !!selectedCategories.find(_category => _category === category);
  }

  const selectCategory = (category: Category) => {
    setSelectedCategories(old => [...old, category]);
  }

  const removeCategory = (category: Category) => {
    setSelectedCategories(old => old.filter(info => info !== category));
  }

  return {
    search,
    setSearch,
    selectedCategories,
    isSelectedCategory,
    selectCategory,
    removeCategory
  }
}