import { CreateBmiDto } from './app.interface';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    BmiCalculator(createBmiDto: CreateBmiDto[]): CreateBmiDto[];
}
