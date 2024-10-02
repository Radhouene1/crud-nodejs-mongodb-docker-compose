Requirements: docker and docker-compose should be installed

Get the Code and run the project: 
git clone

cd 

docker-compose up --build

clear all env: 

docker stop $(docker ps -q)

docker rm $(docker ps -a -q)

docker rmi $(docker images -q)

docker network rm $(docker network ls -q)

docker volume rm $(docker volume ls -q)

docker system prune -a --volumes
