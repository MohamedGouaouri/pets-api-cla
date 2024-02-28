

### Users API

#### 1. **Get User Information**
   - **Endpoint:** `GET /users/{userId}`
   - **Description:** Retrieve information about a specific user.
   - **Parameters:**
     - `userId` (path parameter) - ID of the user to retrieve.
   - **Response:**
     ```json
     {
       "userId": 1,
       "name": "John",
       "sexe": "male",
       "age": 26,
       "pets": []
     }
     ```
   - **Response statuses:**
     - 200 Success: success
     - 404 Not Found: User not found.

#### 2. **Create User**
   - **Endpoint:** `POST /users`
   - **Description:** Create a new user.
   - **Request Body:**
     ```json
     {
       "name": "new_user",
       "sexe": "male",
       "age": 26
     }
     ```
   - **Response:**
     ```json
     {
       "userId": 2,
       "name": "new_user",
       "sexe": "male",
       "age": 26,
       "pets": []
     }
     ```
   - **Response status:**
     - 201 Created: user created
     - 400 Bad Request: Invalid request body.

#### 3. **Get all users**
   - **Endpoint:** `GET /users`
   - **Description:** Get all users.
   - **Response:**
     ```json
     [{
       "userId": 2,
       "name": "new_user",
       "age": 28
       "sexe": "male",
       "pets": []
     }]
     ```
### Pets API

#### 1. **Get Pet Information**
   - **Endpoint:** `GET /pets/{petId}`
   - **Description:** Retrieve information about a specific pet.
   - **Parameters:**
     - `petId` (path parameter) - ID of the pet to retrieve.
   - **Response:**
     ```json
     {
       "petId": 1,
       "name": "Fluffy",
       "type": "Cat",
     }
     ```
   - **Response statuses:**
     - 200 Success: success
     - 404 Not Found: Pet not found.

#### 2. **Create Pet**
   - **Endpoint:** `POST /pets`
   - **Description:** Create a new pet.
   - **Request Body:**
     ```json
     {
       "name": "Doggy",
       "type": "Dog",
     }
     ```
   - **Response:**
     ```json
     {
       "petId": 2,
       "name": "Doggy",
       "type": "Dog",
     }
     ```
   - **Responses:**
     - 201 Create: pet created.
     - 400 Bad Request: Invalid request body.
     

#### 3. **Assign Pet to User**
   - **Endpoint:** `POST /users/{userId}/own/{petId}`
   - **Description:** Assign a pet to a user.
   - **Parameters:**
     - `userId` (path parameter) - ID of the user to assign the pet.
     - `petId` (path parameter) - ID of the pet to be assigned.
   - **Response:**
     ```json
     {
       "message": "Pet successfully assigned to the user."
     }
     ```
   - **Responses:**
     - 200 Success: Pet successfully assigned to the user.
     - 404 Not Found: User or pet not found.
     - 409 Conflict: Pet is already assigned to a user.
