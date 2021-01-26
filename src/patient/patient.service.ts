import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {

    async createPatient({ }: any): Promise<void> {
        throw new Error();
    }

    async getPatientById(id: number): Promise<void> {
        throw new Error();
    }

}
