I have dockerized this application too with the Dockerfile and finally after running the app from its container you have to use port forwarding
to be able to see your app on local system ....as running in container is not exactly same as running on local host 

so while running the container remember to use this 

-p <localhost port>:<port where application is running in container>