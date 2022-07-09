export const apiSucess = (res, data) => {
    log.info('api success', { data });
    return res.status(200).send({ data });
};

export const apiFailure = (res, err, status = 500) => {
    log.info('api failure', { err });
    return res.status(status).send({ err });
};
