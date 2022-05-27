//errors are handled by throw, try...catch...finally
//e.g
"use strict";
try {
  console.logg("AM AN ERROR MESSAGE"); //wrong log function
} catch (error) {
  console.log(error);
}

//throw and finally
try {
  consolee.error("try my error"); //wrong function
} catch (err) {
  throw err;
} finally {
  console.log("I EXECUTE NO MATTER WHAT!");
}
