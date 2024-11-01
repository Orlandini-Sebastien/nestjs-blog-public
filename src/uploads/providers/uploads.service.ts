import {
  BadRequestException,
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from '../upload.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { UploadFile } from '../interfaces/upload-file.interface';
import { fileType } from '../enums/file-type.enum';

@Injectable()
export class UploadsService {
  constructor(
    /**
     * Inject UploadToAwsProvider
     */
    private readonly uploadToAwsProvider: UploadToAwsProvider,
    /**
     * Inject UploadRepository
     */
    @InjectRepository(Upload)
    private readonly uploadRepository: Repository<Upload>,
    /**
     * Inject ConfigService
     */
    private readonly configService: ConfigService,
  ) {}
  public async uploadFile(file: Express.Multer.File) {
    // Throw error for unsupported MIME types
    if (
      [
        'image/gif',
        'image/jpeg',
        'image/jpg', // souvent redondant avec jpeg mais inclus pour compatibilité
        'image/png',
        'image/svg+xml',
        'image/webp',
        'image/avif',
        'image/bmp',
        'image/tiff',
      ].includes(file.mimetype)
    ) {
      // Le type MIME est supporté
    } else {
      throw new BadRequestException('Mime type not supported');
    }

    try {
      // Upload to the file to aws s3
      const name = await this.uploadToAwsProvider.fileUpload(file);

      // Generate a new entry in db
      const uploadFile: UploadFile = {
        name: name,
        path: `${this.configService.get('appConfig.awsCloudFrontUrl')}/${name}`,
        type: fileType.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };

      const upload = this.uploadRepository.create(uploadFile);

      return await this.uploadRepository.save(upload);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
