export const getFavorites = () => {
    const savedFavorites = JSON.parse(
        localStorage.getItem('favorites') || '[]',
    ) as number[]

    return savedFavorites
}

export const isFavorite = (value: number) => {
    const favoritesList = getFavorites()

    return !!favoritesList?.find((repoId) => repoId === value)
}

export const switchFavorite = (value: number) => {
    const favoritesList = getFavorites()
    const filteredValue = favoritesList?.filter((repoId) => repoId !== value)
    const hasTheSameSize = filteredValue.length === favoritesList.length

    if (hasTheSameSize) {
        filteredValue.push(value)
    }

    localStorage.setItem('favorites', JSON.stringify(filteredValue))
    return hasTheSameSize
}
