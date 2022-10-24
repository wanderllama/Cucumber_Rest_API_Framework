$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DELETE.feature");
formatter.feature({
  "name": "DELETE HTTP Requests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@DELETE"
    }
  ]
});
formatter.background({
  "name": "make POST request and retrieve {id} for DELETE request",
  "description": "",
  "keyword": "Background"
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
  "error_message": "java.lang.IllegalArgumentException: object cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:217)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:240)\r\n\tat io.restassured.internal.RequestSpecificationImpl.body(RequestSpecificationImpl.groovy:746)\r\n\tat step_definition.MyStepdefs.request(MyStepdefs.java:44)\r\n\tat ✽.\"POST\" request(file:src/test/resources/features/DELETE.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code is \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "validate status code for DELETE request by id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@DELETE"
    }
  ]
});
formatter.step({
  "name": "\"/skus/{id}\" is the endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.isTheEndpoint(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"DELETE\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code is \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/GET.feature");
formatter.feature({
  "name": "GET HTTP Requests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@GET"
    }
  ]
});
formatter.scenario({
  "name": "validate status code GET request all",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@GET"
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
  "name": "\"GET\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate status code for GET request by id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@GET"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"/skus/JB7RKM52IHBC0I99M6KVHLKC9NVV4KQNSO5AEMVJF66Q9ASUAAJG\" is the endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.isTheEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "invalid id GET request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@GET"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"/skus/invalidIdNumber\" is the endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.isTheEndpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" request",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e but was \u003c200\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$2.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat step_definition.MyStepdefs.statusCodeIs(MyStepdefs.java:66)\r\n\tat ✽.status code is \"404\"(file:src/test/resources/features/GET.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/POST.feature");
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
  "error_message": "java.lang.IllegalArgumentException: object cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:275)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.body(RequestSpecificationImpl.groovy:746)\r\n\tat step_definition.MyStepdefs.request(MyStepdefs.java:44)\r\n\tat ✽.\"POST\" request(file:src/test/resources/features/POST.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code is \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response body has the following",
  "rows": [
    {
      "cells": [
        "createdAt",
        "string"
      ]
    },
    {
      "cells": [
        "updatedAt",
        "string"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.responseBodyHasTheFollowing(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.IllegalArgumentException: object cannot be null\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.internal.common.assertion.AssertParameter$notNull.callStatic(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.body(RequestSpecificationImpl.groovy:746)\r\n\tat step_definition.MyStepdefs.request(MyStepdefs.java:44)\r\n\tat ✽.\"POST\" request(file:src/test/resources/features/POST.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code is \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.statusCodeIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response body has the following",
  "rows": [
    {
      "cells": [
        "createdAt",
        "string"
      ]
    },
    {
      "cells": [
        "updatedAt",
        "string"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.responseBodyHasTheFollowing(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});