import { AutoController } from '@tiny-nestjs/auto-injectable';
import { Body, Post } from '@nestjs/common';
import { ResponseEntity } from '../../../common/response';
import { SurveyFacade } from '../facade/survey.facade';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';

@AutoController('devices')
export class DeviceController {
  constructor(private readonly surveyFacade: SurveyFacade) {}

  @Post()
  async registerSurvey(@Body() request: RegisterSurveyRequest) {
    const data = await this.surveyFacade.registerSurvey(request);
    return ResponseEntity.builder().setData(data).build();
  }
}
