# Basic CRUD Application
 
- Created by: Immanuel Hardjo
- Description: Basic CRUD implementation using Express & MongoDB on NodeJS. Deployment using Docker and Kubernetes (GKE)
 
## Configuration steps:
1. Clone the project
```git clone https://github.com/immanuelhardjo/basic-crud```

2. Install dependencies
```npm install```

3. Set up MongoDB database & configure .env connection string. 

4. Dockerize application:
    - Build docker image: ```docker build -t immanuelhardjo/basic-crud:v1 . ```
    - Push image to docker hub registry: ``` docker push immanuelhardjo/basic-crud:v1 ```
    
5. Setup Kubernetes:
    - Create new Google Cloud Platform Project 
    - Setup Google Kubernetes Engine
    - Connect ```kubectl``` to GKE cluster
    - Deploy: ```apply -n basic-crud-ns -f manifest.yml```
