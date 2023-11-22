import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { SurveyRepository } from '../repository/survey.repository';
import { Survey } from '../entity/survey.entity';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';
import { BadRequestException } from '@nestjs/common';

@AutoInjectable()
export class SurveyService {
  constructor(private readonly surveyRepository: SurveyRepository) {}

  save(request: RegisterSurveyRequest) {
    const survey = Survey.fromRegisterSurveyRequest(request);
    return this.surveyRepository.saveSurvey(survey);
  }

  async findSurvey(id: number) {
    const survey = await this.surveyRepository.findSurveyById(id);
    if (!survey) {
      throw new BadRequestException('Survey not found');
    }
    return survey;
  }
}
