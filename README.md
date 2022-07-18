
docker build  -t vincent/node-tekton .
docker tag vincent/node-tekton:latest vincent/node-tekton:1.0.0

docker run -d -p 3010:3010 vincent/node-tekton



docker build  -t vincent/node-tekton ./test 
