export const restructureData = (data) => {
    return data.reduce((acc, cur) => {
        acc[cur.category] = acc[cur.category] ? [...acc[cur.category], cur ] : [cur];
        return acc;
    }, {});
};

export const restructureByID = (data) => {
    return data.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
    }, {});
};