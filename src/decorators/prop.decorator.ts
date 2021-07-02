import mongoose from 'mongoose';
import 'reflect-metadata';
import typeMetadataStorage from '../storage/type-metadata.storage';

export type PropOptions<T = any> = any;

export function Prop(options?: PropOptions): PropertyDecorator {
    return (target, propertyKey) => {
        typeMetadataStorage.addPropertyMetadata(
            target.constructor,
            propertyKey,
            options || {type: Reflect.getMetadata('design:type', target, propertyKey)}
        )
    };
}