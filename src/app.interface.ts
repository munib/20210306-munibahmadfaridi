import { ApiProperty } from '@nestjs/swagger';

export class CreateBmiDto {
    @ApiProperty()
    gender: string;
    @ApiProperty()
    height: number;
    @ApiProperty()
    weight: number;
    bmiValue?: string;
    bmiCategory?: string;
    bmiRange?: string;
    healthRisk?: string;
}