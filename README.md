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
    - Setup glouc CLI and Configure
      - Download and install the [SDK](https://cloud.google.com/sdk/docs/install)
      - Initialize gcloud cli: ```gcloud init```
      - Auth login: ```gcloud auth login```
      - Set the current project: ```gcloud config set project basic-crud-326823```
    - Connect ```kubectl``` to GKE cluster: ```gcloud container clusters get-credentials basic-crud-cluster --zone asia-southeast2-a --project basic-crud-326823```
    - Deploy: ```apply -n basic-crud-ns -f manifest.yml```

6. Testing the application
   - List the service: ```kubectl get svc```
   - Connect to the external IP and port of the service: http://34.101.208.12:8080/
