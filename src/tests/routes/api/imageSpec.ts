import request from 'supertest'
import { app } from '../../../index'

describe('GET /api/images', () => {
  describe('user enter a valid endpoint : /api/images?filename=encenadaport&width=250&height=250', () => {
    it('should respond with a jpeg image', async () => {
      const response = await request(app).get(
        '/api/images?filename=encenadaport&width=250&height=250'
      )
      expect(response.headers['content-type']).toBe('image/jpeg')
    })
  })
  describe('user enter an invalid endpoint : /api/images?filename=encenadaport&width=250&height=250', () => {
    it('should respond with error 404', async () => {
      const response = await request(app).get(
        '/api/images?filename=unknown&width=250&height=250'
      )
      expect(response.status).toBe(404)
    })
  })
})
