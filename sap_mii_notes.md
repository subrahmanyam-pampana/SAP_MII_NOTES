# sap mii web page 
## global properties:
[mark down cheet sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
- `IllumLoginName` gives the login user name
- `IllumLoginRoles` gives the login user roles
  - syntax to get the values
  - `<input type="hidden" name="CD_USER" id="CD_USER" value = "{IllumLoginName}" />`
  - `<input type="hidden" name="CD_USER_ROLES" id="CD_USER_ROLES" value = "{IllumLoginRoles}" />`
 
 ## Webservices:
 - WebService to place a Message in MII Que, used to send xml to MII from MES system trough HTTP post call
    - `http://<server>:<port>/XMII/Illuminator?service=WSMessageListener&mode=WSMessageListenerServer&NAME=<UniqueMessageName>&content-type=xml/text`
 - Calling the Transactions from web page
    -  syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction_path>&OutputParameter=*&Content-Type=text/xml&<paramName>=<param value>`
    -  syntax for getting json data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction_path>&OutputParameter=*&Content-Type=text/json&<paramName>=<param value>`
 - Calling Xacute Qury or Query Template from web page
    - syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Illuminator?QueryTemplate=<query_path>&Content-Type=text/xml&<paramName>=<param value>`
    - syntax for getting json data: `<protocal>://<server>:<port>/XMII/Illuminator?QueryTemplate=<query_path>&Content-Type=text/json&<paramName>=<param value>`
# Illuminator Services in MII
- MII Services or illuminator services are basically a set of HTTP services that provide some core functionality of SAP MII. We can call these services externally by XML message exchange.

- Each illuminator services have a service name and one or more modes which are kind of operations of the service. At the time of execution, we must have to specify both the service name and mode with the input parameter if any. The services can e called programmatically or from the web pages by using AJAX or from BLS.

- The pattern of the URL is:
`http://<server>:<port>/XMII/Illuminator?service=<service name>&mode=<mode name>&content-type=text/xml`

## Services:

**Below is the list of services which are available in MII 12.0 and later**

- Admin
- Scheduler
- SystemInfo

**Below I mentioned few more services which are available in MII 12.1 and later**
- Indexing
- Monitoring
- BLSManager
- Transport
- DataServer
- MII Services:
[check more details](https://blogs.sap.com/2013/01/02/illuminator-services-of-sap-mii/#:~:text=MII%20Services%20or%20illuminator%20services,of%20operations%20of%20the%20service.)
## Catalog Services
1.to get the list of folders and sub folders use the below service

`http://host:port/XMII/Catalog?Mode=LoadFilesInsideFolderAndSubfolders&Class=Query&Folder=<project_folder_name>`

This will return all the Query template files, if you remove Class from the URL it would return files irrespective of the type.

2.To get MDO files you could try the below combination of URLs:

`http://host:port/XMII/Catalog?Mode=ListFolders&Folder=<project_folder_name>&Type=MDO`

This would return the folder path which contains MDO objects, for example : MDO/MIIOBJ. This folder path could be passed to the below URL to get the persistent MDO objects:

`http://host:port/XMII/Catalog?Mode=List&Folder=MDO/MIIOBJ&Mask=mdop`
## How's
1. How to Send Data from MII to ECC using RFC?
...let us discuss here
 ## IDOCs
 - [MBGMCR03](https://github.com/subrahmanyam-pampana/SAP_MII_NOTES/blob/main/MBGMCR03.html)
