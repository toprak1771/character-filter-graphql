import { Injectable } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { CharacterFilterInput } from './dto/character-filter.input';

@Injectable()
export class CharactersService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  findAll(filter?: CharacterFilterInput) {
    return this.characterRepository.findManyFiltered(filter);
  }
}
