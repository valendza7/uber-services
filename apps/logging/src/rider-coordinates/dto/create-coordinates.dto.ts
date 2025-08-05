import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createCoordinatesDTO {

    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsNumber()
    @IsNotEmpty()
    long: number;

    @IsString()
    @IsNotEmpty()
    riderId: string;
}