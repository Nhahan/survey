import { Survey } from '../entity/survey.entity';
import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';

@CustomRepository({ entity: Survey })
export class SurveyRepository extends Repository<Survey> {
  saveSurvey(survey: Survey) {
    return this.save(survey);
  }

  findSurveyById(id: number) {
    return this.findOne({ where: { id } });
  }
}
