import supertest from "supertest";
import app from '@server';
import * as daos from '@data/utils';

describe('task route tests', () =>{
    it('should get all the itmes on get method', async () => {
        let data = [
            {
                "_id": "dummyId1",
                "name": "Task2.2",
                "status": "Pending",
                "__v": 0
            },
            {
                "_id": "dummyId2",
                "name": "Task2",
                "status": "Pending",
                "__v": 0
            }
        ]
        jest.spyOn(daos,'getAllItems').mockResolvedValueOnce(data);
        const res = await supertest(app).get('/tasks');
        expect(res.status).toEqual(200);
        expect(res.body.data).toEqual(data);
    });

    it('should create an item on post method', async () => {
        let data = {
            "name" : "Dummy Task",
            "status" : "Done"
        }
        jest.spyOn(daos,'createItem').mockResolvedValueOnce(data);
        const res = await supertest(app).post('/tasks').send(data);
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toEqual(data);
    });
    it('should throw an error on posting empty object', async () =>{
        const res = await supertest(app).post('/tasks').send({});
        expect(res.statusCode).toEqual(500);
        expect(res.body.err).toContain('is required.');
    });
});

