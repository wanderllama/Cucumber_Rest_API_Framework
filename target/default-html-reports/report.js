$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GET.feature");
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
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e but was \u003c200\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat step_definition.MyStepdefs.statusCodeIs(MyStepdefs.java:66)\r\n\tat ✽.status code is \"404\"(file:src/test/resources/features/GET.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});