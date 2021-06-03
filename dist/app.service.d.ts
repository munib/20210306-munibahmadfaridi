import { CreateBmiDto } from './app.interface';
export declare class AppService {
    calculator(createBmiDto: CreateBmiDto[]): CreateBmiDto[];
    addBodyMassIndex(bmiDto: CreateBmiDto[]): CreateBmiDto[];
}
