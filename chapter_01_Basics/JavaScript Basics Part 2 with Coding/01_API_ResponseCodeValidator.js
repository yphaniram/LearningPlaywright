let statuscode = 400

/* Status codes 
-200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"
*/
console.log("Status code : ", statuscode)
console.log("Result : ")
if (statuscode == 200)
    console.log("PASS - OK: Request successful")
else if (statuscode == 201)
    console.log("PASS - Created: Resource created successfully")
else if (statuscode == 301)
    console.log("WARNING - Moved Permanently: URL has changed")
else if (statuscode == 400)
    console.log("FAIL - Bad Request: Check request payload")
else if (statuscode == 401)
    console.log("FAIL - Unauthorized: Check auth token")
else if (statuscode = 403)
    console.log("403 → \"FAIL - Forbidden: Insufficient permissions")
else if (statuscode == 404)
    console.log("404 → \"FAIL - Not Found: Check endpoint URL")
else if (statuscode == 500)
    console.log("FAIL - Internal Server Error: Backend issue")
else
    console.log("Any other → \"UNKNOWN - Unhandled status code")