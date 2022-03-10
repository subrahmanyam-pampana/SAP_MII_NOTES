# sap mii web page 
## global properties:
- `IllumLoginName` gives the login user name
- `IllumLoginRoles` gives the login user roles
  - syntax to get the values
  - `<input type="hidden" name="CD_USER" id="CD_USER" value = "{IllumLoginName}" />`
  - `<input type="hidden" name="CD_USER_ROLES" id="CD_USER_ROLES" value = "{IllumLoginRoles}" />`
 
 ## Webservices:
 - Calling the Transactions from web page
    -  syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction_path>&OutputParameter=*&Content-Type=text/xml&<paramName>=<param value>`
    -  syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction_path>&OutputParameter=*&Content-Type=text/json&<paramName>=<param value>`
 - Calling Xacute Qury or Query Template from web page
    - syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Illuminator?QueryTemplate=<query_path>&Content-Type=text/xml&<paramName>=<param value>`
    - syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Illuminator?QueryTemplate=<query_path>&Content-Type=text/json&<paramName>=<param value>`
# Illuminator Services in MII
- MII Services or illuminator services are basically a set of HTTP services that provide some core functionality of SAP MII. We can call these services externally by XML message exchange.

- Each illuminator services have a service name and one or more modes which are kind of operations of the service. At the time of execution, we must have to specify both the service name and mode with the input parameter if any. The services can e called programmatically or from the web pages by using AJAX or from BLS.

- The pattern of the URL is:
`http://<server>:<port>/XMII/Illuminator?service=<service name>&mode=<mode name>&content-type=text/xml`

## Services:

Below is the list of services which are available in MII 12.0 and later.

- Admin
- Scheduler
- SystemInfo
Below I mentioned few more services which are available in MII 12.1 and later
- Indexing
- Monitoring
- BLSManager
- Transport
- DataServer
- MII Services:

### Admin Services:
We can use the admin services to retrieve the administrative and security information of the SAP MII server. There are various modes available for the admin service. You can check them by the following URL.
     `http://<server>:<port>/XMII/Illuminator?service=admin&mode=modelist&content-type=text/xml`

Now I am discussing the various modes of admin service.

ContentList : Fetch the list of navigation links and their details.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=ContentList 

CurrentProfile : Fetch the user profile of the current user which includes name, full name, roles, email ID, and navigation items and links.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=CurrentProfile

DBInit : Re-initializes the delivered database content of the MII server. Anyone can use parameter type=All in the URL, which will reinitializes both the profile and the projects. Otherwise, it just updates the original projects delivered with the system. This is not recommended to use unless re-initialization is required.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=DBInit 

FullProfile : Fetch the full profile of the role or user specified in the parameter.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=FullProfile&Group=< user or role>

GetResource : fetch string resources based on the resources file name and the language. These are required for translating the screen labels to different languages. Valid Resource file name are UserStringResources, Messages, ErrorMessages and Applet.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=GetResource&language=<Language code>&FileName=<ResourceFileName>

AddResource : Add a language resource file to the server specified in the parameter.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=AddResource&language=<Language code>&FileName=<ResourceFileName>

Inspector : Fetch the list of the methods supported by the applet class specified in the parameter.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=Inspector&Name=<AppletClassName> 

PermissionList : Fetch the security services and their mapping to different role.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=PermissionList

ProfileEditor : Used to modify the profile of the user or role specified in the URL.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=ProfileEditor&Group=<user or role>&Payload=<XML data> 

RoleAttribList : Fetch the attributes of the role or user specified in the parameter.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=RoleAttribList&Group=<user or role>

RoleList : Fetch the list of roles available for the user or group.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=RoleList&Group=<user or role> 

RoleProfile : Fetch the profile details
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=RoleProfile&Group=<Group Name>

SessionList : Fetch the current logged in user with session details.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=SessionList

UserAttribList : Fetch the attributes of the current logged in user. Mask name is an additional parameter.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=UserAttribList&Mask=<Mask Name>

UserList : Fetch the list of the user available in the system.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=UserList&Group=<Role or Group Name> 

UserProfile : Fetch the profile details of the specified user.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=UserProfile&Group=<Group Name>

Who : Fetch the user name of the current logged in user.
                 http://<server>:<port>/XMII/Illuminator?service=admin&mode=Who 
  
## Scheduler Services:
  We can use the scheduler to control it programmatically. There are various modes available for the Scheduler service. You can check them by the following URL.
    ` http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=modelist&content-type=text/xml`

   Now I am discussing the various modes of Scheduler service.

Start : Start the SAP MII scheduler.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Start 

Run : Run a job at the current instance.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Run&ID=<job ID>

Stop : Stop the MII scheduler.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Stop 

List : Fetch the list of scheduled job
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=List

Import : Import schedule job details from an XML file that can be exported from another MII server.
                http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Import&Payload=<XML data> 

