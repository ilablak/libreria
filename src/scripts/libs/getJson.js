export async function getJson(param) {
    let dataList = []
    const response = await fetch(param)
    const articlesJson = await response.json()

    for (const item of articlesJson) {
        dataList.push(item)
    }
    return dataList
}