function getDefaultValue(key, emphasis?) {
    let ret:string;
    if(key === 'name') {
        ret = 'GuangWong';
    }else if(key === 'gender') {
        ret = 'Man';
    }else if(key === 'age') {
        ret = 23;
    }else {
        throw new Error('Unkown key ' + key);
    }

    if(emphasis) {
        ret = ret.toUpperCase();
    }
    return ret;
}

getDefaultValue('name');
getDefaultValue('gender',true);
getDefaultValue('age', true);