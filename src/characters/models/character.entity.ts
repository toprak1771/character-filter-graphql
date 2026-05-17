import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CharacterGender, CharacterStatus } from '@prisma/client';

@ObjectType('Character')
export class CharacterEntity {
  @Field(() => Int)
  id: number;

  @Field()
  image: string;

  @Field()
  name: string;

  @Field(() => CharacterStatus)
  status: CharacterStatus;

  @Field(() => CharacterGender)
  gender: CharacterGender;

  @Field()
  description: string;
}
