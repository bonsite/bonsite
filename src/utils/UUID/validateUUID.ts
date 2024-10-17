import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

export default function validateUUID(uuid: string){

    return uuidValidate(uuid) && uuidVersion(uuid) === 4;

}