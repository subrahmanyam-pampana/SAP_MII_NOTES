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

**Below is the list of services which are available in MII 12.0 and later.

- Admin
- Scheduler
- SystemInfo
**Below I mentioned few more services which are available in MII 12.1 and later
- Indexing
- Monitoring
- BLSManager
- Transport
- DataServer
- MII Services:
[check more details](https://blogs.sap.com/2013/01/02/illuminator-services-of-sap-mii/#:~:text=MII%20Services%20or%20illuminator%20services,of%20operations%20of%20the%20service.)

