import { Module } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';
import './register-enums';

@Module({
  providers: [CharacterRepository, CharactersService, CharactersResolver],
})
export class CharactersModule {}
