// Importation des modules de test de NestJS et des providers nécessaires
import { Test, TestingModule } from '@nestjs/testing';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { CreateUserProvider } from './create-user.provider';
import { DataSource } from 'typeorm';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { User } from '../user.entity';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

// Début du groupe de tests pour `UsersService`
describe('UsersService', () => {
  let service: UsersService;

  // Cette fonction est exécutée avant chaque test pour initialiser le module de test et injecter les dépendances
  beforeEach(async () => {
    // Création d'un mock pour `CreateUserProvider`, simulant la méthode `createUser`
    const mockCreateUserProvider: Partial<CreateUserProvider> = {
      createUser: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 12, // ID fictif de l'utilisateur
          firstName: createUserDto.firstName, // Récupère le prénom donné
          lastName: createUserDto.lastName, // Récupère le nom donné
          email: createUserDto.email, // Récupère l'email donné
          password: createUserDto.password, // Récupère le mot de passe donné
        }),
    };

    // Création du module de test avec les providers nécessaires pour `UsersService`
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService, // Service principal que nous voulons tester
        // Injection du mock de `CreateUserProvider`
        { provide: CreateUserProvider, useValue: mockCreateUserProvider },
        // Injection de dépendances supplémentaires avec des valeurs vides, car elles ne sont pas testées ici
        { provide: DataSource, useValue: {} },
        { provide: getRepositoryToken(User), useValue: {} },
        { provide: UsersCreateManyProvider, useValue: {} },
        { provide: FindOneUserByEmailProvider, useValue: {} },
        { provide: FindOneByGoogleIdProvider, useValue: {} },
        { provide: CreateGoogleUserProvider, useValue: {} },
      ],
    }).compile();

    // Récupération d'une instance de `UsersService` à partir du module de test
    service = module.get<UsersService>(UsersService);
  });

  // Test de base pour vérifier que `UsersService` est bien défini
  it('Should be defined', () => {
    expect(service).toBeDefined(); // Vérifie que le service est instancié correctement
  });

  // Groupe de tests pour la méthode `createUser`
  describe('createUser', () => {
    // Vérifie que la méthode `createUser` est bien définie sur `UsersService`
    it('should be defined', () => {
      expect(service.createUser).toBeDefined();
    });

    // Test du fonctionnement de `createUser` en utilisant le mock `CreateUserProvider`
    it('Should call createUser on CreateUserProvider', async () => {
      // Appelle la méthode `createUser` avec un utilisateur fictif
      let user = await service.createUser({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: 'password',
      });

      // Vérifie que le prénom de l'utilisateur retourné correspond à celui fourni
      expect(user.firstName).toEqual('John');
    });
  });
});
