# sap mii web page 
## global properties:
- `IllumLoginName` gives the login user name
- `IllumLoginRoles` gives the login user roles
  - syntax to get the values
  - `<input type="hidden" name="CD_USER" id="CD_USER" value = "{IllumLoginName}" />`
  - `<input type="hidden" name="CD_USER_ROLES" id="CD_USER_ROLES" value = "{IllumLoginRoles}" />`
 
 ## Webservices:
 - Calling the Transactions from web page
    -  syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction path>&OutputParameter=*&Content-Type=text/xml&<paramName>=<param value>`
    -  syntax for getting xml data: `<protocal>://<server>:<port>/XMII/Runner?Transaction=<transaction path>&OutputParameter=*&Content-Type=text/json&<paramName>=<param value>`
 - Calling Xacute Qury or Query Template from web page
 