Export : Export the details of a scheduled job in the scheduler in the XML format.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Export&ID=<job ID>

History : Fetch the run history of the specific job.
                http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=History&ID=<job ID> 

Enable : Enables a scheduled job.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Enable&ID=<job ID>

Disable : Disables a scheduled job.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Disable&ID=<job ID> 

Delete : Deletes a schedule job.
                 http://<server>:<port>/XMII/Illuminator?service=scheduler&mode=Delete&ID=<job ID>

## SystemInfo Services:
  We can use the SystemInfo services to get the system related information of SAP MII. There are various modes available for the SystemInfo service. You can check them by the following URL.
          http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=modelist&content-type=text/xml 

         Now I am discussing the various modes of SystemInfo service.

Configuration: Fetch the system properties of the SAP MII server configuration.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=Configuration

CurrentProfile: Fetch the profile of the current logged-in user including role and navigation.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=CurrentProfile 

HostInfo: Fetch the hostname and IP address of the current system.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=HostInfo

JavaRunFinalizer: You can run the finalization method of any object pending for finalization in the Java virtual machine of the server.
                http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=JavaRunFinalizer 

JavaRunGC: You can run the Java garbage collector in the server. It will help to recycle the JVM to reuse the memory occupied by the unused objects.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=JavaRunGC

JavaRunTimeStatus: Fetch the current status of the JVM in the server. It includes memory status, number of processors etc.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=JavaRunTimeStatus 

JavaThreadStatus: Fetch the list of current runtime threads in the JVM of the server.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=JavaThreadStatus

RoleList: Fetch the list of roles available in the server.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=RoleList

SAPServerInfo: Fetch the info about a specific SAP server details.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=SAPServerInfo&Name=<SAPServerName>

ScheduleList: Fetch the list of the time period schedules configured.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ScheduleList 

ScheduleAttribList: Fetch the list of time period schedules configured in the system along with the time period.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ScheduleAttribList

ScheduleDetailsList: Fetch the details of time period schedules specified in the group.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=scheduleDetailsList&group=<ScheduleName> 

ServerList : Fetch the list of data server configured. You can fetch the server list based on the status by that service.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ServerList&Mask=<Enabled/disabled/All>

ServerAttribList: Fetch the list of data server details based on the group.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ServerAttribList&Group=<ServerName>&Mask=<Enabled/disabled/All>

ServerInfo: Fetch the list of data servers and their configuration details available in the system.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ServerInfo&Name=<ServerName>

ServiceList: Fetch the list of the service available in the system security.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=ServiceList 

Status: Fetch the status of the data server available in the system.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=Status

TimePeriodList: Fetch the list of the time period available in the system.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=TimePeriodList 

TimePeriodAttribList: Fetch the list of time period with the details.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=TimePeriodAttribList

UpTime: Fetch the info about the uptime of the server.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=UpTime 

UserList: Fetch the list of user available in the system.
                 http://<server>:<port>/XMII/Illuminator?service=SystemInfo&mode=UserList

Indexing Service: The indexing service includes method for examine what is indexed and monitor an indexer. The indexer rebuilds the index information. It will run through all files in the database and re-index them. This should only be used if somehow the indexes get out of sync.
The index types are the list of different items which are indexed whenever a file is saved. When calling services the index type must be specified since object names are not guaranteed to be unique across index types.

Index Type

Description

credential

Credential aliases used in transactions

connection

Connection aliases used in transactions

dataserver

Data servers used in query templates

File

Transaction, template, and manufacturing data object uses

There are various modes available for the Indexing service. You can check them by the following URL.

        http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=modelist&content-type=text/xml

          Now I am discussing the various modes of Indexing service.

Missing: We can use this service to retrieve an index object for which object doesn’t exist.
          http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=missing&type=<index type>&content-type=text/xml



Reindex: We can use this to delete the existing indexing and reindex them. For this, user needs SAP_XMII_Super_Administrator and SAP_XMII_Administrator roles.
                 http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=reindex&content-type=text/xml

Start: We can use this service to start the indexing if it not started already.
                 http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=start&content-type=text/xml



Status: We can use this service to check the status of the indexer and to check the list of the files indexed since the last start.
                 http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=status&content-type=text/xml



Usage: We can use this service to display the files for specific indexing type.
                 http://<server>:<port>/XMII/Illuminator?service=Indexing&mode=usage&type=<index type>&content-type=text/xml



Monitoring Service: We can use this service to retrieve the information for logins, file usage, server usage etc. We can determine load of the system, running transaction or query etc from that service.
There are various modes available for the Monitoring service. You can check them by the following URL.

        http://<server>:<port>/XMII/Illuminator?service=Monitoring&mode=modelist&content-type=text/xml

               Now I am discussing the various modes of Monitoring service.

