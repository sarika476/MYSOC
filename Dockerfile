FROM openjdk:11
COPY ./backend/target/MYSOC-0.0.1-SNAPSHOT.jar ./
WORKDIR ./
EXPOSE 9090
CMD ["java","-jar","MYSOC-0.0.1-SNAPSHOT.jar"]
