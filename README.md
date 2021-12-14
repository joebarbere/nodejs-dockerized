# nodejs-dockerized
A simple starter nodejs app that has been dockerized and includes Kubernetes manifests for a simple deployment to k3d

## Install Instructions

* Install Docker Desktop
* docker build -t joebarbere/nodejs-dockerized
* docker push joebarbere/nodejs-dockerized
* Download and add kubectl and k3d to your path
* k3d cluster create play --api-port 6550 --servers 3 --agents 3 --port 8081:80@loadbalancer --wait
* kubectl create -f manifests\namespace.yaml
* kubectl create --namespace joebarbere -f manifests\deployment.yaml
* kubectl create --namespace joebarbere -f manifests\service.yaml
* kubectl create --namespace joebarbere -f manifests\ingress.yaml