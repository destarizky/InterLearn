# Backend - InterLearn

## Endpoint Register & Login

### Register
- `POST /api/auth/register
  - Deskripsi: Untuk registrasi user baru.
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "nama": "user",
      "email": "user@test.com",
      "password": "user_password",
      "role": "user_role"
    }
    ```
        
  - Response:
    ```json
    {
      "message": "Registrasi berhasil"
    }
    ```
    
### Login
- `POST /api/auth/login
  - Deskripsi: Untuk login user.
  - Headers: Content-Type: application/json
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "email": "user@test.com",
      "password": "user_password"
    }
    ```
        
  - Response:
    ```json
    {
      "token": "eyJhbG...........dJAf0",
      "role": "user_role"
    }
    ```


---
