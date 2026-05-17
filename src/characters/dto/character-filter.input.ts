import { Field, InputType } from '@nestjs/graphql';
import { CharacterGender, CharacterStatus } from '@prisma/client';

@InputType()
export class CharacterFilterInput {
  @Field(() => CharacterStatus, {
    nullable: true,
    description:
      'Tek status (geriye dönük). Birden fazla için `statuses` kullanın.',
  })
  status?: CharacterStatus;

  @Field(() => CharacterGender, {
    nullable: true,
    description:
      'Tek gender (geriye dönük). Birden fazla için `genders` kullanın.',
  })
  gender?: CharacterGender;

  @Field(() => [CharacterStatus], {
    nullable: true,
    description: 'Birden fazla status (OR — listedekilerden biri)',
  })
  statuses?: CharacterStatus[];

  @Field(() => [CharacterGender], {
    nullable: true,
    description: 'Birden fazla gender (OR — listedekilerden biri)',
  })
  genders?: CharacterGender[];

  @Field({
    nullable: true,
    description: 'Case-insensitive search in name and description',
  })
  search?: string;
}
