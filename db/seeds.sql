

-- FOOD Recipe app

-- Food 1 ---
INSERT INTO Recipe (recipe_name, instructions, cuisine) VALUES ('Vegetable Egg Omelette', 'Add veggies to whipped eggs. Add salt and pepper to taste. Cook in a non-stick skillet.', 'Breakfast');
INSERT INTO Ingredient (ingredient_name, category) VALUES('Eggs', 'Proteins'), ('Spinach', 'Vegetables'), ('Bell Peppers', 'Vegetables'), ('Onions', 'Vegetables'), ('Salt', 'Spices'), ('Pepper', 'Spices');

-- Food 2 --
INSERT INTO Recipe (recipe_name, instructions, cuisine) VALUES ('Zucchini Pasta', 'Cut zucchini into thin strips. Cook in boiling water for one minute. Add cooked zucchini and pesto to a non-stick skillet. Cook on medium heat.', 'Lunch');
INSERT INTO Ingredient (ingredient_name, Category) VALUES('Zucchini', 'Vegetables'), ('Pesto', 'Sauces');

INSERT INTO Favorites (item) VALUES ('');

-- View Ingredients and recipes and favorites in the food database --
SELECT * FROM Ingredient
SELECT * FROM Recipe
SELECT * FROM Favorites