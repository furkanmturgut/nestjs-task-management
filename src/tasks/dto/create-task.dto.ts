/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

// npm add class-validator class-transformer
export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;
}