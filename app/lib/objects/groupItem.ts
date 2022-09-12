export default class GroupItem {
    id: number
    name: string
    lockDate: Date
    constructor(id: number, name: string, lockDate: Date) {
        this.id = id
        this.name = name
        this.lockDate = lockDate
    }
}