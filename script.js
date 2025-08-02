// ====================================================================
//          COMPLETE MEAL PLANNER CODE (DATA + LOGIC) - V3 (Advanced Rules)
// ====================================================================

// SECTION 1: THE "DATABASE" (RECIPES, PRICES, AND CONVERSIONS)

const breakfastOptions = [
    { recipeId: 101, mealName: "Ragi Dosa", totalTime: 20, tags: ["Vegetarian", "Tiffin"], ingredients: [{ name: "Ragi Flour", quantity: 1, unit: "cup" }, { name: "Onion", quantity: 1, unit: "piece" }] },
    { recipeId: 102, mealName: "Muttai Dosa", totalTime: 15, tags: ["Contains-Egg", "Tiffin"], ingredients: [{ name: "Dosa Batter", quantity: 1.5, unit: "cup" }, { name: "Egg", quantity: 2, unit: "piece" }] },
    { recipeId: 103, mealName: "Idli (4) with Sambar", totalTime: 45, tags: ["Vegetarian", "Tiffin"], ingredients: [{ name: "Idli Rice", quantity: 1, unit: "cup" }, { name: "Toor Dal", quantity: 0.5, unit: "cup" }, { name: "Sambar Powder", quantity: 2, unit: "tbsp" }] },
    { recipeId: 104, mealName: "Ven Pongal", totalTime: 30, tags: ["Vegetarian", "Tiffin"], ingredients: [{ name: "Idli Rice", quantity: 0.75, unit: "cup" }, { name: "Moong Dal", quantity: 0.25, unit: "cup" }, { name: "Black Pepper", quantity: 1, unit: "tsp" }] },
    { recipeId: 105, mealName: "Adai", totalTime: 25, tags: ["Vegetarian", "Tiffin", "High-Protein"], ingredients: [{ name: "Idli Rice", quantity: 0.5, unit: "cup" }, { name: "Toor Dal", quantity: 0.25, unit: "cup" }, { name: "Chana Dal", quantity: 0.25, unit: "cup" }] },
    { recipeId: 107, mealName: "Rava Upma", totalTime: 25, tags: ["Vegetarian", "Tiffin"], ingredients: [{ name: "Semolina", quantity: 1, unit: "cup" }, { name: "Onion", quantity: 1, unit: "piece" }, { name: "Mustard Seeds", quantity: 1, unit: "tsp" }] },
    { recipeId: 112, mealName: "Bread Omelette", totalTime: 10, tags: ["Contains-Egg"], ingredients: [{ name: "Bread", quantity: 4, unit: "slice" }, { name: "Egg", quantity: 2, unit: "piece" }] },
];
const lunchMains = [
    { recipeId: 201, mealName: "Sambar", totalTime: 40, tags: ["Vegetarian"], ingredients: [{ name: "Toor Dal", quantity: 0.75, unit: "cup" }, { name: "Tamarind", quantity: 1, unit: "piece" }, { name: "Sambar Powder", quantity: 2, unit: "tbsp" }, { name: "Mixed Veggies", quantity: 1, unit: "cup" }] },
    { recipeId: 202, mealName: "Tomato Rasam", totalTime: 20, tags: ["Vegetarian"], ingredients: [{ name: "Tomato", quantity: 3, unit: "piece" }, { name: "Rasam Powder", quantity: 1, unit: "tbsp" }, { name: "Coriander", quantity: 0.2, unit: "bunch" }] },
    { recipeId: 205, mealName: "Paruppu (Dal)", totalTime: 25, tags: ["Vegetarian"], ingredients: [{ name: "Moong Dal", quantity: 1, unit: "cup" }, { name: "Garlic", quantity: 4, unit: "clove" }] },
];
const lunchVegSides = [
    { recipeId: 301, mealName: "Beans Poriyal", totalTime: 20, tags: ["Vegetarian"], ingredients: [{ name: "Green Beans", quantity: 250, unit: "g" }, { name: "Grated Coconut", quantity: 0.25, unit: "cup" }] },
    { recipeId: 302, mealName: "Potato Roast", totalTime: 25, tags: ["Vegetarian"], ingredients: [{ name: "Potato", quantity: 3, unit: "piece" }, { name: "Chilli Powder", quantity: 1, unit: "tsp" }] },
    { recipeId: 305, mealName: "Avial", totalTime: 30, tags: ["Vegetarian"], ingredients: [{ name: "Mixed Veggies", quantity: 2, unit: "cup" }, { name: "Yogurt", quantity: 0.5, unit: "cup" }] },
];
const lunchNonVegSides = [
    { recipeId: 401, mealName: "Chicken Varuval", totalTime: 35, tags: ["Chicken"], ingredients: [{ name: "Chicken", quantity: 300, unit: "g" }, { name: "Onion", quantity: 1, unit: "piece" }, { name: "Garam Masala", quantity: 1, unit: "tbsp" }] },
    { recipeId: 402, mealName: "Fish Fry", totalTime: 20, tags: ["Fish"], ingredients: [{ name: "Kingfish", quantity: 250, unit: "g" }, { name: "Chilli Powder", quantity: 1, unit: "tbsp" }] },
    { recipeId: 405, mealName: "Egg Masala", totalTime: 20, tags: ["Contains-Egg"], ingredients: [{ name: "Egg", quantity: 2, unit: "piece" }, { name: "Onion", quantity: 1, unit: "piece" }] },
];
const dinnerOptions = [
    { recipeId: 501, mealName: "Chapathi with Veg Kurma", totalTime: 45, tags: ["Vegetarian"], ingredients: [{ name: "Atta Flour", quantity: 1, unit: "cup" }, { name: "Mixed Veggies", quantity: 1.5, unit: "cup" }] },
    { recipeId: 504, mealName: "Egg Curry with Roti", totalTime: 35, tags: ["Contains-Egg"], ingredients: [{ name: "Egg", quantity: 3, unit: "piece" }, { name: "Onion", quantity: 2, unit: "piece" }, { name: "Atta Flour", quantity: 1, unit: "cup" }] },
    { recipeId: 505, mealName: "Millet with Sambar", totalTime: 40, tags: ["Vegetarian"], ingredients: [{ name: "Millet", quantity: 1, unit: "cup" }, { name: "Toor Dal", quantity: 0.5, unit: "cup" }] },
    { recipeId: 506, mealName: "Chapathi with Paneer Butter Masala", totalTime: 40, tags: ["Vegetarian"], ingredients: [{ name: "Atta Flour", quantity: 1, unit: "cup" }, { name: "Paneer", quantity: 200, unit: "g" }] },
    { recipeId: 507, mealName: "Kothu Parotta (Chicken)", totalTime: 25, tags: ["Chicken"], ingredients: [{ name: "Parotta", quantity: 3, unit: "piece" }, { name: "Chicken", quantity: 150, unit: "g" }] },
    { recipeId: 511, mealName: "Mushroom Masala with Phulka", totalTime: 30, tags: ["Vegetarian"], ingredients: [{ name: "Mushroom", quantity: 200, unit: "g" }, { name: "Atta Flour", quantity: 1, unit: "cup" }] },
];