Data Server: We can monitor the details stat as no of row returned, no of error etc for some duration.
                 http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=dataservers&content-type=text/xml&Duration=<hrs>

File Usage: We can monitor the usage of Query Templates and BLS from this service.
                 http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=fileusage&content-type=text/xml&Duration=<hrs> 

If you need project specific usage of QT or BLS then you have to add Project Name with the URL.

http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=FileUsageSummary&content-type=text/xml&Path=<ProjectName>&Duration=<hrs>



Message Server: We can monitor the usage of the message monitor from this service. We can check the no of messages received, processed, error etc.
                 http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=messages&content-type=text/xml&Duration=<hrs>



Login Count: We can monitor the count of the user login.
                 http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=logins&content-type=text/xml&Duration=<hrs>



If you need the login count for specific user, you can use the following url.

http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=loginssummary&content-type=text/xml&username=<username>&Duration=<hrs>



User Stat: We can monitor the no of request by the user and no of row returned.
                 http://<server>:<port>/XMII/Illuminator?service=Monitoring&Mode=UserQuery&content-type=text/xml&username=<username>&Duration=<hrs>



BLS Manager: We can use this service to retrieve the details information for BLS like running time of BLS, Highest run time, log, output, stats etc, and we can perform few activities like terminate transaction, delete transaction, clear transaction cache etc.
There are various modes available for the BLS Manager. You can check them by the following URL.

http://<server>:<port>/XMII/Illuminator?Service=BLSManager&Mode=ModeList&content-type=text/xml

            Now I am discussing the various modes of BLS Manager.



Transaction List: We can use this service to determine the transaction in running stat and to determine the highest running one etc.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=List&content-type=text/xml



Transaction Stat: We can get the details stat for each transaction from this service.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=Stats&content-type=text/xml&id=<id>



Transaction Log: We can get the transaction log for particular transaction ID.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=viewlog&content-type=text/xml&id=<id> 



Transaction Output: We can get the transaction output for particular transaction ID.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=viewoutput&content-type=text/xml&id=<id>



View Transaction Cache: We can get the details transaction cache.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=viewcache&content-type=text/xml 



Clear Transaction Cache: We can clear the transaction cache by this service.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=clearcache&content-type=text/xml



Terminate Transaction: We can terminate any transaction in running state.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=terminate&content-type=text/xml&id=<id> 



Delete Transaction: We can delete any transaction by this service.
                 http://<server>:<port>/XMII/Illuminator?service=BLSManager&Mode=Delete&content-type=text/xml&id=<id>



Transport: We can use this service to transport the configuration or project from one system to another system.
There are various modes available for the transport. You can check them by the following URL

http://<server>:<port>/XMII/Illuminator?service=Transport&Mode=ModeList&content-type=text/xml

Now I am discussing the various modes of Transport service.

Export Configuration: We can fetch the configuration from one system. But we have to pass the encryption algorithm and the pass phrases.
                 http://<server>:<port>/XMII/Illuminator?service=Transport&Mode=ExportConfig&Algorithm=<encrypt-algorithm>&Passphrase=<password> 

Export Project: We can fetch the project from one system. But we have to pass the encryption algorithm and the pass phrases.
                 http://<server>:<port>/XMII/Illuminator?service=Transport&Mode=ExportProject&Algorithm=<encrypt-algorithm>&Passphrase=<password>



DataServer: Using this service you can do the basic functionalities of data server like enable., disable, delete, export and import of data server.
          Now I am discussing the various modes of Data Server service.

Import: By that service you can import data server from one system to other system. If the data server exists in the system then it will update the existing and if not present then it will add the new one.
                 http://<server>:<port>/XMII/Illuminator?service=Configuration&mode=DataServers&type=Import&payload=<xml>



Export: We can export the list of data server by this service.
                 http://<server>:<port>/XMII/Illuminator?service=Configuration&mode=DataServers&type=Export



Enable: Using this service you can enable any data server which is in disable state.
                 http://<server>:<port>/XMII/Illuminator?service=Configuration&mode=DataServers&type=Enable&Name=<name>



Disable: Using this service you can disable any data server which is in enable state.
                 http://<server>:<port>/XMII/Illuminator?service=Configuration&mode=DataServers&type=Disable&Name=<name>



Delete: Using this service you can delete any data server.
                 http://<server>:<port>/XMII/Illuminator?service=Configuration&mode=DataServers&type=Delete&Name=<name>

I have collected and used most of the services in my project work and development of SAP MII. I have collected and consolidated them for my development and project work from SAP Help Documents, SCN community and from the book Implementing and configuring SAP MII from SAP Press written by Dipankar Saha and Abesh Bhattacharjee. I am not sure but may be I missed few MII services still so I am requesting you all if you know any other MII services Please feel free to add them in the blog and I will do the same also So that in future it will become a good repository of MII services which help everyone.


 
