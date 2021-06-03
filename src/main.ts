
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BMI Calculator ')
    .setDescription('[{"gender":"Male","height":171,"weight":96},{"gender":"Male","height":161,"weight":85},{"gender":"Male","height":180,"weight":77},{"gender":"Female","height":166,"weight":62},{"gender":"Female","height":150,"weight":70},{"gender":"Female","height":167,"weight":82}]')
    .setVersion('1.0')
    .addTag('use above json as sample input. Expend POST / . click on try out button. paste json in textbox. click execute. see outout!')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}
bootstrap();
