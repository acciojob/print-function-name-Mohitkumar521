//your JS code here. If required.
var functionName = function() {
  alert("functionName");
};

// Test the function
functionName();
var functionName = function() {
  alert(arguments.callee.name);
};

// Test the function
functionName();
