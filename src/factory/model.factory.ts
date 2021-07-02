import {Document, model, Schema, Model} from 'mongoose'
import typeMetadataStorage from '../storage/type-metadata.storage';

export class ModelFactory {
    static createForClass<T extends Function>(target: T): Model<T > {
        const modelName = typeMetadataStorage.getSchemaMetadata(target);
        const schemaMetadata = typeMetadataStorage.getPropertiesDefinition(target);
        const schemaDefinition = new Schema(schemaMetadata)
        return model<T>(modelName, schemaDefinition);
    }
}