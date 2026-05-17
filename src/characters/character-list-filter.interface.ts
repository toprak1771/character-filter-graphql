import { CharacterGender, CharacterStatus } from '@prisma/client';

/** GraphQL `CharacterFilterInput` ile aynı alanlar (decorator’sız — tip güvenliği için). */
export interface CharacterListFilter {
  status?: CharacterStatus | null;
  gender?: CharacterGender | null;
  statuses?: CharacterStatus[] | null;
  genders?: CharacterGender[] | null;
  search?: string | null;
}
