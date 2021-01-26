import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Patient', () => {
  
    it('should be throw if name not provided ', async () => {
     await expect(service.createPatient({})).rejects.toThrow();
    });
  
    it('should be throw if called with invalid id ', async () => {
     await expect(service.getPatientById(1)).rejects.toThrow();
    });
  
  
  });

  

});


