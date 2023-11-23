import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseEntity } from '../../../common/response';
import { SurveyFacade } from '../facade/survey.facade';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';
import { RegisterOptionRequest } from '../dto/request/register-option.request';
import { RegisterAnswerRequest } from '../dto/request/register-answer.request';
import { Deprecated } from '../../../common/deprecated.decorator';

@Controller('surveys')
export class SurveyController {
  constructor(private readonly surveyFacade: SurveyFacade) {}

  @Get(':id')
  async getSurvey(@Param('id') id: number) {
    const data = await this.surveyFacade.getSurvey(id);
    return ResponseEntity.builder().setData(data).build();
  }

  @Post()
  async registerSurvey(@Body() request: RegisterSurveyRequest) {
    const data = await this.surveyFacade.registerSurvey(request);
    return ResponseEntity.builder().setData(data).build();
  }

  @Post('questions')
  async registerQuestion(@Body() request: RegisterQuestionRequest) {
    const data = await this.surveyFacade.registerQuestion(request);
    return ResponseEntity.builder().setData(data).build();
  }

  @Post('questions/options')
  async registerOption(@Body() request: RegisterOptionRequest) {
    const data = await this.surveyFacade.registerOption(request);
    return ResponseEntity.builder().setData(data).build();
  }

  @Deprecated('사용되지 않음')
  @Post('questions/options/answers')
  async registerAnswer(@Body() request: RegisterAnswerRequest) {
    const data = await this.surveyFacade.registerAnswer(request);
    return ResponseEntity.builder().setData(data).build();
  }
}
