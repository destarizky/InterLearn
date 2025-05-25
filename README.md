# Dokumentasi API - InterLearn

## Endpoint Register & Login

### Register User
- `POST /api/auth/register`
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
    
### Login User
- `POST /api/auth/login`
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

## Endpoint Materi

### Tampilkan Semua Materi
- `GET /api/materi`
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
    
### Tambah Materi Baru
- `POST /api/materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "judul": "Belajar Node.js",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [
        {
          "pertanyaan": "Apa itu .....?",
          "opsi": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
          "jawabanBenar": "Runtime"
        }
      ]
    }
    ```
        
  - Response:
    ```json
    {
      "judul": "Belajar Node.js",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [
          {
              "pertanyaan": "Apa itu .....?",
              "opsi": [
                  "Opsi A",
                  "Opsi B",
                  "Opsi C",
                  "Opsi D"
              ],
              "jawabanBenar": "Runtime",
                "_id": "910...123"
          }
      ],
      "dibuatOleh": "id_user",
      "_id": "123...910"
      }
    ```

### Edit Materi 
- `PUT /api/materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Form-data:
    - Body > Raw
  - JSON:
      ```json
    {
      "judul": "Belajar Node.js (update)",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [
        {
          "pertanyaan": "Apa itu .....?",
          "opsi": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
          "jawabanBenar": "(update)"
        }
      ]
    }
    ```
        
  - Response:
    ```json
    {
      "judul": "Belajar Node.js (update)",
      "deskripsi": "Pengantar backend JS",
      "videoUrl": "https://youtube.com/xyz",
      "teksPenjelasan": "Node.js adalah runtime...",
      "quiz": [
          {
              "pertanyaan": "Apa itu .....?",
              "opsi": [
                  "Opsi A",
                  "Opsi B",
                  "Opsi C",
                  "Opsi D"
              ],
              "jawabanBenar": "(update)",
                "_id": "910...123"
          }
      ],
      "dibuatOleh": "id_user",
      "_id": "123...910"
      }
    ```

### Hapus Materi 
- `PUT /api/materi/id_materi`
  - Headers: Content-Type: application/json
  - Authorization : Bearer Token
  - Response:
    ```json
    {
      "message": "Materi dihapus"
    }
    ```
    
---
