import { Injectable } from '@nestjs/common';
import { CreateBmiDto } from './app.class';
import { AppModule } from './app.module';
import { BMI_CONSTANT } from './app.constant'

@Injectable()
export class AppService {

  calculator(createBmiDto: CreateBmiDto[]): CreateBmiDto[] {
    return this.addBodyMassIndex(createBmiDto)
  }

  addBodyMassIndex(bmiDto: CreateBmiDto[]): CreateBmiDto[] {

    return bmiDto.map(bmi => {

      const bmiValue = (bmi.weight / (bmi.height / 100 * bmi.height / 100));
      let index = 0;

      if (bmiValue >= 18.5) index = 1;
      if (bmiValue >= 25) index = 2;
      if (bmiValue >= 30) index = 3;
      if (bmiValue >= 35) index = 4;
      if (bmiValue >= 40) index = 5;

      bmi.bmiValue = bmiValue.toFixed(2);
      bmi.bmiCategory = BMI_CONSTANT[index].category;
      bmi.bmiRange = BMI_CONSTANT[index].range;
      bmi.healthRisk = BMI_CONSTANT[index].risk;

      return bmi
    })
  }

}
