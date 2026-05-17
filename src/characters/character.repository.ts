import { Injectable } from '@nestjs/common';
import { Character, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CharacterFilterInput } from './dto/character-filter.input';

@Injectable()
export class CharacterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findManyFiltered(filter?: CharacterFilterInput): Promise<Character[]> {
    const where: Prisma.CharacterWhereInput = {};

    if (filter?.status !== undefined && filter?.status !== null) {
      where.status = filter.status;
    }
    if (filter?.gender !== undefined && filter?.gender !== null) {
      where.gender = filter.gender;
    }

    const q = filter?.search?.trim();
    if (q) {
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { description: { contains: q, mode: 'insensitive' } },
      ];
    }

    return this.prisma.character.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }
}
