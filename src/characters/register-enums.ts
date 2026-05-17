import { registerEnumType } from '@nestjs/graphql';
import { CharacterGender, CharacterStatus } from '@prisma/client';

registerEnumType(CharacterStatus, { name: 'CharacterStatus' });
registerEnumType(CharacterGender, { name: 'CharacterGender' });
