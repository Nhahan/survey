import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Option } from '../entity/option.entity';

@CustomRepository({ entity: Option })
export class OptionRepository extends Repository<Option> {
  saveOption(option: Option) {
    return this.save(option);
  }

  findOptionById(id: number) {
    return this.findOne({ where: { id } });
  }
}
