import mongoose from 'mongoose';
import {PatternModel} from './model/pattren.model';

mongoose.connect(
    'mongodb://localhost:27017',
    {dbName: 'decorators'}
).then(async () => {
    await PatternModel.create({description: 'sdsd', name: 'sdsd', count: 1})
});