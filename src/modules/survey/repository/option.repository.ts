import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Option } from '../entity/option.entity';
import { SQL_ERROR } from '../../../common/error/error.constant';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';

@CustomRepository({ entity: Option })
export class OptionRepository extends Repository<Option> {
  saveOption(option: Option) {
    try {
      return this.save(option);
    } catch (e) {
      if (e.code === SQL_ERROR.ER_DUP_ENTRY) {
        throw new BadRequestException('Option already exists');
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  findOptionById(id: number) {
    return this.findOne({ where: { id } });
  }
}
