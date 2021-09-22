# basic-crud
 
1. git clone https://github.com/user-name/repository.git.
2. npm install
3. Set up MongoDB database & configure .env connection string
4. Dockerize application:
    a. Build docker image: docker build -t immanuelhardjo/basic-crud:v1 .
    b. Push image to docker hub registry: docker push immanuelhardjo/basic-crud:v1
    c. [OPTIONAL] Run docker in local machine w/ port forwarding: run docker image: docker run -p 5000:5000 immanuelhardjo/basic-crud:v1
5. Setup Kubernetes:
    a. Setup minikube
    b. Create k8s namespace: kubectl create ns basic-crud-ns
    c. Deployment: apply -n basic-crud-ns -f manifest.yml
