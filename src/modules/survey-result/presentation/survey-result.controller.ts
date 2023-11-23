import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseEntity } from '../../../common/response';
import { SurveyResultResponse } from '../dto/survey-result.request';
import { SurveyResultFacade } from '../facade/survey-result.facade';

@Controller('survey-results')
export class SurveyResultController {
  constructor(private readonly surveyResultFacade: SurveyResultFacade) {}

  @Get('id')
  async getSurveyResult(@Param('id') id: number) {
    const data = await this.surveyResultFacade.getSurveyResult(id);
    return ResponseEntity.builder().setData(data).build();
  }

  @Post()
  async registerSurveyResult(@Body() request: SurveyResultResponse) {
    const data = await this.surveyResultFacade.registerSurveyResult(request);
    return ResponseEntity.builder().setData(data).build();
  }
}
