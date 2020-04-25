export interface TypedTransformer<TEntity, TDatabase> {
    to: (entityValue: TEntity) => TDatabase;
    from: (databaseValue: TDatabase) => TEntity;
}

export const dateTransformer: TypedTransformer<Date, string> = {
    to: (value: Date) => {
        if (value instanceof Date) {
            return value.toISOString()
        }
        return value || null
    },
    from: (value: string) => {
        return value ? new Date(value) : null;
    }
};