const unitConversions = {
    cup: { default: 200, "Atta Flour": 120, "Ragi Flour": 140, "Idli Rice": 200, "Toor Dal": 200, "Moong Dal": 200, "Chana Dal": 200, "Semolina": 150, "Millet": 180, "Dosa Batter": 240, "Grated Coconut": 80, "Mixed Veggies": 150, "Yogurt": 240 },
    tbsp: { default: 15 },
    tsp: { default: 5 },
};

const ingredientPrices = {
    "Onion":{price:0.16,unit:"piece"},"Tomato":{price:0.2,unit:"piece"},"Potato":{price:0.25,unit:"piece"},"Garlic":{price:0.04,unit:"clove"},"Ginger":{price:0.35,unit:"inch"},"Green Chilli":{price:0.05,unit:"piece"},"Curry Leaves":{price:0.8,unit:"bunch"},"Coriander":{price:0.8,unit:"bunch"},"Lemon":{price:0.3,unit:"piece"},"Grated Coconut":{price:0.8,unit:"100g"},"Drumstick":{price:0.7,unit:"piece"},"Brinjal":{price:0.6,unit:"piece"},"Okra":{price:0.9,unit:"100g"},"Green Beans":{price:0.5,unit:"100g"},"Cabbage":{price:0.8,unit:"piece"},"Carrot":{price:0.12,unit:"piece"},"Beetroot":{price:0.4,unit:"piece"},"Plantain":{price:0.7,unit:"piece"},"Spinach":{price:0.8,unit:"bunch"},"Mushroom":{price:0.5,unit:"100g"},"Chicken":{price:0.65,unit:"100g"},"Mutton":{price:1.2,unit:"100g"},"Kingfish":{price:2,unit:"100g"},"Prawns":{price:1.8,unit:"100g"},"Egg":{price:0.2,unit:"piece"},"Yogurt":{price:0.3,unit:"100g"},"Milk":{price:0.16,unit:"100ml"},"Paneer":{price:1.1,unit:"100g"},"Ghee":{price:0.8,unit:"100g"},"Ragi Flour":{price:0.18,unit:"100g"},"Atta Flour":{price:0.15,unit:"100g"},"Idli Rice":{price:0.25,unit:"100g"},"Semolina":{price:0.2,unit:"100g"},"Dosa Batter":{price:0.6,unit:"100g"},"Toor Dal":{price:0.28,unit:"100g"},"Chana Dal":{price:0.25,unit:"100g"},"Urad Dal":{price:0.3,unit:"100g"},"Moong Dal":{price:0.3,unit:"100g"},"Chickpeas":{price:0.18,unit:"100g"},"Turmeric Powder":{price:0.23,unit:"10g"},"Chilli Powder":{price:0.25,unit:"10g"},"Coriander Powder":{price:0.25,unit:"10g"},"Cumin Powder":{price:0.3,unit:"10g"},"Cumin Seeds":{price:0.3,unit:"10g"},"Mustard Seeds":{price:0.2,unit:"10g"},"Garam Masala":{price:0.4,unit:"10g"},"Sambar Powder":{price:0.45,unit:"10g"},"Rasam Powder":{price:0.45,unit:"10g"},"Black Pepper":{price:0.5,unit:"10g"},"Tamarind":{price:1.00,unit:"piece"},"Bread":{price:0.10,unit:"slice"},"Mixed Veggies":{price:0.75,unit:"100g"}, "Parotta": {price: 0.50, unit: "piece"}, "Millet": {price: 0.40, unit: "100g"}, "shallot": {price: 0.1, unit:"piece"}
};

