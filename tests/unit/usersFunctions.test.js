const {
    USERS,
    getAllUsers,
    getEvenUsers,
    getOddUsers,
    getUser,
} = require('../../src/app')

describe('User Functions - Unit Tests', () => {
    describe('getAllUsers()', () => {
        it('returns all users', () => {
            const users = getAllUsers()
            expect(users).toHaveLength(USERS.length)
        })
    })

    describe('getEvenUsers()', () => {
        it('returns only users with even ids', () => {
            const users = getEvenUsers()
            users.forEach((user) => expect(user.id % 2).toBe(0))
        })
    })

    describe('getOddUsers()', () => {
        it('returns only users with odd ids', () => {
            const users = getOddUsers()
            users.forEach((user) => {
                expect(user.id % 2).toBe(1)
            })
        })
    })
    describe('getUser()', () => {
        it('returns correct user by ID', () => {
            expect(getUser(1)).toMatchObject({ id: 1 })
        })
        it('returns undefined if user not found', () => {
            expect(getUser(999)).toBeUndefined()
        })
    })
})
