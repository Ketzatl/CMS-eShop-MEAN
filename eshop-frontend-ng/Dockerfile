#checkov:skip=CKV_DOCKER_3:Ensure that a user for the container has been created
FROM nginxinc/nginx-unprivileged:stable-alpine

COPY dist/  /usr/share/nginx/html
COPY conf/  /etc/nginx/conf.d

