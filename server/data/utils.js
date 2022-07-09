export const createItem = async (model, args) => {
    try {
        return model.create(args);
    } catch (err) {
        log.info(err);
        throw err;
    }
};

export const getAllItems = async model => {
    try {
        return model.find({});
    } catch (err) {
        log.info(err);
        throw err;
    }
};

export const getItemById = async (model, args) => {
    try {
        return model.findOne(args);
    } catch (err) {
        log.info(err);
        throw err;
    }
};

export const patchItemById = async ({ model, ...args }) => {
    try {
        return model.updateOne({ _id: args._id }, args.body);
    } catch (err) {
        log.info(err);
        throw err;
    }
};

export const deleteItemByID = async ({ model, ...args }) => {
    try {
        return model.deleteOne({ _id: args._id });
    } catch (err) {
        log.info(err);
        throw err;
    }
};
