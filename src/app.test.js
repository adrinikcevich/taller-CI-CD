const { USERS, getAllUsers, getEvenUsers, getOddUsers, getUser } = require('./app')

describe('Functions Tests', () => {
    describe('getAllUsers test', () => {
        it('should return all users', () => {
            const users = getAllUsers()
            expect(users).toHaveLength(USERS.length)
            expect(users[0]).toHaveProperty('id')
            expect(users[0]).toHaveProperty('name')
        })
        it('should return an array', () => {
            const users = getAllUsers()
            expect(Array.isArray(users)).toBe(true)
        })
    })

    describe('getEvenUsers test', () => {
        it('should return only even users', () => {
            const users = getEvenUsers()
            users.forEach((user) => {
                expect(user.id % 2).toBe(0)
            })
        })

        it('should return an array', () => {
            const users = getEvenUsers()
            expect(Array.isArray(users)).toBe(true)
        })
    })

    describe('getOddUsers test', () => {
        it('should return only odd users', () => {
            const users = getOddUsers()
            users.forEach((user) => {
                expect(user.id % 2).toBe(1)
            })
        })

        it('should return an array', () => {
            const users = getOddUsers()
            expect(Array.isArray(users)).toBe(true)
        })
    })
    describe('getUser test', () => {
        it('should return a user', () => {
            const user = getUser(1)
            expect(user).toHaveProperty('id')
            expect(user).toHaveProperty('name')
        })
        it('should return undefined if user not found', () => {
            const user = getUser(999999)
            expect(user).toBeUndefined()
        })
        it('should return an object', () => {
            const user = getUser(1)
            expect(typeof user).toBe('object')
        })
        it('should return a user with the correct id', () => {
            const user = getUser(1)
            expect(user.id).toBe(1)
        })
    })
})

