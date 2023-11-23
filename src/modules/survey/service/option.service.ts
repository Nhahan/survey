import { Option } from '../entity/option.entity';
import { RegisterOptionRequest } from '../dto/request/register-option.request';
import { OptionRepository } from '../repository/option.repository';
import { Question } from '../entity/question.entity';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepository: OptionRepository) {}

  save(request: RegisterOptionRequest, question: Question) {
    const option = Option.fromRegisterOptionRequest(request, question);
    return this.optionRepository.saveOption(option);
  }

  async findOption(id: number) {
    const option = await this.optionRepository.findOptionById(id);
    if (!option) {
      throw new BadRequestException('Option not found');
    }
    return option;
  }
}
