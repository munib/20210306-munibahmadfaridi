"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_datasoruce_1 = require("./app.datasoruce");
let AppService = class AppService {
    calculator(createBmiDto) {
        return this.addBodyMassIndex(createBmiDto);
    }
    addBodyMassIndex(bmiDto) {
        return bmiDto.map(bmi => {
            const bmiValue = (bmi.weight / (bmi.height / 100 * bmi.height / 100));
            let index = 0;
            if (bmiValue >= 18.5)
                index = 1;
            if (bmiValue >= 25)
                index = 2;
            if (bmiValue >= 30)
                index = 3;
            if (bmiValue >= 35)
                index = 4;
            if (bmiValue >= 40)
                index = 5;
            bmi.bmiValue = bmiValue.toFixed(2);
            bmi.bmiCategory = app_datasoruce_1.BMI_CONSTANT[index].category;
            bmi.bmiRange = app_datasoruce_1.BMI_CONSTANT[index].range;
            bmi.healthRisk = app_datasoruce_1.BMI_CONSTANT[index].risk;
            return bmi;
        });
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map