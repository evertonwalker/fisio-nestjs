import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {

    async createPatient({ }: any): Promise<void> {
        throw new Error();
    }

    async getPatientById(id): Promise<void> {


        if (isNaN(+id)) {
            throw new BadRequestException();
        } else {

        }

    }

}
