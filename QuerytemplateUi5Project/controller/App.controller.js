sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller,MessageToast,JSONModel) {
    'use strict';
    return Controller.extend("app.controller.App",{

        onInit:function(){
            var that = this
            var oData =   Promise.resolve(
                jQuery.ajax({
                  url: "../masterData/tables.json",
                  method: "GET"
                })
            )

            oData.then(function(oResult){
                console.log(oResult)
                oResult = oResult.Rowsets.Rowset[0]
                console.log(oResult)

                var oModel = new JSONModel(oResult)
                // oModel.loadData("./masterData/tables.json")
                console.log(oModel)
                that.getView().setModel(oModel)
            })

           

           var oTestData = {
                "company" : {
                    "name"  : "Acme Inc.",
                    "street": "23 Franklin St.",
                    "city"  : "Claremont",
                    "state" : "New Hampshire",
                    "zip"   : "03301",
                    "revenue": "1833990"
                }
            }

            this.getView().setModel(new JSONModel(oTestData),"testModel")

            this.getView().byId("idQueryTextArea").onAfterRendering = function() {
                // call autocomplete plugin function after rendering of textarea is completed
                that.enableAutoComplete();
              };


        },
        roundToMillion:function(val){
            console.log(val)
        },

        onPress:function(){
            MessageToast.show("hello")
        },
        onItemPress:function(){
            alert("test")
        },
        onTableSelect:function(oController){
            var selectedItem = oController.getSource().getSelectedItem()
            var key  = selectedItem.getKey()
            var bindingContext = selectedItem.getBindingContext().getProperty()
            var columns = bindingContext.colums
            var colView = this.getView().byId("idColList")
            var oData = {
                columns:columns
            }
            var oModel = new JSONModel(oData)
            colView.setModel(oModel,"colModel")
        },
        enableAutoComplete:function(){
            var that = this
            var oQueryView = this.getView().byId("idQueryTextArea");
            var jQueryTextArea = jQuery("#" + oQueryView.getId()).find("Textarea");

            jQueryTextArea.textcomplete([
                {
                  // #1 - Regular experession used to trigger search
                  match: /(\b(\w+))$/, // --> triggers search for every char typed
        
                  // #2 - Function called at every new key stroke
                  search: function(query, fnCallback) {
                    var pData =   Promise.resolve(
                      jQuery.ajax({
                        url: "../masterData/tables.json",
                        method: "GET"
                      })
        
                    //   that
                    //     .getOwnerComponent()
                    //     .getModel("countriesData")
                    //     .getData()
                    );
                     
                    pData.then(function(oResult) {
                       
                    //    oResult = oResult.tables
                       console.log(oResult)
                      fnCallback(
                        oResult.Rowsets.Rowset[0].Row.filter(function(oRecord) {
                          // filter results based on query
                          console.log(oRecord.TableName,query.toUpperCase())
                          return oRecord.TableName
                            .toUpperCase()
                            .startsWith(query.toUpperCase());
                        })
                      );
                    });
                  },
        
                  // #3 - Template used to display each result (also supports HTML tags)
                  template: function(hit) {
                    // Returns the highlighted version of the name attribute
                    return hit.TableName;
                  },
        
                  // #4 - Template used to display the selected result in the textarea
                  replace: function(hit) {
                    return hit.TableName;
                  }
                }
              ]);
        }

    })
    
});