// ====================================================================
// SECTION 2: THE LOGIC (WITH ADVANCED RULES)
// ====================================================================

document.getElementById('generate-button').addEventListener('click', generateWeeklyPlan);

function generateWeeklyPlan() {
    const useLeftovers = document.getElementById('leftovers-checkbox').checked;
    const tiffinNight = document.getElementById('tiffin-night-select').value;
    const quickDinnerDay = document.getElementById('quick-day-select').value;
    const ingredientToAvoid = document.getElementById('avoid-ingredient-input').value.trim().toLowerCase();

    const filterByAvoidance = (meal) => {
        if (!ingredientToAvoid) return true;
        return !meal.ingredients.some(ing => ing.name.toLowerCase().includes(ingredientToAvoid));
    };
    const availableBreakfasts = breakfastOptions.filter(filterByAvoidance);
    const availableDinners = dinnerOptions.filter(filterByAvoidance);
    const availableLunchMains = lunchMains.filter(filterByAvoidance);
    const availableLunchVegSides = lunchVegSides.filter(filterByAvoidance);
    const availableLunchNonVegSides = lunchNonVegSides.filter(filterByAvoidance);

    const weeklyPlan = {};
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let usedBreakfastIds = []; let usedDinnerIds = [];

    daysOfWeek.forEach((day) => {
        const isNoEggDay = (day === 'Tuesday' || day === 'Friday' || day === 'Saturday');
        const isQuickDinner = (day === quickDinnerDay);
        
        let dinner;
        if (day === tiffinNight) {
            dinner = getMeal(availableBreakfasts, usedBreakfastIds, { isNoEggDay });
            if(dinner.id) usedBreakfastIds.push(dinner.id);
        } else {
            dinner = getMeal(availableDinners, usedDinnerIds, { isNoEggDay, isQuickDinner });
            if(dinner.id) usedDinnerIds.push(dinner.id);
        }

        const breakfast = getMeal(availableBreakfasts, usedBreakfastIds, { isNoEggDay });
        if(breakfast.id) usedBreakfastIds.push(breakfast.id);
        
        weeklyPlan[day] = {
            Breakfast: breakfast.meal,
            Lunch: getLunch(isNoEggDay, { availableLunchMains, availableLunchVegSides, availableLunchNonVegSides }),
            Dinner: dinner.meal
        };
    });

    if (useLeftovers && weeklyPlan['Sunday'] && weeklyPlan['Sunday'].Dinner) {
        weeklyPlan['Monday'].Lunch = { mealName: `Leftovers: ${weeklyPlan['Sunday'].Dinner.mealName}` };
        weeklyPlan['Sunday'].Dinner.isLeftoverSource = true;
    }
    
    displayPlan(weeklyPlan);
    const shoppingList = generateShoppingList(weeklyPlan);
    displayShoppingList(shoppingList);
}

function getMeal(mealList, usedIds, rules) {
    let availableMeals = mealList.filter(meal => !usedIds.includes(meal.recipeId));
    if (rules.isNoEggDay) {
        availableMeals = availableMeals.filter(meal => !meal.tags.includes('Contains-Egg'));
    }
    if (rules.isQuickDinner) {
        availableMeals = availableMeals.filter(meal => meal.totalTime <= 40);
    }
    if (availableMeals.length === 0) {
        return { meal: { mealName: "No valid meal found!", ingredients: [] }, id: null };
    }
    const chosenMeal = availableMeals[Math.floor(Math.random() * availableMeals.length)];
    return { meal: chosenMeal, id: chosenMeal.recipeId };
}

