const request = require('supertest')
const { app } = require('../../src/app')

describe('User Routes - Integration Tests', () => {
    it('GET /users -> should return all users', async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it('GET /users?even=true -> should return even users', async () => {
        const res = await request(app).get('/users?even=true')
        expect(res.statusCode).toBe(200)
        res.body.forEach((user) => {
            expect(user.id % 2).toBe(0)
        })
    })

    it('GET /users?odd=true -> should return odd users', async () => {
        const res = await request(app).get('/users?odd=true')
        expect(res.statusCode).toBe(200)
        res.body.forEach((user) => {
            expect(user.id % 2).toBe(1)
        })
    })

    it('GET /users/1 -> should return user with id 1', async () => {
        const res = await request(app).get('/users/1')
        expect(res.statusCode).toBe(200)
        expect(res.body).toMatchObject({ id: 1 })
    })

    it('GET /users/999 → should return 404 if user not found', async () => {
        const res = await request(app).get('/users/999')
        expect(res.statusCode).toBe(404)
        expect(res.body).toHaveProperty('error')
    })
})
