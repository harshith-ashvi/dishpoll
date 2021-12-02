const findDishPoints = (dishes, value) => {
    const dishValue = dishes.find(dish => dish.value === value)
    return dishValue? dishValue.dishName : "Not Selected"
}

export default findDishPoints