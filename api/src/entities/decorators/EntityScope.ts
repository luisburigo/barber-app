enum EntityScopeEnum {
    DATABASE,
    GLOBAL
}

function EntityScope(scope: EntityScopeEnum) {
    return (constructor) => {
        constructor.scope = scope;
    }
}

export {EntityScopeEnum, EntityScope};
