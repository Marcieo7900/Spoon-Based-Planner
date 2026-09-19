/*
 * Spoon-Based Meal & Movement Planner
 * Copyright (C) 2024 Marceshia O'Neill / Marcevolution
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Attribution required: Credit Marceshia O'Neill and/or Marcevolution
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

// ============================================
// FULLY TAGGED MEAL DATABASE
// ============================================
const meals = {
    breakfast: {
        1: [
            { name: "Instant oatmeal packet + banana", time: "2 min", dietary: ["vegetarian", "vegan", "dairy-free", "low-sodium", "diabetic", "low-calorie", "mediterranean", "dash", "low-fat"], notes: "Just add hot water, ~150 cal" },
            { name: "Pre-made protein shake (unsweetened)", time: "1 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "diabetic", "low-calorie", "low-fat", "dash"], notes: "Low sugar, ~100 cal" },
            { name: "Toast with peanut butter", time: "3 min", dietary: ["vegetarian", "vegan", "dairy-free", "mediterranean"], notes: "Use GF bread if needed, ~200 cal" },
            { name: "Greek yogurt cup (plain)", time: "1 min", dietary: ["vegetarian", "gluten-free", "mediterranean", "dash", "low-sodium", "diabetic", "low-carb"], notes: "High protein, ~100 cal" },
            { name: "Hard-boiled egg", time: "1 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-calorie", "low-sodium", "dash"], notes: "Make ahead, ~70 cal" },
            { name: "Cottage cheese (1/2 cup, low-fat)", time: "1 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "diabetic", "low-calorie", "low-fat", "dash"], notes: "High protein, ~90 cal" },
            { name: "Apple slices", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "low-calorie", "mediterranean", "dash", "low-fat"], notes: "~60 cal, nature's candy" },
            { name: "Almond butter packet (1 tbsp)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto"], notes: "~95 cal, healthy fat" }
        ],
        2: [
            { name: "Scrambled eggs (microwave, 2 eggs)", time: "3 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-sodium", "dash"], notes: "Whisk eggs, ~140 cal" },
            { name: "Overnight oats (1/2 cup dry)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "diabetic", "mediterranean", "dash", "low-fat"], notes: "Made night before, ~150 cal" },
            { name: "Avocado half with salt", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "mediterranean"], notes: "Healthy fats, ~120 cal" },
            { name: "Green smoothie (spinach, banana, almond milk)", time: "5 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "mediterranean", "dash", "low-fat", "diabetic", "low-calorie"], notes: "~120 cal, nutrient dense" },
            { name: "High-fiber cereal with unsweetened almond milk", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-fat", "diabetic", "low-calorie", "mediterranean", "dash"], notes: "~130 cal, heart healthy" },
            { name: "Almond butter on rice cakes (2)", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "mediterranean", "low-sodium"], notes: "~180 cal, crunchy" },
            { name: "Chia pudding (pre-made, 1/2 cup)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto"], notes: "~140 cal, omega-3s" },
            { name: "Turkey roll-ups (3 slices)", time: "3 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-calorie", "low-fat", "dash"], notes: "~90 cal, high protein" }
        ],
        3: [
            { name: "Avocado toast with egg", time: "10 min", dietary: ["vegetarian", "mediterranean", "low-sodium"], notes: "~250 cal, balanced" },
            { name: "Greek yogurt with berries and walnuts", time: "5 min", dietary: ["vegetarian", "gluten-free", "mediterranean", "dash", "low-sodium", "diabetic", "low-carb"], notes: "~200 cal, antioxidant rich" },
            { name: "Veggie omelet (2 eggs + veggies)", time: "12 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-calorie", "dash"], notes: "~180 cal, fiber + protein" },
            { name: "Chia seed pudding with berries", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "low-sodium"], notes: "~160 cal, make night before" },
            { name: "Whole grain toast with smoked salmon", time: "5 min", dietary: ["dairy-free", "mediterranean", "dash", "low-sodium", "paleo"], notes: "~220 cal, omega-3s" },
            { name: "Protein pancakes (low-carb mix, 2 small)", time: "15 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "diabetic"], notes: "~180 cal, satisfying" },
            { name: "Breakfast burrito (eggs, salsa, small tortilla)", time: "10 min", dietary: ["vegetarian", "low-sodium"], notes: "~280 cal, flavorful" },
            { name: "Shakshuka (eggs in tomato sauce, 2 eggs)", time: "25 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "mediterranean", "paleo", "low-carb", "dash"], notes: "~200 cal, impressive!" }
        ],
        4: [
            { name: "Veggie omelet with whole grain toast", time: "20 min", dietary: ["vegetarian", "mediterranean", "dash", "low-sodium"], notes: "~320 cal, complete meal" },
            { name: "Breakfast burrito bowl (eggs, beans, salsa)", time: "18 min", dietary: ["vegetarian", "gluten-free", "mediterranean", "low-fat", "dash"], notes: "~350 cal, no tortilla" },
            { name: "Shakshuka with whole grain bread (1 slice)", time: "25 min", dietary: ["vegetarian", "dairy-free", "mediterranean", "paleo", "low-carb", "dash"], notes: "~280 cal, dip bread in sauce" },
            { name: "Keto breakfast bowl (eggs, avocado, greens)", time: "15 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~350 cal, high fat" },
            { name: "Paleo breakfast hash (sweet potato, veggies)", time: "25 min", dietary: ["gluten-free", "dairy-free", "paleo", "low-sodium"], notes: "~320 cal, nutrient dense" },
            { name: "Mediterranean frittata (vegetables, feta)", time: "30 min", dietary: ["vegetarian", "gluten-free", "mediterranean", "dash", "low-carb"], notes: "~280 cal, make ahead" },
            { name: "French toast with berries (2 slices, light)", time: "20 min", dietary: ["vegetarian", "low-fat"], notes: "~300 cal, weekend treat" },
            { name: "Breakfast quesadilla (eggs, veggies, cheese)", time: "15 min", dietary: ["vegetarian", "low-sodium"], notes: "~340 cal, whole wheat" }
        ],
        5: [
            { name: "Full Mediterranean breakfast (eggs, olives, fruit, bread)", time: "35 min", dietary: ["vegetarian", "mediterranean", "dash", "low-sodium"], notes: "~450 cal, feast" },
            { name: "Keto cloud bread eggs Benedict", time: "40 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~380 cal, fancy" },
            { name: "Paleo sweet potato hash with eggs", time: "35 min", dietary: ["gluten-free", "dairy-free", "paleo", "low-sodium"], notes: "~420 cal, hearty" },
            { name: "DASH diet veggie frittata (lots of veggies)", time: "35 min", dietary: ["vegetarian", "gluten-free", "low-sodium", "dash", "low-fat"], notes: "~250 cal, heart healthy" },
            { name: "Homemade granola with Greek yogurt (1/2 cup)", time: "45 min", dietary: ["vegetarian", "mediterranean", "low-sodium"], notes: "~320 cal, control sugar" },
            { name: "Low-carb almond flour pancakes (3 small)", time: "30 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~340 cal, fluffy" },
            { name: "Eggs Benedict with hollandaise (1 egg)", time: "40 min", dietary: ["vegetarian"], notes: "~380 cal, indulgent" },
            { name: "Full English breakfast (eggs, bacon, tomatoes, mushrooms)", time: "45 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~500 cal, weekend special" }
        ]
    },
    lunch: {
        1: [
            { name: "Vegetable soup (1 cup, low sodium)", time: "3 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "diabetic", "low-calorie", "mediterranean", "dash", "low-fat"], notes: "~80 cal, warm and filling" },
            { name: "Large garden salad with lemon juice (no oil)", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "low-calorie", "mediterranean", "dash", "low-fat", "diabetic"], notes: "~50 cal, unlimited veggies" },
            { name: "Tuna pouch (2.5 oz) with cucumber slices", time: "2 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~100 cal, high protein" },
            { name: "Hummus (3 tbsp) with bell pepper strips", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "mediterranean", "low-sodium", "diabetic"], notes: "~120 cal, satisfying" },
            { name: "Low-fat cottage cheese (1/2 cup) with tomato", time: "2 min", dietary: ["vegetarian", "gluten-free", "low-carb", "low-calorie", "diabetic", "dash", "low-fat"], notes: "~90 cal, refreshing" },
            { name: "Olives (10) and part-skim mozzarella (1 oz)", time: "2 min", dietary: ["vegetarian", "gluten-free", "low-carb", "mediterranean", "keto"], notes: "~150 cal, Mediterranean style" },
            { name: "Turkey breast slices (3 oz) with mustard", time: "2 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "low-fat", "dash", "paleo", "keto"], notes: "~90 cal, lean protein" },
            { name: "Protein shake (unsweetened) with 10 almonds", time: "2 min", dietary: ["vegetarian", "gluten-free", "low-carb", "low-calorie", "diabetic", "dash"], notes: "~150 cal, when you can't cook" }
        ],
        2: [
            { name: "Turkey and veggie wrap (whole wheat, small)", time: "5 min", dietary: ["dairy-free", "low-fat", "dash"], notes: "~250 cal, portable" },
            { name: "Baked potato (small) with tuna (canned in water)", time: "8 min", dietary: ["dairy-free", "low-fat", "diabetic", "mediterranean", "dash", "low-sodium"], notes: "~220 cal, potassium rich" },
            { name: "Chicken salad (3 oz) on mixed greens", time: "3 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "diabetic", "dash"], notes: "~180 cal, no bread" },
            { name: "Lentil soup (1 cup, low sodium)", time: "5 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-fat", "mediterranean", "dash", "low-sodium", "diabetic"], notes: "~180 cal, fiber packed" },
            { name: "Caprese salad (tomato, mozzarella, basil, light)", time: "3 min", dietary: ["vegetarian", "gluten-free", "mediterranean", "low-carb"], notes: "~200 cal, fresh" },
            { name: "Egg salad (2 eggs) lettuce wraps (2)", time: "5 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie"], notes: "~180 cal, light mayo" },
            { name: "Antipasto plate (vegetables, olives, small cheese)", time: "5 min", dietary: ["vegetarian", "gluten-free", "low-carb", "mediterranean", "keto"], notes: "~220 cal, variety" },
            { name: "Smoked salmon (2 oz) with cucumber", time: "3 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~120 cal, omega-3s" }
        ],
        3: [
            { name: "Mediterranean grain bowl (quinoa, veggies, feta)", time: "15 min", dietary: ["vegetarian", "vegan", "gluten-free", "mediterranean", "dash", "low-sodium"], notes: "~320 cal, balanced" },
            { name: "Chicken and vegetable stir-fry (1 cup, light oil)", time: "18 min", dietary: ["gluten-free", "dairy-free", "low-carb", "diabetic", "dash", "low-calorie"], notes: "~280 cal, high volume" },
            { name: "Tuna salad stuffed bell pepper (half)", time: "12 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "mediterranean", "dash"], notes: "~200 cal, no bread needed" },
            { name: "Lentil and vegetable soup (1.5 cups, homemade)", time: "20 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-fat", "mediterranean", "dash", "low-sodium"], notes: "~220 cal, filling" },
            { name: "Greek salad with grilled chicken (4 oz)", time: "10 min", dietary: ["gluten-free", "mediterranean", "dash", "low-carb", "paleo"], notes: "~320 cal, classic" },
            { name: "Zucchini noodles with pesto (1 cup, light)", time: "15 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "mediterranean", "low-calorie"], notes: "~180 cal, pasta alternative" },
            { name: "Turkey burger (4 oz, no bun) with side salad", time: "15 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "dash"], notes: "~250 cal, lean" },
            { name: "Shrimp and avocado salad (light dressing)", time: "12 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~280 cal, healthy fats" }
        ],
        4: [
            { name: "Mediterranean Buddha bowl (tahini, lots of veggies)", time: "25 min", dietary: ["vegetarian", "vegan", "gluten-free", "mediterranean", "dash", "low-sodium"], notes: "~380 cal, colorful" },
            { name: "Grilled chicken (5 oz) with roasted vegetables", time: "30 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto", "diabetic", "dash", "low-calorie"], notes: "~320 cal, simple" },
            { name: "Salmon (5 oz) with Mediterranean salad", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto", "dash"], notes: "~380 cal, omega-3 rich" },
            { name: "Turkey and vegetable soup (2 cups, homemade)", time: "30 min", dietary: ["gluten-free", "dairy-free", "low-fat", "low-sodium", "dash", "low-calorie"], notes: "~280 cal, hearty" },
            { name: "Stuffed bell peppers (quinoa, black beans, vegetables)", time: "35 min", dietary: ["vegetarian", "vegan", "gluten-free", "mediterranean", "dash", "low-fat"], notes: "~320 cal, complete protein" },
            { name: "Cauliflower crust pizza (small, veggie toppings)", time: "30 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~340 cal, satisfying" },
            { name: "Beef and broccoli stir-fry (lean beef, 4 oz)", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto", "dash"], notes: "~320 cal, better than takeout" },
            { name: "Chicken piccata (4 oz) with zucchini noodles", time: "30 min", dietary: ["gluten-free", "low-carb", "keto", "mediterranean"], notes: "~300 cal, lemony" }
        ],
        5: [
            { name: "Homemade Mediterranean feast (hummus, falafel, tabbouleh)", time: "45 min", dietary: ["vegetarian", "vegan", "mediterranean", "dash", "low-sodium"], notes: "~480 cal, shareable" },
            { name: "Grilled fish (6 oz) with olive tapenade", time: "35 min", dietary: ["gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto", "dash"], notes: "~380 cal, authentic" },
            { name: "Paleo chicken curry (coconut milk, vegetables)", time: "40 min", dietary: ["gluten-free", "dairy-free", "paleo", "low-carb", "keto"], notes: "~420 cal, anti-inflammatory" },
            { name: "Keto lasagna (zucchini noodles, meat, cheese)", time: "50 min", dietary: ["gluten-free", "low-carb", "keto"], notes: "~480 cal, comfort food" },
            { name: "DASH diet stuffed cabbage (turkey, brown rice)", time: "60 min", dietary: ["gluten-free", "dairy-free", "low-sodium", "dash", "low-fat"], notes: "~320 cal, traditional" },
            { name: "Homemade sushi bowls (cauliflower rice, fish)", time: "45 min", dietary: ["gluten-free", "dairy-free", "paleo", "low-carb", "keto"], notes: "~400 cal, deconstructed" },
            { name: "Moussaka (Greek eggplant casserole, light)", time: "60 min", dietary: ["gluten-free", "mediterranean"], notes: "~450 cal, special occasion" },
            { name: "Beef tenderloin (5 oz) with roasted vegetables", time: "50 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto", "dash"], notes: "~480 cal, elegant" }
        ]
    },
    dinner: {
        1: [
            { name: "Frozen grilled chicken breast (4 oz)", time: "4 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-calorie", "low-fat", "dash"], notes: "~120 cal, microwave" },
            { name: "Large mixed green salad with lemon juice", time: "3 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "low-calorie", "mediterranean", "dash", "low-fat"], notes: "~50 cal, unlimited" },
            { name: "Shrimp cocktail (6 medium, no sauce)", time: "2 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~85 cal, protein" },
            { name: "Vegetable soup (1 cup, low sodium)", time: "3 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "low-calorie", "diabetic", "dash", "low-fat"], notes: "~80 cal, warm" },
            { name: "White fish fillet (4 oz, steamed)", time: "5 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~100 cal, delicate" },
            { name: "Zucchini noodles (1 cup) with marinara (1/4 cup)", time: "5 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean"], notes: "~70 cal, pasta alt" },
            { name: "Egg white scramble (4 whites) with spinach", time: "5 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "low-calorie", "diabetic", "low-fat", "dash"], notes: "~70 cal, protein" },
            { name: "Cucumber and tomato salad (2 cups)", time: "3 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium", "low-calorie", "mediterranean", "low-fat"], notes: "~40 cal, fresh" }
        ],
        2: [
            { name: "Baked chicken breast (5 oz) with steamed broccoli", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo", "diabetic", "low-calorie", "low-fat", "dash"], notes: "~200 cal, classic" },
            { name: "Baked cod (5 oz) with lemon and asparagus", time: "20 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~180 cal, light" },
            { name: "Turkey meatballs (4 oz) with zucchini noodles", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "dash"], notes: "~240 cal, satisfying" },
            { name: "Large salad with grilled chicken (4 oz, light dressing)", time: "10 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "dash"], notes: "~250 cal, filling" },
            { name: "Shrimp stir-fry (6 oz shrimp, lots of veggies, minimal oil)", time: "15 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "diabetic", "mediterranean", "dash"], notes: "~200 cal, water sauté" },
            { name: "Egg white omelet (5 whites) with vegetables", time: "10 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "low-calorie", "diabetic", "low-fat", "dash"], notes: "~120 cal, light" },
            { name: "Cauliflower rice bowl (2 cups) with turkey (4 oz)", time: "15 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "keto", "diabetic"], notes: "~220 cal, volume" },
            { name: "Poached salmon (5 oz) with cucumber salad", time: "20 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~240 cal, gentle" }
        ],
        3: [
            { name: "Herb-crusted chicken (5 oz) with roasted vegetables", time: "30 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto", "diabetic", "low-calorie", "dash"], notes: "~320 cal, flavorful" },
            { name: "Grilled shrimp (6 oz) with Mediterranean salad", time: "20 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "mediterranean", "paleo", "keto", "dash"], notes: "~280 cal, quick" },
            { name: "Turkey chili (1 cup, beanless, lots of veggies)", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "dash"], notes: "~280 cal, hearty" },
            { name: "Stuffed bell peppers (ground turkey 5 oz, cauliflower rice)", time: "30 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto"], notes: "~300 cal, complete" },
            { name: "Mediterranean chicken (5 oz) with olives and tomatoes", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto", "dash"], notes: "~320 cal, aromatic" },
            { name: "Beef and broccoli (lean beef 5 oz, lots of broccoli)", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "dash"], notes: "~320 cal, better than takeout" },
            { name: "Lemon garlic shrimp (6 oz) with zucchini noodles", time: "15 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "keto", "paleo", "mediterranean"], notes: "~280 cal, zesty" },
            { name: "Chicken piccata (5 oz) with side salad", time: "30 min", dietary: ["gluten-free", "low-carb", "keto", "mediterranean", "low-calorie"], notes: "~300 cal, elegant" }
        ],
        4: [
            { name: "Homemade chicken curry (5 oz, coconut milk, vegetables)", time: "35 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto"], notes: "~420 cal, warming" },
            { name: "Stuffed chicken breasts (5 oz, spinach, light cheese)", time: "35 min", dietary: ["gluten-free", "low-carb", "keto"], notes: "~380 cal, impressive" },
            { name: "Grilled lamb chops (5 oz) with Mediterranean vegetables", time: "30 min", dietary: ["gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto", "dash"], notes: "~420 cal, special" },
            { name: "Beef stir-fry (lean beef 5 oz, lots of vegetables)", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-carb", "low-calorie", "paleo", "keto", "dash"], notes: "~380 cal, quick" },
            { name: "Eggplant parmesan (keto, almond flour, light cheese)", time: "40 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~380 cal, comfort" },
            { name: "Herb-crusted fish (6 oz) with roasted asparagus", time: "25 min", dietary: ["gluten-free", "dairy-free", "low-sodium", "dash", "low-carb", "mediterranean"], notes: "~320 cal, fresh herbs" },
            { name: "Chicken parmesan (keto, almond flour, 5 oz)", time: "35 min", dietary: ["gluten-free", "low-carb", "keto"], notes: "~420 cal, crispy" },
            { name: "Mediterranean seafood stew (fish, shrimp, tomatoes)", time: "35 min", dietary: ["gluten-free", "dairy-free", "low-carb", "mediterranean", "paleo", "keto", "dash"], notes: "~380 cal, coastal" }
        ],
        5: [
            { name: "Roasted whole chicken (6 oz serving) with root vegetables", time: "90 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto", "dash"], notes: "~480 cal, Sunday dinner" },
            { name: "Homemade bone broth-based soup (protein, vegetables)", time: "60 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~320 cal, nutrient dense" },
            { name: "Beef stew (lean beef 6 oz, vegetables, no potatoes)", time: "60 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto"], notes: "~480 cal, hearty" },
            { name: "Mediterranean lamb (6 oz) with roasted vegetable medley", time: "50 min", dietary: ["gluten-free", "dairy-free", "mediterranean", "paleo", "keto", "dash"], notes: "~520 cal, impressive" },
            { name: "Keto chicken parmesan (6 oz, full cheese, sauce)", time: "45 min", dietary: ["gluten-free", "low-carb", "keto"], notes: "~580 cal, indulgent" },
            { name: "Paleo beef and broccoli (flank steak 6 oz, high broccoli)", time: "35 min", dietary: ["gluten-free", "dairy-free", "paleo", "low-carb", "keto", "dash"], notes: "~480 cal, better than takeout" },
            { name: "Coq au vin (chicken 6 oz, wine sauce, mushrooms)", time: "90 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~520 cal, French classic" },
            { name: "Homemade pho (zucchini noodles, beef 6 oz, herbs)", time: "60 min", dietary: ["gluten-free", "dairy-free", "low-carb", "paleo", "keto"], notes: "~420 cal, aromatic" }
        ]
    },
    snack: {
        1: [
            { name: "Almonds (10)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "mediterranean"], notes: "~70 cal, portion control" },
            { name: "Celery sticks (2 cups)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie", "low-sodium"], notes: "~30 cal, crunchy" },
            { name: "String cheese (part-skim)", time: "30 sec", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~80 cal, protein" },
            { name: "Olives (5)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "mediterranean"], notes: "~50 cal, healthy fat" },
            { name: "Cherry tomatoes (1 cup)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "low-calorie", "mediterranean", "low-sodium"], notes: "~25 cal, sweet" },
            { name: "Hard-boiled egg", time: "1 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie", "low-sodium", "dash"], notes: "~70 cal, portable" },
            { name: "Turkey pepperoni (10 slices)", time: "30 sec", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie"], notes: "~70 cal, savory" },
            { name: "Pickles (2 large)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "low-calorie", "low-sodium"], notes: "~10 cal, crunchy" }
        ],
        2: [
            { name: "Apple slices (1 small) with almond butter (1 tsp)", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "mediterranean"], notes: "~100 cal, fiber" },
            { name: "Greek yogurt (1/2 cup, plain)", time: "1 min", dietary: ["vegetarian", "gluten-free", "low-carb", "mediterranean", "diabetic"], notes: "~70 cal, protein" },
            { name: "Cucumber slices with hummus (2 tbsp)", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "mediterranean"], notes: "~80 cal, refreshing" },
            { name: "Beef jerky (1 oz, low sugar)", time: "30 sec", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~80 cal, portable" },
            { name: "Dark chocolate (1 square, 70%+)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "mediterranean"], notes: "~50 cal, antioxidant" },
            { name: "Edamame (1/2 cup, shelled)", time: "3 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-sodium"], notes: "~120 cal, protein" },
            { name: "Turkey roll-ups (2) with cheese", time: "2 min", dietary: ["gluten-free", "low-carb", "keto"], notes: "~100 cal, satisfying" },
            { name: "Seaweed snacks (1 package)", time: "30 sec", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "low-calorie"], notes: "~25 cal, mineral-rich" }
        ],
        3: [
            { name: "Avocado half with everything seasoning", time: "2 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "mediterranean"], notes: "~120 cal, satisfying" },
            { name: "Protein balls (2, homemade)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto"], notes: "~140 cal, make ahead" },
            { name: "Kale chips (1 cup, homemade)", time: "1 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie"], notes: "~50 cal, crispy" },
            { name: "Tuna salad (1/2 cup) on cucumber rounds", time: "5 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~100 cal, protein" },
            { name: "Baked zucchini chips (1 cup)", time: "20 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "low-calorie"], notes: "~80 cal, savory" },
            { name: "Stuffed mini peppers (2, cream cheese)", time: "5 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~90 cal, colorful" },
            { name: "Caprese skewers (2, small)", time: "5 min", dietary: ["vegetarian", "gluten-free", "mediterranean"], notes: "~100 cal, fresh" },
            { name: "Guacamole (1/4 cup) with bell pepper strips", time: "5 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "mediterranean"], notes: "~100 cal, healthy fat" }
        ],
        4: [
            { name: "Homemade hummus (1/4 cup) with veggie sticks", time: "15 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "mediterranean"], notes: "~150 cal, fiber" },
            { name: "Baked kale chips (2 cups)", time: "15 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo", "low-calorie"], notes: "~100 cal, homemade" },
            { name: "Deviled eggs (2, light mayo)", time: "20 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "paleo"], notes: "~140 cal, classic" },
            { name: "Antipasto skewers (2, meat, cheese, olive)", time: "10 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto", "mediterranean"], notes: "~120 cal, variety" },
            { name: "Stuffed mushrooms (2, sausage or cheese)", time: "25 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~100 cal, savory" },
            { name: "Zucchini pizza bites (4 rounds)", time: "20 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~120 cal, pizza fix" },
            { name: "Bacon-wrapped asparagus (3)", time: "20 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~120 cal, two ingredients" },
            { name: "Protein smoothie bowl (thick, 1 cup)", time: "10 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~180 cal, spoonable" }
        ],
        5: [
            { name: "Homemade keto crackers (10) with guacamole", time: "40 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~220 cal, crunchy" },
            { name: "Stuffed dates (2, goat cheese, prosciutto)", time: "15 min", dietary: ["vegetarian", "gluten-free", "mediterranean"], notes: "~140 cal, sweet/savory" },
            { name: "Bruschetta (2 pieces, almond flour bread)", time: "25 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~160 cal, Italian" },
            { name: "Homemade trail mix (1/4 cup, no sugar)", time: "10 min", dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~180 cal, energy" },
            { name: "Protein bars (1, homemade)", time: "45 min", dietary: ["vegetarian", "gluten-free", "low-carb", "keto"], notes: "~200 cal, no sugar" },
            { name: "Keto fat bombs (2, coconut cocoa)", time: "20 min", dietary: ["vegetarian", "gluten-free", "dairy-free", "low-carb", "keto"], notes: "~160 cal, treat" },
            { name: "Charcuterie board (keto style, 1 serving)", time: "20 min", dietary: ["gluten-free", "low-carb", "keto", "mediterranean"], notes: "~280 cal, fancy" },
            { name: "Homemade bone broth (2 cups, sip)", time: "120 min", dietary: ["gluten-free", "dairy-free", "low-carb", "keto", "paleo"], notes: "~80 cal, collagen" }
        ]
    }
};

// ============================================
// SMART WORKOUT DATABASE
// Each exercise has: intensity (1-5), avoidPains, goodForPains
// ============================================
const workouts = {
    flexibility: [
        { name: "Gentle neck rolls - 5 each direction", intensity: 1, avoidPains: ["neck"], goodForPains: ["back", "hands"] },
        { name: "Shoulder shrugs and rolls - 10 reps", intensity: 1, avoidPains: [], goodForPains: ["neck", "hands"] },
        { name: "Seated spinal twist - hold 30 seconds each side", intensity: 2, avoidPains: ["back"], goodForPains: ["knees", "hands"] },
        { name: "Cat-cow stretches - 10 reps", intensity: 2, avoidPains: ["back", "knees"], goodForPains: ["neck"] },
        { name: "Child's pose - hold 1 minute", intensity: 1, avoidPains: ["knees", "back"], goodForPains: ["neck", "hands"] },
        { name: "Hamstring stretch (seated) - 30 seconds each leg", intensity: 2, avoidPains: ["back"], goodForPains: ["knees"] },
        { name: "Hip flexor stretch - 30 seconds each side", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gentle forward fold - hold 30 seconds", intensity: 2, avoidPains: ["back"], goodForPains: ["neck"] },
        { name: "Wrist circles and stretches - 1 minute", intensity: 1, avoidPains: ["hands"], goodForPains: [] },
        { name: "Ankle circles - 10 each direction", intensity: 1, avoidPains: [], goodForPains: ["knees"] },
        { name: "Doorway chest stretch - 30 seconds", intensity: 2, avoidPains: [], goodForPains: ["neck", "back"] },
        { name: "Seated figure-four stretch - 30 seconds each side", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Standing quad stretch - 30 seconds each leg", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Thread the needle stretch - 30 seconds each side", intensity: 2, avoidPains: ["back", "shoulders"], goodForPains: ["neck"] },
        { name: "Supine twist (lying on back) - 30 seconds each side", intensity: 1, avoidPains: ["back"], goodForPains: ["knees", "neck"] }
    ],
    balance: [
        { name: "Single-leg stand (hold chair) - 30 seconds each side", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Heel-to-toe walk - 10 steps", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Chair-assisted balance poses - 1 minute", intensity: 1, avoidPains: [], goodForPains: ["knees", "back"] },
        { name: "Side leg raises (hold chair) - 10 each leg", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Standing knee lifts (hold chair) - 10 each leg", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Calf raises (hold chair) - 15 reps", intensity: 2, avoidPains: ["knees"], goodForPains: [] },
        { name: "Tandem stance (hold chair) - hold 30 seconds", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Weight shifts side to side - 1 minute", intensity: 1, avoidPains: [], goodForPains: ["knees", "back"] },
        { name: "Marching in place (hold chair) - 20 reps", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gentle tai chi movements - 5 minutes", intensity: 2, avoidPains: ["knees", "back"], goodForPains: ["neck"] },
        { name: "Standing on pillow (hold counter) - 30 seconds", intensity: 3, avoidPains: ["knees", "back", "ankles"], goodForPains: [] },
        { name: "Clock reaches (hold chair) - 10 reps each leg", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Single-leg stand (no support) - 20 seconds each", intensity: 4, avoidPains: ["knees", "back", "ankles"], goodForPains: [] },
        { name: "Balance walk on line - 20 steps", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] }
    ],
    cardio: [
        { name: "Seated arm circles with leg movements - 5 minutes", intensity: 1, avoidPains: ["hands"], goodForPains: ["knees", "back"] },
        { name: "Gentle seated marching - 3 minutes", intensity: 1, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Shadow boxing (seated) - 3 minutes", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: ["knees", "back"] },
        { name: "Arm ergometer or arm cycling - 5 minutes", intensity: 2, avoidPains: ["hands"], goodForPains: ["knees", "back"] },
        { name: "Marching in place - 5 minutes", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Step-ups on low step - 20 reps", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Side steps with arm movements - 3 minutes", intensity: 2, avoidPains: ["knees"], goodForPains: ["back"] },
        { name: "Walking in place with high knees - 3 minutes", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gentle dancing to favorite song - 1 song", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Stair climbing (if available) - 5 minutes", intensity: 4, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Swimming or water walking - 10 minutes", intensity: 3, avoidPains: [], goodForPains: ["knees", "back"] },
        { name: "Seated marching with resistance bands - 5 minutes", intensity: 2, avoidPains: ["hands"], goodForPains: ["knees", "back"] },
        { name: "Jumping jacks (modified, no jump) - 20 reps", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Brisk walking in place - 5 minutes", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Light jog in place - 3 minutes", intensity: 4, avoidPains: ["knees", "back"], goodForPains: [] }
    ],
    strength: [
        { name: "Wall push-ups - 10 reps", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: ["back"] },
        { name: "Chair squats or sit-to-stands - 10 reps", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Modified push-ups (knees down) - 8 reps", intensity: 3, avoidPains: ["hands", "neck", "back"], goodForPains: [] },
        { name: "Resistance band rows (seated) - 12 reps", intensity: 2, avoidPains: ["hands", "back"], goodForPains: [] },
        { name: "Bicep curls (light weights or cans) - 12 reps", intensity: 2, avoidPains: ["hands"], goodForPains: [] },
        { name: "Overhead press (light weights) - 10 reps", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: [] },
        { name: "Glute bridges - 15 reps", intensity: 2, avoidPains: ["back", "knees"], goodForPains: [] },
        { name: "Side-lying leg lifts - 10 each side", intensity: 2, avoidPains: ["back", "knees"], goodForPains: [] },
        { name: "Wall sits - hold 20 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Arm circles with light weights - 20 reps", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: [] },
        { name: "Seated chest press with resistance band - 12 reps", intensity: 2, avoidPains: ["hands", "back"], goodForPains: [] },
        { name: "Standing calf raises holding chair - 15 reps", intensity: 2, avoidPains: ["knees"], goodForPains: [] },
        { name: "Step-ups with knee drive - 10 each leg", intensity: 4, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Plank (modified, knees down) - 20 seconds", intensity: 3, avoidPains: ["hands", "back", "knees"], goodForPains: [] },
        { name: "Lunges holding chair - 10 each leg", intensity: 4, avoidPains: ["knees", "back"], goodForPains: [] }
    ],
    hiit: [
        { name: "20 seconds work / 40 seconds rest - 4 rounds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gentle burpees (step back, no jump) - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "March in place fast - 30 seconds", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Chair step-ups quick pace - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Seated boxing punches fast - 30 seconds", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: ["knees", "back"] },
        { name: "Alternating knee lifts fast - 30 seconds", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Wall push-ups fast tempo - 30 seconds", intensity: 3, avoidPains: ["hands", "neck"], goodForPains: [] },
        { name: "Side steps with arm pumps - 30 seconds", intensity: 2, avoidPains: ["knees"], goodForPains: ["back"] },
        { name: "Rest and deep breathing - 60 seconds", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "High knees (modified, low impact) - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Squat to chair and stand - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Arm circles fast - 30 seconds", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: [] }
    ],
    circuit: [
        { name: "Station 1: Wall push-ups - 30 seconds", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: ["back"] },
        { name: "Station 2: Chair squats - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Station 3: March in place - 30 seconds", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Station 4: Arm circles - 30 seconds", intensity: 2, avoidPains: ["hands", "neck"], goodForPains: [] },
        { name: "Station 5: Step-ups - 30 seconds", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Rest 1 minute between rounds", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Complete 2-3 rounds total", intensity: 3, avoidPains: [], goodForPains: [] },
        { name: "Cool down with stretching - 5 minutes", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Focus on form over speed", intensity: 2, avoidPains: [], goodForPains: ["all"] },
        { name: "Station 6: Resistance band rows - 30 seconds", intensity: 2, avoidPains: ["hands", "back"], goodForPains: [] },
        { name: "Station 7: Calf raises - 30 seconds", intensity: 2, avoidPains: ["knees"], goodForPains: [] },
        { name: "Station 8: Seated twists - 30 seconds", intensity: 2, avoidPains: ["back"], goodForPains: ["neck"] }
    ],
    functional: [
        { name: "Sit-to-stand from chair - 10 reps", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Reaching exercises (high and low) - 10 each", intensity: 2, avoidPains: ["back", "neck"], goodForPains: ["hands"] },
        { name: "Stepping over obstacles (imaginary) - 10 each direction", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Carrying light weights while walking - 2 minutes", intensity: 3, avoidPains: ["hands", "back"], goodForPains: [] },
        { name: "Opening and closing movements - 10 reps", intensity: 2, avoidPains: ["hands"], goodForPains: [] },
        { name: "Reaching across body - 10 each side", intensity: 2, avoidPains: ["back", "neck"], goodForPains: ["hands"] },
        { name: "Bending and lifting (light object) - 10 reps", intensity: 3, avoidPains: ["back", "knees"], goodForPains: [] },
        { name: "Turning head while walking in place - 1 minute", intensity: 2, avoidPains: ["neck"], goodForPains: [] },
        { name: "Multi-directional stepping - 2 minutes", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Daily activity simulation - 5 minutes", intensity: 3, avoidPains: [], goodForPains: [] },
        { name: "Standing up from floor (using chair) - 5 reps", intensity: 4, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Walking backwards (hold wall) - 2 minutes", intensity: 2, avoidPains: ["back", "knees"], goodForPains: [] }
    ],
    any: [
        { name: "10-minute gentle walk", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "5-minute stretching routine", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Dance to 2 favorite songs", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Light yoga flow", intensity: 2, avoidPains: ["back", "knees"], goodForPains: [] },
        { name: "Whatever movement feels good today", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Seated full body routine", intensity: 1, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Standing balance and stretch", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gentle cardio and strength mix", intensity: 3, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Focus on breathing and gentle motion", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Listen to your body and move accordingly", intensity: 1, avoidPains: [], goodForPains: ["all"] },
        { name: "Walk around your space during phone call", intensity: 2, avoidPains: ["knees", "back"], goodForPains: [] },
        { name: "Gardening or light household tasks", intensity: 3, avoidPains: ["hands", "back", "knees"], goodForPains: [] }
    ]
};

    // ============================================
    // FANDOM-ADJACENT, MYTH & STORYTELLING AFFIRMATIONS
    // ============================================

const affirmations = [
    // Fandom-Adjacent & Pop Culture
    "You don't need a time machine to change what happens next. Start where you are.",
    "Not every mystery needs solving today. Sometimes you need rest and another look tomorrow.",
    "You're not a side character in your own story. You get choices too.",
    "You don't have to know the ending to take the next step in the story.",
    "Healing can be a little timey, a little messy, and a lot nonlinear.",
    "What do you truly desire? If it's rest, take it. If it's peace, make room for it.",
    "Even heroes need somewhere safe to take off the armor.",
    "You don't owe anyone sunshine just because they're uncomfortable with your clouds.",
    "Being weird isn't a flaw. The right people won't need you to be less you.",
    "You don't need superpowers to do something brave.",
    "Your origin story explains you. It doesn't get to decide your ending.",
    "The armor that protected you before doesn't have to stay on forever.",
    "You were worthy before the glow-up. You're worthy now.",
    "You are allowed to rewrite the role other people assigned you.",
    "Not every battle needs to be fought today. Rest and regroup.",
    "Not every family is inherited. Some of the best ones are assembled along the way.",
    "Your power-up can be food, water, rest, and doing absolutely nothing heroic today.",
    "You don't have to destroy yourself proving how much you care.",
    "Low health is a reason to heal, not proof you're bad at the game.",
    "It's dangerous to go through life without self-compassion. Pack some for the journey.",

    // Makeup & Self-Expression
    "That winged eyeliner isn't just makeup. It's armor. And you look fierce.",
    "Your face is a canvas, not a problem. Paint it however makes you feel whole.",
    "Red lipstick counts as a power move. So does no makeup. Your choice, your power.",

    // Chronic Pain & Mental Health
    "A hard mental health day doesn't erase how far you've come.",
    "You don't have to understand every feeling before you're allowed to be gentle with yourself.",
    "Some days the win is simply making it through. That's not small.",
    "Needing more rest doesn't make you lazy. Your capacity is allowed to change.",

    // Body Image & Weight
    "Your body carried you through today. That's worth appreciating.",
    "Weight change isn't a moral failure. Your worth was never measured by a scale.",
    "Your body is a home, not a display piece. Make it comfortable for the resident.",

    // Entrepreneurship & Side Hustle
    "Building something while exhausted is still building. Slow growth is still growth.",
    "Your side hustle doesn't need to be perfect. It just needs to be yours.",
    "Unemployed doesn't mean unworthy. You're in transition, not termination.",

    // LGBTQIA+ Inclusivity
    "Being queer doesn't make you less deserving of peace, joy, or belonging.",
    "Your identity doesn't need someone else's approval to be yours.",
    "Chosen family counts. Your people are out there.",

    // The "Tired But Determined" Vibe
    "Feeling deeply isn't a character flaw. You don't have to become numb to become strong.",
    "Resting isn't quitting. It's reloading.",
    "You survived 100% of your worst days. That's a better track record than most action heroes.",
    "Some days you save the world. Some days you save yourself. Both count.",
    "You're allowed to be a masterpiece and a work in progress simultaneously.",
    "Your 'I can't' today doesn't erase your 'I did' from yesterday.",
    "Being tired doesn't mean you're weak. It means you're tired. That's enough reason to rest.",
    "You don't have to earn your rest. You deserve it by existing.",
    "Progress isn't linear, and that's okay. You're still allowed to be proud of yourself.",
    "Your worth isn't measured by your productivity today.",
    "Taking care of yourself counts.",
    "You've made it through every bad day that brought you here.",
    "It's okay to do small. Small is still something.",
    "Your body deserves kindness today, exactly as it is.",
    "Rest is not a reward. It's part of being human.",
    "You don't have to be okay right now. Just be here.",
    "Tomorrow is another chance. For now, just breathe.",
    "What you can give today is enough for today.",
    "Healing takes time. Give yourself room for it.",
    "You are more than your productivity.",
    "Every step forward counts, no matter how small.",
    "Taking care of your health is worth your time.",

    // Marcevolution Brand Voice
    "Come as you are. Messy, tired, hopeful, scared. You're welcome here.",
    "Evolution isn't about becoming someone new. It's about becoming yourself.",
    "You don't need to be 'fixed.' You need room to grow. We're making that room.",
    "Pain and hope can exist in the same day.",
    "Confidence isn't a destination you arrive at. It's something you practice.",
    "Your makeup bag is a toolkit. Your movement is yours. Your rest is sacred.",
    "You're not behind in life. You're on your own timeline.",
    "Rebuilding isn't failure. It's architecture.",
    "You can have a hard day and still be powerful. Both are true.",
    "Marcevolution isn't about perfection. It's about making room to evolve.",

    // Gentle Tough Love
    "You don't have to solve everything today. Just choose the next thing you can handle.",
    "Your comfort zone can be safe and familiar. Step outside it when you're ready.",
    "That thing you've been putting off? Starting small still counts as starting.",
    "Future you might be grateful that present you showed up today.",
    "You're not 'too much.' You don't have to shrink to make yourself easier to hold.",
    "Your boundaries aren't walls. They're doors you choose to open.",
    "You don't need permission to take up space. You already have it.",
    "Keep becoming. You don't have to rush the process.",
    "Your 'someday' can start with one tiny step today.",
    "You're allowed to outgrow people, places, and versions of yourself.",

    // For the Darkest Days
    "If all you did today was exist, that's enough.",
    "What you're feeling right now doesn't have to define what comes next.",
    "You don't have to feel hopeful every minute to keep going.",
    "Your story still has pages you haven't reached yet.",
    "Getting through today can be enough for today.",
    "Some days surviving is the goal. Small steps still matter.",
    "You matter, even when it's difficult to feel that way.",
    "Stay. Give tomorrow the chance to be different."
];

// ============================================
// STATE MANAGEMENT
// ============================================
let selectedSpoons = null;
let selectedPains = [];
let selectedDietary = [];
let selectedMealType = null;
let selectedWorkoutType = null;

// ============================================
// DOM ELEMENTS
// ============================================
const spoonBtns = document.querySelectorAll('.spoon-btn');
const painCheckboxes = document.querySelectorAll('.pain-options input[type="checkbox"]');
const noPainCheckbox = document.getElementById('no-pain');
const dietaryCheckboxes = document.querySelectorAll('.dietary-options input[type="checkbox"]');
const noDietaryCheckbox = document.getElementById('no-dietary');
const mealTypeBtns = document.querySelectorAll('.meal-type-btn');
const workoutTypeBtns = document.querySelectorAll('.workout-type-btn');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const results = document.getElementById('results');
const spoonDisplay = document.getElementById('spoon-display');
const mealTypeDisplay = document.getElementById('meal-type-display');
const workoutTypeDisplay = document.getElementById('workout-type-display');

// ============================================
// EVENT LISTENERS
// ============================================

// Spoon selection
spoonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        spoonBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSpoons = parseInt(btn.dataset.level);
        
        const labels = {
            1: "Empty - Let's be extra gentle today",
            2: "Low - Small steps are still steps",
            3: "Okay - You've got some energy to work with",
            4: "Good - A solid day for you",
            5: "Full - Make the most of it, but don't overdo it"
        };
        spoonDisplay.textContent = labels[selectedSpoons];
    });
});

// Pain selection
painCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.id === 'no-pain' && checkbox.checked) {
            painCheckboxes.forEach(cb => {
                if (cb.id !== 'no-pain') cb.checked = false;
            });
        } else if (checkbox.id !== 'no-pain' && checkbox.checked) {
            noPainCheckbox.checked = false;
        }
        updateSelectedPains();
    });
});

function updateSelectedPains() {
    selectedPains = Array.from(painCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}

// Dietary selection
dietaryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.id === 'no-dietary' && checkbox.checked) {
            dietaryCheckboxes.forEach(cb => {
                if (cb.id !== 'no-dietary') cb.checked = false;
            });
        } else if (checkbox.id !== 'no-dietary' && checkbox.checked) {
            noDietaryCheckbox.checked = false;
        }
        updateSelectedDietary();
    });
});

function updateSelectedDietary() {
    selectedDietary = Array.from(dietaryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}

// Meal type selection
mealTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        mealTypeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMealType = btn.dataset.type;
        
        const labels = {
            breakfast: "🌅 Starting the day right",
            lunch: "☀️ Midday fuel",
            dinner: "🌙 Evening nourishment",
            snack: "🥨 Little pick-me-up",
            any: "🤷 Let's see what sounds good!"
        };
        mealTypeDisplay.textContent = labels[selectedMealType];
    });
});

// Workout type selection
workoutTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        workoutTypeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedWorkoutType = btn.dataset.type;
        
        const labels = {
            flexibility: "🧘 Gentle stretching and mobility",
            balance: "⚖️ Stability and coordination",
            cardio: "💓 Heart-healthy movement",
            strength: "💪 Build muscle gently",
            hiit: "🔥 Short bursts of energy",
            circuit: "🔄 Multiple exercises in rotation",
            functional: "🏃 Train for daily life",
            any: "🤷 Whatever feels right today"
        };
        workoutTypeDisplay.textContent = labels[selectedWorkoutType];
    });
});

// ============================================
// GENERATE RECOMMENDATIONS
// ============================================
generateBtn.addEventListener('click', () => {
    // Validation
    if (!selectedSpoons) {
        alert("Please select how many spoons you have today!");
        return;
    }
    
    if (selectedPains.length === 0) {
        alert("Please select your pain points (or 'None/Good day')");
        return;
    }
    
    if (selectedDietary.length === 0) {
        alert("Please select your dietary needs (or 'No restrictions')");
        return;
    }
    
    if (!selectedMealType) {
        alert("Please select what meal you're planning!");
        return;
    }
    
    if (!selectedWorkoutType) {
        alert("Please select what type of movement you want!");
        return;
    }
    
    // ============================================
    // GET MEALS - Include selected level AND lower levels
    // Track which level each meal came from for prioritization
    // ============================================
    let mealOptions = [];

    if (selectedMealType === 'any') {
        Object.keys(meals).forEach(type => {
            for (let level = 1; level <= selectedSpoons; level++) {
                if (meals[type][level]) {
                    // Add level info to each meal so we can prioritize higher levels
                    const mealsWithLevel = meals[type][level].map(m => ({
                        ...m,
                        spoonLevel: level
                    }));
                    mealOptions = mealOptions.concat(mealsWithLevel);
                }
            }
        });
    } else {
        for (let level = 1; level <= selectedSpoons; level++) {
            if (meals[selectedMealType][level]) {
                const mealsWithLevel = meals[selectedMealType][level].map(m => ({
                    ...m,
                    spoonLevel: level
                }));
                mealOptions = mealOptions.concat(mealsWithLevel);
            }
        }
    }
    
    // ============================================
    // IMPROVED FILTERING - Shows partial matches
    // ============================================
    if (!selectedDietary.includes('none')) {
        // Calculate match score for each meal
        const mealsWithScores = mealOptions.map(meal => {
            const matchingTags = selectedDietary.filter(diet => meal.dietary.includes(diet));
            const score = matchingTags.length / selectedDietary.length;
            return { ...meal, matchScore: score, matchingCount: matchingTags.length };
        });
        
        // Sort by: 1) Match score (highest first), 2) Spoon level (highest first)
        mealsWithScores.sort((a, b) => {
            if (b.matchScore !== a.matchScore) {
                return b.matchScore - a.matchScore; // Higher match score first
            }
            return b.spoonLevel - a.spoonLevel; // Higher spoon level first if scores tied
        });
        
        // If we have meals with 100% match, prioritize those
        const perfectMatches = mealsWithScores.filter(m => m.matchScore === 1);
        if (perfectMatches.length >= 3) {
            mealOptions = perfectMatches;
        } else {
            // Use top matches including partial matches
            const viableMatches = mealsWithScores.filter(m => m.matchScore > 0);
            
            if (viableMatches.length > 0) {
                mealOptions = viableMatches;
            } else {
                // No matches at all - use all meals
                mealOptions = mealsWithScores;
            }
        }
    }
    
    // Get top 3 meals
    let selectedMeals = [];
    if (mealOptions.length === 0) {
        selectedMeals = [{
            name: "Simple rice with salt and olive oil",
            time: "15 min",
            dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
            notes: "Gentle on the stomach, easy to digest"
        }];
    } else {
        selectedMeals = mealOptions.slice(0, Math.min(3, mealOptions.length));
    }
    
// ============================================
    // SMART WORKOUT SELECTION
    // Filter by intensity, exclude pain aggravating exercises
    // Include lower intensity options like meals
    // ============================================
    let workoutOptions = workouts[selectedWorkoutType] || workouts.any;
    
    // Filter: Include exercises at or below selected spoon level
    // AND exclude exercises that would aggravate selected pains
    let filteredWorkouts = workoutOptions.filter(exercise => {
        // Must be at or below user's energy level
        const intensityMatch = exercise.intensity <= selectedSpoons;
        
        // Must NOT aggravate any selected pain points
        let painSafe = true;
        if (!selectedPains.includes('none')) {
            painSafe = !selectedPains.some(pain => exercise.avoidPains.includes(pain));
        }
        
        return intensityMatch && painSafe;
    });
    
    // Sort: Prioritize exercises that are GOOD for selected pains, then by intensity
    filteredWorkouts.sort((a, b) => {
        // If user has pain selected, prioritize exercises good for that pain
        if (!selectedPains.includes('none')) {
            const aGoodForPain = selectedPains.some(p => a.goodForPains.includes(p));
            const bGoodForPain = selectedPains.some(p => b.goodForPains.includes(p));
            
            if (aGoodForPain && !bGoodForPain) return -1;
            if (!aGoodForPain && bGoodForPain) return 1;
        }
        
        // Then sort by intensity (highest first, so challenging but appropriate)
        return b.intensity - a.intensity;
    });
    
    // Shuffle so it's not the same routine every time
    const shuffled = [...filteredWorkouts].sort(() => 0.5 - Math.random());
    
    // Select appropriate number based on spoon level
    const numExercises = selectedSpoons >= 4 ? 5 : selectedSpoons >= 2 ? 3 : 2;
    let selectedWorkouts = shuffled.slice(0, Math.min(numExercises, shuffled.length));
    
    // If we don't have enough exercises after filtering, show a message
    let painNote = "";
    if (selectedWorkouts.length === 0) {
        painNote = "Based on your pain points today, focus on gentle breathing and rest. Consider a warm bath or heating pad instead.";
        selectedWorkouts = [{ name: "Gentle breathing exercises - 5 minutes", intensity: 1, avoidPains: [], goodForPains: ["all"] }];
    } else if (!selectedPains.includes('none')) {
        // Add a helpful note about modifications
        const safeCount = filteredWorkouts.length;
        painNote = `Showing ${safeCount} exercises appropriate for your pain level. All movements avoid aggravating your selected pain points.`;
    }
    
    // Get random affirmation
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    
    // ============================================
    // DISPLAY MEAL OPTIONS
    // ============================================
    const mealContainer = document.getElementById('meal-options-container');
    mealContainer.innerHTML = '';
    
    selectedMeals.forEach((meal, index) => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-option';
        
        // Add match indicator and spoon level indicator
        let matchIndicator = '';
        if (meal.matchScore !== undefined && meal.matchScore < 1 && meal.matchScore > 0) {
            const matchPercent = Math.round(meal.matchScore * 100);
            matchIndicator = `<span class="match-badge" style="background: #F1E0D0; color: #964434; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-left: 8px;">${matchPercent}% match</span>`;
        }
        
        // Show spoon level for context
        let levelIndicator = '';
        if (meal.spoonLevel !== undefined && meal.spoonLevel !== selectedSpoons) {
            const levelLabels = {1: "1 spoon", 2: "2 spoons", 3: "3 spoons", 4: "4 spoons", 5: "5 spoons"};
            levelIndicator = `<span class="level-badge" style="background: #748181; color: #FFFFFF; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-left: 8px;">${levelLabels[meal.spoonLevel]}</span>`;
        }
        
        const dietaryBadges = meal.dietary.slice(0, 4).map(d => {
            const shortName = d === 'vegetarian' ? 'Veg' : 
                             d === 'vegan' ? 'Vegan' : 
                             d === 'gluten-free' ? 'GF' : 
                             d === 'dairy-free' ? 'DF' : 
                             d === 'low-carb' ? 'Low Carb' :
                             d === 'keto' ? 'Keto' :
                             d === 'paleo' ? 'Paleo' :
                             d === 'mediterranean' ? 'Med' :
                             d === 'dash' ? 'DASH' :
                             d === 'low-sodium' ? 'Low Na' :
                             d === 'diabetic' ? 'Diabetic' :
                             d === 'low-calorie' ? 'Low Cal' : d;
            return `<span class="dietary-badge">${shortName}</span>`;
        }).join('');
        
        mealDiv.innerHTML = `
            <div class="meal-header">
                <h4>Option ${index + 1}: ${meal.name}${matchIndicator}${levelIndicator}</h4>
                <span class="meal-time">⏱️ ${meal.time}</span>
            </div>
            <p class="meal-notes">${meal.notes}</p>
            <div class="dietary-badges">${dietaryBadges}</div>
        `;
        
        mealContainer.appendChild(mealDiv);
    });
    
// ============================================
    // DISPLAY WORKOUTS
    // ============================================
    const movementListEl = document.getElementById('movement-result');
    movementListEl.innerHTML = '';
    
    if (painNote) {
        const painLi = document.createElement('li');
        painLi.style.fontStyle = 'italic';
        painLi.style.color = '#964434';
        painLi.style.borderBottom = '1px solid #F1E0D0';
        painLi.style.paddingBottom = '10px';
        painLi.style.marginBottom = '10px';
        painLi.textContent = `💡 ${painNote}`;
        movementListEl.appendChild(painLi);
    }
    
selectedWorkouts.forEach((workout, index) => {
        const li = document.createElement('li');
        const intensityBadge = `<span style="background: #F1E0D0; color: #964434; padding: 2px 6px; border-radius: 8px; font-size: 0.7rem; margin-left: 8px;">${workout.intensity} spoon${workout.intensity > 1 ? 's' : ''}</span>`;
        li.innerHTML = `<strong>${index + 1}.</strong> ${workout.name}${intensityBadge}`;
        movementListEl.appendChild(li);
    });
    
    
    // ============================================
    // DISPLAY AFFIRMATION
    // ============================================
    document.getElementById('affirmation-result').textContent = `"${randomAffirmation}"`;
    
    // Show results
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// RESET
// ============================================
resetBtn.addEventListener('click', () => {
    results.classList.add('hidden');
    
    spoonBtns.forEach(b => b.classList.remove('selected'));
    painCheckboxes.forEach(cb => cb.checked = false);
    dietaryCheckboxes.forEach(cb => cb.checked = false);
    mealTypeBtns.forEach(b => b.classList.remove('selected'));
    workoutTypeBtns.forEach(b => b.classList.remove('selected'));
    
    selectedSpoons = null;
    selectedPains = [];
    selectedDietary = [];
    selectedMealType = null;
    selectedWorkoutType = null;
    
    spoonDisplay.textContent = 'Select your energy level';
    mealTypeDisplay.textContent = 'Select a meal type';
    workoutTypeDisplay.textContent = 'Select a workout type';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
