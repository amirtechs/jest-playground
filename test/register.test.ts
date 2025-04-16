import { validRegisterData } from "../src/constant/registerData";
import { registerUser } from "../src/step/registerStep";

describe('User Registration API', () => {

    it('should register successfully with valid email and password', async () => {
        // Await the asynchronous function
        const response = await registerUser(validRegisterData);
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('token');
    });
});