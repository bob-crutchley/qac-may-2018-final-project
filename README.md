# qac-may-2018-final-project
#EZLearn Setup

** Set up all relevant servers and components **
> JBoss/Camel
> Consumer
> Rabbit MQ
> Producer
> Elastic
> MySQL
> Front End

##Elastic
> Install Docker
> Open up a terminal session and type in sudo sysctl -w vm.max_map_count=262144
> Type in docker run -d -p 9200:9200 -p 9300:9300 -e "http.host=0.0.0.0" -e "transport.host=0.0.0.0" docker.elastic.co/elasticsearch/elasticsearch:6.3.0

##MySQL
> Open up a terminal session and type in docker run --name -p 3306:3306 user-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=user -e MYSQL_USER=user_user -e MYSQL_PASSWORD=user_pass -d mysql:5.6
Open up My Sql Workbench and check to see if the table is empty before running the program


##RabbitMQ
> Open a terminal session and type in docker run -d --hostname my-rabbit --name some-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management
> Type in docker start some-rabbit
> To check that RabbitMQ is running, go to localhost:15672 in the browser. If you see the RabbitMQ login page sign in with the username guest and password guest.
> You should now see the dashboard.




##JBoss/Camel
> Import project into any directory.
> Download the following dependencies from the maven repository: Apache Commons, MySQL-Connector, SpringBoot. Place these files into the deploy folder of the JBoss folder.
> Open a terminal session and navigate to the JBoss folder (what you just downloaded). cd into the bin folder. Type in './fuse' to run the JBoss executable.

>JBoss will now start to run.


##Consumer
>Import the whole (final) EZLearn project. 
Either: Open a terminal session and navigate to the project folder. cd into the Consumer sub-project. Type in mvn spring-boot:run
Or: Run the 'Application.java' class file in your IDE
> This should start the consumer

##Producer
>Import the whole outer project into an IDE (IntelliJ is recommended). Open the producer sub-project. Run the 'UserApplication.java' class file.
> This should start the producer.

##Front End
>In the QuestionAPI project folder, open up the Questioncontroller class, and in the getByLevels method, edit the return strings to match the absolute filepath of where your Easy, Medium and Hard.JSON files are stored on your computer.
> Change directory to the FrontEnd folder within the project
> Type in npm install
>Type in npm start to start the application which should now be running