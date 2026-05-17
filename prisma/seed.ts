import 'dotenv/config';
import {
  CharacterGender,
  CharacterStatus,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.character.deleteMany();

  await prisma.character.createMany({
    data: [
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick Sanchez',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.MALE,
        description:
          'Mad scientist obsessed with portal guns and interdimensional travel.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        name: 'Morty Smith',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.MALE,
        description:
          'Anxious teenager often dragged into portal adventures by his grandfather.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        name: 'Summer Smith',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.FEMALE,
        description:
          'Social media savvy teen who occasionally joins portal missions.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        name: 'Beth Smith',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.FEMALE,
        description:
          'Horse surgeon balancing family life with occasional sci-fi chaos.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        name: 'Jerry Smith',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.MALE,
        description:
          'Well-meaning but insecure dad with no taste for portal travel.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
        name: 'Birdperson',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.MALE,
        description:
          'Old friend of Rick; veteran warrior who understands portal diplomacy.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/47.jpeg',
        name: 'Gearhead',
        status: CharacterStatus.UNKNOWN,
        gender: CharacterGender.UNKNOWN,
        description:
          'Mechanical ally who prefers wrenchwork over portal theories.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
        name: 'Alien Pilot',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.UNKNOWN,
        description:
          'Spaceship pilot trading routes between colonies; mentions portals rarely.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
        name: 'Cronenberg Survivor',
        status: CharacterStatus.DEAD,
        gender: CharacterGender.FEMALE,
        description:
          'Victim of a dimension-wide outbreak; last notes describe broken portals.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
        name: 'Doctor Wong',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.FEMALE,
        description:
          'Family therapist helping Morty process trauma from portal escapades.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/116.jpeg',
        name: 'Tiny Rick',
        status: CharacterStatus.DEAD,
        gender: CharacterGender.MALE,
        description:
          'Youth clone persona of Rick; loud parties hide existential dread.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/244.jpeg',
        name: 'Portal Tester Unit',
        status: CharacterStatus.UNKNOWN,
        gender: CharacterGender.UNKNOWN,
        description:
          'Automated rig stress-testing portal coils and stabilization fluid.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/249.jpeg',
        name: 'Resistance Scout',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.FEMALE,
        description:
          'Guerrilla fighter scouting Citadel breaches without portal tech.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/267.jpeg',
        name: 'Hivemind Diplomat',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.UNKNOWN,
        description:
          'Collective envoy negotiating portal treaties across federations.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/307.jpeg',
        name: 'Station Engineer',
        status: CharacterStatus.DEAD,
        gender: CharacterGender.MALE,
        description:
          'Maintained fusion cores until a coolant breach ended his shift.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/356.jpeg',
        name: 'Portal Archaeologist',
        status: CharacterStatus.UNKNOWN,
        gender: CharacterGender.FEMALE,
        description:
          'Studies ancient glyphs referencing wormholes predating modern portals.',
      },
      {
        image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
        name: 'Courier Morty',
        status: CharacterStatus.ALIVE,
        gender: CharacterGender.MALE,
        description:
          'Alternate Morty delivering parcels between sealed portal checkpoints.',
      },
    ],
  });

  const count = await prisma.character.count();
  console.log(`Seeded ${count} characters (filters + search keywords covered).`);
}

main()
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
