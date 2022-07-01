import request from 'supertest'
import { app } from '../../../index'
import fs from 'fs'
import sharpResize from '../../../utility/sharpResize'

describe('GET /api/images', () => {
  describe('user enter a valid endpoint : /api/images?filename=encenadaport&width=250&height=250', () => {
    it('should respond with a jpeg image', async () => {
      const response = await request(app).get(
        '/api/images?filename=encenadaport&width=250&height=250'
      )
      expect(response.headers['content-type']).toBe('image/jpeg')
    })
    it('should create a resized image', async () => {
      const filepath = './assets/images/thumb/encenadaport-250x250.jpg'
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
        console.log('File deleted')
      }
      await sharpResize('encenadaport', 250, 250)
      expect(fs.existsSync(filepath)).toBeTruthy()
      fs.unlinkSync(filepath)
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
