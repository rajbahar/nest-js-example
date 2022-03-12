// import * as mongoose from 'mongoose';
// export const Product = new mongoose.Schema({ title: String });

// export interface IProduct {
//   title: string;
// }


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Rook & Document;

@Schema()
export class Rook {

    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    publishYear: number;
}

export const BookSchema = SchemaFactory.createForClass(Rook);