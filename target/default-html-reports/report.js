$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/POST.feature");
formatter.feature({
  "name": "POST HTTP Requests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@POST"
    }
  ]
});
formatter.scenario({
  "name": "validate status code for POST request with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@POST"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"/skus\" is the endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.isTheEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "parameters",
  "rows": [
    {
      "cells": [
        "sku",
        "berliner"
      ]
    },
    {
      "cells": [
        "description",
        "Jelly donut"
      ]
    },
    {
      "cells": [
        "price",
        "2.99"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.parameters(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"POST\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"POST_Response\" schema",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.responseBodyHasSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate status code for POST request with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@POST"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"/skus\" is the endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.isTheEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "parameters",
  "rows": [
    {
      "cells": [
        "sku",
        "berliner"
      ]
    },
    {
      "cells": [
        "description",
        "Jelly donut"
      ]
    },
    {
      "cells": [
        "price",
        "2.99"
      ]
    },
    {
      "cells": [
        "trash",
        "trash"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.parameters(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"POST\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"POST_Response\" schema",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.responseBodyHasSchema(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});