import { DocumentBuilder } from '@nestjs/swagger';
export const swaggerPath = 'docs';
export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('Parking Lot Management App')
  .setDescription(
    'Sample application for Parking Management System\n\n## Congratulations! Your application is ready.',
  )
  .setVersion('1')
  .build();

export const swaggerSetupOptions = {
  customSiteTitle: 'Parking Lot Management App',
};
