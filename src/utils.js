const restructureData = (data) => {
    return data.reduce((acc, cur, i) => {
        acc[cur.category] = acc[cur.category] ? [...acc[cur.category], cur ] : [cur] ;
        return acc;
    }, {});
};

export default restructureData;