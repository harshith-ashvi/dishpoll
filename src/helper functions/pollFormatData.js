//find all the unique favourite dishes
export const uniqueFavDishes = (allFavDishes) => {
    const uniqFavIds = []
    allFavDishes.forEach(dish => {
        if (!uniqFavIds.includes(dish.id)){
            uniqFavIds.push(dish.id)
        }
    })
    return uniqFavIds
}

//favourite dishes with the total votes/points
export const favDishesUnion = (uniqueDishesId, allFavDishes) => {
    const selectedDishesUnion = []

    for(let i = 0; i < uniqueDishesId.length; i++) {
        const allUniqFavDishes = allFavDishes.filter((dish) => dish.id === uniqueDishesId[i])
        const unionFavDishPoints = allUniqFavDishes.reduce((sum, dish) => sum + dish.value, 0)
        selectedDishesUnion.push({...allUniqFavDishes[0], value: unionFavDishPoints})
    }

    return selectedDishesUnion
}

//get all dishes and with their votes and sort in descending order
export const pollFormatData = (favDish, allDishes) => {
    const selectedDishes = []
    for (const key in favDish) {
        selectedDishes.push(...favDish[key])
    }
    
    const uniqFav = uniqueFavDishes(selectedDishes)

    const unionSelectedDishes = favDishesUnion(uniqFav, selectedDishes)

    //
    const formatDishes = allDishes.map((dish) => {
        if (uniqFav.includes(dish.id)){
            const findDish = unionSelectedDishes.find((favDish) => favDish.id === dish.id)
            return {...findDish}
        } else {
            return {...dish, value: 0}
        }
    })

    formatDishes.sort((a, b) => b.value - a.value)
    return formatDishes
}