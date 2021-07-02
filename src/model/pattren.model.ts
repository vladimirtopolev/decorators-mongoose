import {ModelFactory} from '../factory/model.factory';
import {Schema} from '../decorators/schema.decorator';
import {Prop} from '../decorators/prop.decorator';

@Schema()
export class Pattern {
    @Prop()
    name: string;

    @Prop()
    count: number;

    @Prop({type: String, required: true})
    description: string;
}

export const PatternModel = ModelFactory.createForClass(Pattern);