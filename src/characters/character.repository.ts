import { Injectable } from '@nestjs/common';
import { Character, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CharacterListFilter } from './character-list-filter.interface';

@Injectable()
export class CharacterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findManyFiltered(filter?: CharacterListFilter): Promise<Character[]> {
    const where: Prisma.CharacterWhereInput = {};

    const statuses = filter?.statuses;
    if (statuses != null && statuses.length > 0) {
      where.status = { in: statuses };
    } else if (filter?.status !== undefined && filter.status !== null) {
      where.status = filter.status;
    }

    const genders = filter?.genders;
    if (genders != null && genders.length > 0) {
      where.gender = { in: genders };
    } else if (filter?.gender !== undefined && filter.gender !== null) {
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
