export const findDishPointsViaValue = (dishes, value) => {
    const dishValue = dishes.find(dish => dish.value === value)
    return dishValue? dishValue.dishName : "Not Selected"
}

export const findDishPointsViaId = (dishes, id) => {
    const dishValue = dishes.find(dish => dish.id === id)
    return dishValue? dishValue.value : 0
}
