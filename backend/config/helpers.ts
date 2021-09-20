export const getFilesPathesByKey = (keySubstr: string, obj: any) => {
    const keyList = Object.keys(obj).filter(key => key.includes(keySubstr))
    return keyList.map(key => obj[key])
}
