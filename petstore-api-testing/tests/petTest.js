const chakram = require('chakram'), expect = chakram.expect;

describe("Pet Tests", function() {
    it("POST /pet", function () {
        const data = {
            "id": 1,
            "category": {
              "id": 1,
              "name": "Golden"
            },
            "name": "Doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 1,
                "name": "Old"
              }
            ],
            "status": "available"
          }


        const response = chakram.post("https://petstore.swagger.io/v2/pet", data);
        expect(response).to.have.status(200);
        return chakram.wait();
        });

    it("GET /pet/{petId}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/pet/1");
        expect(response).to.have.status(200);
        return chakram.wait();
        });
        
    it("PUT /pet", function () {
        const data = {
            "id": 1,
            "category": {
                "id": 1,
                "name": "Golden"
            },
            "name": "Doggie",
            "photoUrls": [
                "https://images.app.goo.gl/HGtUDi7XTnbvE7wj7"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "Old"
                }
            ],
            "status": "available"
        }
        
        
        const response = chakram.put("https://petstore.swagger.io/v2/pet", data);
        expect(response).to.have.status(200);
        return chakram.wait();
          });


    it("DELETE /pet/{petId}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/pet/1");
        expect(response).to.have.status(200);                
        return chakram.wait();
        });

});