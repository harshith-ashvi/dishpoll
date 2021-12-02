const initialDishValue = (dishes, id, initialValue) => {
    const dishAvaliable = dishes.find(dish => dish.id === id)
    return dishAvaliable? dishAvaliable.value: initialValue
}

export default initialDishValue