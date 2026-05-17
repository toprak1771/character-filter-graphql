import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { CharacterFilterInput } from './dto/character-filter.input';
import { CharacterEntity } from './models/character.entity';

@Resolver(() => CharacterEntity)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [CharacterEntity], { name: 'characters' })
  characters(
    @Args('filter', { type: () => CharacterFilterInput, nullable: true })
    filter?: CharacterFilterInput,
  ) {
    return this.charactersService.findAll(filter);
  }
}
