import { Field, InputType } from '@nestjs/graphql';
import { CharacterGender, CharacterStatus } from '@prisma/client';

@InputType()
export class CharacterFilterInput {
  @Field(() => CharacterStatus, {
    nullable: true,
    description: 'Filter by life status',
  })
  status?: CharacterStatus;

  @Field(() => CharacterGender, {
    nullable: true,
    description: 'Filter by gender',
  })
  gender?: CharacterGender;

  @Field({
    nullable: true,
    description: 'Case-insensitive search in name and description',
  })
  search?: string;
}
