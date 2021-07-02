import typeMetadataStorage from '../storage/type-metadata.storage';

export type SchemaOptions  = {
    name: string
}
export const Schema = (options?: SchemaOptions): ClassDecorator => {
    return (target) => {
        typeMetadataStorage.addSchemaMetadata(target, options);
    }
}