function getLunch(isNoEggDay, availableLists) {
    const main = availableLists.availableLunchMains[Math.floor(Math.random() * availableLists.availableLunchMains.length)];
    const vegSide = availableLists.availableLunchVegSides[Math.floor(Math.random() * availableLists.availableLunchVegSides.length)];
    let nonVegSide = null;
    if (!isNoEggDay) {
        nonVegSide = availableLists.availableLunchNonVegSides[Math.floor(Math.random() * availableLists.availableLunchNonVegSides.length)];
    }
    return { Main: main, VegSide: vegSide, NonVegSide: nonVegSide };
}

function getStandardQuantity(ingredient) {
    const { name, quantity, unit } = ingredient;
    const nonVolumeUnits = ['piece', 'clove', 'bunch', 'inch', 'slice', 'shallot'];
    if (nonVolumeUnits.includes(unit) || unit === 'g' || unit === 'ml') {
        return { quantity: quantity, unit: unit };
    }
    const unitCategory = unitConversions[unit];
    if (unitCategory) {
        const conversionFactor = unitCategory[name] || unitCategory.default;
        return { quantity: quantity * conversionFactor, unit: 'g' };
    }
    return { quantity: quantity, unit: unit };
}

function generateShoppingList(weeklyPlan) {
    const shoppingList = {};
    for (const day in weeklyPlan) {
        const dayMeals = weeklyPlan[day];
        let recipesForDay = [dayMeals.Breakfast, dayMeals.Dinner];
        if (dayMeals.Lunch.Main) {
            recipesForDay.push(dayMeals.Lunch.Main, dayMeals.Lunch.VegSide);
            if (dayMeals.Lunch.NonVegSide) recipesForDay.push(dayMeals.Lunch.NonVegSide);
        }
        recipesForDay.forEach(recipe => {
            if (!recipe || !recipe.ingredients) return;
            const multiplier = recipe.isLeftoverSource ? 2 : 1;
            recipe.ingredients.forEach(ing => {
                const standard = getStandardQuantity({ ...ing, quantity: ing.quantity * multiplier });
                if (shoppingList[ing.name]) {
                    shoppingList[ing.name].quantity += standard.quantity;
                    shoppingList[ing.name].units.add(standard.unit);
                } else {
                    shoppingList[ing.name] = { quantity: standard.quantity, units: new Set([standard.unit]) };
                }
            });
        });
    }

    for (const itemName in shoppingList) {
        const item = shoppingList[itemName];
        const priceInfo = ingredientPrices[itemName];
        if (priceInfo) {
            const priceBaseQuantity = parseFloat(priceInfo.unit.match(/\d+/)) || 1;
            const cost = (item.quantity / priceBaseQuantity) * priceInfo.price;
            item.cost = `£${cost.toFixed(2)}`;
        } else {
            item.cost = '£?.??';
        }
    }
    return shoppingList;
}

function displayPlan(weeklyPlan) {
    const container = document.getElementById('weekly-planner-container');
    container.innerHTML = '';
    let html = '<table><tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>';
    for (const day in weeklyPlan) {
        const lunchText = weeklyPlan.Monday.Lunch.mealName || `${weeklyPlan[day].Lunch.Main.mealName} + ${weeklyPlan[day].Lunch.VegSide.mealName}` +
            (weeklyPlan[day].Lunch.NonVegSide ? ` + ${weeklyPlan[day].Lunch.NonVegSide.mealName}` : ' (Veg)');
        html += `<tr><td>${day}</td><td>${weeklyPlan[day].Breakfast.mealName}</td><td>${lunchText}</td><td>${weeklyPlan[day].Dinner.mealName}</td></tr>`;
    }
    html += '</table>';
    container.innerHTML = html;
}

function displayShoppingList(shoppingList) {
    const listElement = document.getElementById('shopping-list');
    const costElement = document.getElementById('total-cost');
    listElement.innerHTML = '';
    let totalCost = 0;
    
    const sortedKeys = Object.keys(shoppingList).sort();

    sortedKeys.forEach(key => {
        const item = shoppingList[key];
        const li = document.createElement('li');
        // Display units more cleanly
        const unitString = Array.from(item.units).join('/');
        li.textContent = `${key}: ${item.quantity.toFixed(1)} ${unitString} (Est. ${item.cost})`;
        listElement.appendChild(li);
        const costValue = parseFloat(item.cost.replace('£', ''));
        if (!isNaN(costValue)) totalCost += costValue;
    });
    costElement.textContent = `Estimated Weekly Cost: £${totalCost.toFixed(2)}`;
}
