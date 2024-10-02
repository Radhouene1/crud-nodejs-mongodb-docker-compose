Requirements: 
docker and docker-compose should be installed

clone the project and run it:

git clone 

docker-compose up --build

clear all env: 

docker stop $(docker ps -q)

docker rm $(docker ps -a -q)

docker rmi $(docker images -q)

docker network rm $(docker network ls -q)

docker volume rm $(docker volume ls -q)

docker system prune -a --volumes
