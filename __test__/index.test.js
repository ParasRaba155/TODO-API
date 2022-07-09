import supertest from 'supertest';
import app from '@server';
import log from '@utils/logger.js';



describe('app tests', () => {
    it('should have GET router at /', async () => {
        const res = await supertest(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toStrictEqual(
            'Tntra Todo app at your service !!!'
        );
        expect(log._level).toBe(30);  // level 30 for info
        // expect(log).toContain('Server is running');
    });
    // it('should log on connecting at /', () => {
    //     expect(log._level).toBe(30);  // level 30 for info
    //     expect(log).toContain('Server is running');
    // });

});
