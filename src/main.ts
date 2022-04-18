import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { swaggerDocumentOptions, swaggerPath, swaggerSetupOptions } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  app.setGlobalPrefix('api')
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true
    })
  )

  // const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app)

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions)
  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions)

  await app.listen(3000);
}
bootstrap();
