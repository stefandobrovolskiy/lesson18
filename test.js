const request = require('supertest');
const app = require('./index');

describe('Test the server endpoints', () => {
    it('should respond with success on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Ласкаво просимо до мого додатку!');
    });

    it('should respond with success on POST /fork', async () => {
        const response = await request(app).post('/fork');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Репозиторій успішно форкнутий!');
    });

    it('should respond with success on POST /pull-request', async () => {
        const response = await request(app).post('/pull-request');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Пул-реквест успішно створений!');
    });
});
