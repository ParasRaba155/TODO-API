import {createItem, getAllItems, getItemById, patchItemById,deleteItemByID} from "@data/utils";

const mockModel = {
    create : (args) =>{
        return args;
    },
    find : (args = {}) => {
        return args;
    },
    findOne : (args) =>{
        return args;
    },
    updateOne : (args) =>{
        return args;
    },
    deleteOne : (args) =>{
        return args;
    }

}

describe('Data utility test for createItem', () =>{
    it('should create item', async () =>{
        const mockArgs = `mockArgs`;
        expect(await createItem(mockModel,mockArgs)).toEqual("mockArgs");
    });
});

describe('Data utility test for getAllItems', () =>{
    it('Should get all the items', async () =>{
        expect(await getAllItems(mockModel)).toEqual({});
    })
});

describe('Data utility test for getItemByID', () =>{
    it('should get a single item', async () =>{
        const mockArgs = `mockArgs`;
        expect(await getItemById(mockModel,mockArgs)).toEqual("mockArgs");
    });
});

describe('Data utility test for patchItemById', () =>{
    it('should get a single item', async () =>{
        expect(await patchItemById({
            model : mockModel,
            _id : "mockId",
            body : {
                "desc" : "Mock body"
            }
        })).toEqual({_id : "mockId"});
    });
});

describe('Data utility test for deleteItemByID', () =>{
    it('should get a single item', async () =>{
        expect(await deleteItemByID({
            model : mockModel,
            _id : "mockId",
            body : {
                "desc" : "Mock body"
            }
        })).toEqual({_id : "mockId"});
    });
});