export const getDateFromToday = (days: number) => {
    const today = new Date()
    const sevenDaysFromNow = today.setDate(today.getDate() - days)
    return new Date(sevenDaysFromNow).toISOString().slice(0, 10).toString() //formatting the date
}
