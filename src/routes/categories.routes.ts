import { Router } from 'express';
import Category from '../model/Category';

const categoriesRoutes = Router();

const categoriesArray: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const category = new Category();
  category.createdAt = new Date();
  category.name = name;
  category.description = description;
  categoriesArray.push(category);
  return response.status(201).json({ newCategory: category, array: categoriesArray });
});

export default categoriesRoutes;
