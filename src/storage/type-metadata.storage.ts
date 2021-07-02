import {SchemaOptions} from '../decorators/schema.decorator';
import {PropOptions} from '../decorators/prop.decorator';

class TypeMetadataStorage {
    schemas: Map<Function, SchemaOptions | null | undefined> = new Map();
    properties: Array<{ target: Function, propertyKey: string | symbol, options: PropOptions }> = [];

    addSchemaMetadata = (target: Function, options?: SchemaOptions) => {
        this.schemas.set(target, options || {name: target.name});
    };

    getSchemaMetadata = (target: Function): string => {
        const schemaMetadata = this.schemas.get(target);
        if (!schemaMetadata) {
            throw new Error(`Forget to put Schema decorator for class ${target.name}`);
        }
        return schemaMetadata.name;
    };

    addPropertyMetadata = (target: Function, propertyKey: string | symbol, options: PropOptions) => {
        this.properties.push({target, propertyKey, options});
    };

    getPropertiesDefinition = (target: Function) => {
        return this.properties.reduce((memo, property) => property.target === target ? {
            ...memo,
            [property.propertyKey]: property.options
        } : memo, {});
    };

}

export default new TypeMetadataStorage();



