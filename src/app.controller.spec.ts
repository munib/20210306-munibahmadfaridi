import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TEST_DATA } from './app.datasource';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "updated CreateBmiDto Object"', () => {
      const received = TEST_DATA.received;
      const expected = TEST_DATA.expected;
      expect(appController.BmiCalculator(received)).toEqual(expected);
    });
  });
});
